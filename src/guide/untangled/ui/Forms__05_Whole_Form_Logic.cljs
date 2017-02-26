(ns untangled.ui.Forms--05-Whole-Form-Logic
  (:require
    [clojure.string :as str]
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [com.stuartsierra.component :as component]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.client.mutations :as m :refer [defmutation]]
    [untangled.ui.forms :as f]
    [untangled.icons :as i]
    [untangled.client.cards :refer [untangled-app]]
    [untangled.ui.simulated-server :refer [make-mock-network]]
    [untangled.ui.elements :as ele]
    [untangled.client.logging :as log]
    [untangled.client.data-fetch :as df]
    [untangled.client.impl.network :as un]))

(defn read-handler [{:keys [users]} k {:keys [name] :as params}]
  (log/info "SERVER query for " k " with parameters " params
    " and existing usernames " users)
  (case k
    :name-in-use {:value (if (contains? users name) :duplicate :ok)}
    nil))

;; Server-side mutation handling. We only care about one mutation
(defn write-handler [env k p]
  (log/info "SERVER mutation for " k " with params " p))

; Om Next query parser. Calls read/write handlers with keywords from the query
(def server-parser (om/parser {:read read-handler :mutate write-handler}))

; Simulated server. You'd never write this part
(defn server [env tx]
  (server-parser (assoc env :users #{"tony" "sam"}) tx))

; Networking that pretends to talk to server. You'd never write this part
(defrecord MockNetwork [complete-app]
  un/UntangledNetwork
  (send [this edn ok err]
    ; simulates a network delay:
    (js/setTimeout
      #(let [resp (server {} edn)]
         (ok resp))
      1000))
  (start [this app]
    (assoc this :complete-app app)))

(defn field-with-label
  "A non-library helper function, written by you to help lay out your form."
  ([comp form name label] (field-with-label comp form name label nil))
  ([comp form name label validation-message]
   (dom/div #js {:className (str "form-group" (if (f/invalid? form name) " has-error" ""))}
     (dom/label #js {:className "col-sm-2" :htmlFor name} label)
     (dom/div #js {:className "col-sm-10"} (f/form-field comp form name))
     (when validation-message
       (dom/div #js {:className (str "col-sm-offset-2 col-sm-10 " name)} validation-message)))))

(defui NameInUseQuery
  static om/IQuery
  (query [this] []))

(defmutation check-username-available
  "Sample mutation that simulates legal username check"
  [{:keys [form-id kind field]}]
  (action [{:keys [state]}]
    (when (and (= kind :blur) (= :person/name field))
      (let [value (get-in @state (conj form-id field))]
        (swap! state assoc-in (conj form-id :ui/name-status) :checking)
        (df/load-action state :name-in-use nil {:target  (conj form-id :ui/name-status)
                                                :refresh [f/form-root-key]
                                                :marker  false
                                                :params  {:name value}}))))
  (remote [env] (df/remote-load env)))

(defui ^:once Person
  static uc/InitialAppState
  (initial-state [this params] (f/build-form this (or params {})))
  static f/IForm
  (form-spec [this] [(f/id-field :db/id)
                     (f/on-form-change `check-username-available)
                     (f/text-input :person/name)
                     (f/integer-input :person/age)])
  static om/IQuery
  (query [this] [f/form-root-key f/form-key
                 :db/id :person/name :person/age :ui/name-status])
  static om/Ident
  (ident [this props] [:person/by-id (:db/id props)])
  Object
  (render [this]
    (let [{:keys [ui/name-status] :as props} (om/props this)]
      (dom/div #js {:className "form-horizontal"}
        (field-with-label this props :person/name "Username:"
          (case name-status
            :duplicate (ele/ui-message {:color :alert}
                         "That username is in use." (i/icon :error))
            :checking (ele/ui-message {:color :neutral}
                        "Checking if that username is in use...")
            :ok (ele/ui-message {:color :success} "OK" (i/icon :check))
            ""))
        (field-with-label this props :person/age "Age:")
        (dom/div #js {:className "button-group"}
          (dom/button #js {:className "btn btn-default"
                           :disabled  (not (f/dirty? props))
                           :onClick   #(f/commit-to-entity! this :remote true)}
            "Save!"))))))

(def ui-person (om/factory Person {:keyfn :db/id}))

(defui ^:once CommitRoot
  static uc/InitialAppState
  (initial-state [this _] {:person (uc/initial-state Person {:db/id 1})})
  static om/IQuery
  (query [this] [:ui/react-key
                 {:person (om/get-query Person)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key new-person person]} (om/props this)]
      (dom/div #js {:key react-key}
        (ui-person person)))))

(defcard-doc
  "# Forms – Whole Form Logic

  Many forms need logic that updates the UI in some non-local way as form interactions take place.
  Simple field validations can be local to a field, but some UI changes require who-form reasoning
  or cross-field interactions.

  Some simple examples:

  - Verification fields (two fields must contain the same data to ensure they typed it correctly)
  - Triggering a server-side check of a value (e.g. is that username in use?)
  - Making other UI elements appear/disappear according to field changes

  We accomplish these things in the form support by allowing you to declare an entry in your
  `IForm` list that names an Untangled mutation to run as changes are detected in the form/subform
  set.

  The mutation given is just a normal mutation that can do anything you need done: remoting, global
  reasoning, etc.

  Only one (the last if more than one) `on-form-change` can be declared on a form. Use other composition
  techniques to make a single mutation if you'd like multiple operations on the form change.

  ```
  (defui ^:once Person
    static uc/InitialAppState
    (initial-state [this params] (f/build-form this (or params {})))
    static f/IForm
    (form-spec [this] [(f/id-field :db/id)
                       (f/on-form-change `check-username-available)
                       (f/text-input :person/name)
                       (f/integer-input :person/age)])
  ```

  ## The Events

  The form change support can send events on change and on blur. The latter is useful for regular
  input fields (as opposed to checkboxes, for example). Your mutation will be passed parameters
  as a map that has:

  `:form-id` - The ident of the form that generated the event
  `:kind` - Either :blur or :edit
  `:field` - The name of the field affected

  Your mutation can do anything a normal mutation can do.

  ## An Example

  In this example, we'll use remoting to ask the server (on field blur) if a given username is
  already in use (in our code, 'sam' and 'tony' are taken). The client-side mutation looks like this:

  ```
  (defmutation check-username-available
    [{:keys [form-id kind field]}]
    (action [{:keys [state]}]
      (when (and (= kind :blur) (= :person/name field)) ; only do things on blur
        (let [value (get-in @state (conj form-id field))] ; get the value of the field
          (swap! state assoc-in (conj form-id :ui/name-status) :checking) ; set a UI state to show progress
          (df/load-action state :name-in-use nil {:target  (conj form-id :ui/name-status) ; trigger a remote load
                                                  :refresh [f/form-root-key] ; ensure the forms re-render
                                                  :marker  false ; don't overwrite our marker with a loading marker
                                                  :params  {:name value}})))) ; include params on the query
    (remote [env] (df/remote-load env))) ; trigger eval of network queue to see if there is anything remote to do
  ```

  and a server-side query function would satisfy this with something like this (users is just a set of existing usernames in
  our sample code):
  "
  (dc/mkdn-pprint-source read-handler)
  "

  Now, the sequence of interactions is as follows:

  1. The user blurs on the username field (we could also debounce edit events)
  2. The mutation places a marker in the app state that allows the UI to show the 'checking' message
  3. The mutation causes a remote query targeted to the marker location
  4. When the server query completes, it overwrites the marker from (2) with the server response

  The main catch is the `:refresh` argument to the `load-action`. This ensures that the form gets
  re-rendered when the request completes. Of course, this could have just as easily been any keyword
  queried by Person.

  The general Person form UI looks like this:
  "
  (dc/mkdn-pprint-source Person)
  "
  Note, in particular, that the query includes `:ui/name-status` and rendering code for the possible
  values of status. The UI is completely disconnected from the fact that remoting is being used
  to verify the username.
  ")

(defcard form-changes
  "# Live Example

  The following sample uses a mock server to do a full-stack form interaction example that uses
  `on-form-change` to check is a username is available. The already known usernames are 'tony' and
  'sam'.

  On blur, the server will be asked if the username is available (with a simulated 1s network latency).

  Try `tony` (in use) and `bob` (not in use).
  "
  (untangled-app CommitRoot
    :networking (map->MockNetwork {}))
  {}
  {:inspect-data false})

