// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.Forms__03_Server_Integration');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('com.stuartsierra.component');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.client.cards');
goog.require('untangled.client.core');
goog.require('untangled.client.mutations');
goog.require('untangled.ui.forms');
goog.require('untangled.i18n');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__03_Server_Integration","untangled.ui.Forms__03_Server_Integration",-1408684678),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Server Integration\n\n  A form (and associated subforms) have support for saving state to the\n  server. This support takes the best view it possibly can of the possible\n  things a user can do to an entity via a form:\n\n  A user should be able to:\n\n  1. Change the value of one or more fields.\n  2. Add a completely new entity (with tempid) to the database (e.g. new form or new subform)\n  3. Link an existing form to an instance of a subform. The subform might have been looked up (by your code)\n  or created (via 2).\n  4. Remove the linkage from a form to a subform.\n\n  ## Handling Submission of a Form\n\n  A form submission is done via the `commit-to-entity` function/mutation with the inclusion\n  of a `:remote` flag. The function version `commit-to-entity!` is a simple wrapper of an\n  Om `transact!` that invokes the Om `f/commit-to-entity` mutation (where `f` is the forms namespace).\n  The former is a convenience, and the latter is more useful when you want to compose commit with\n  other transaction actions (such as navigation away from the form).\n\n  The wrapper function must be called using the `this` of the component that is the top-level of the form,\n  and the mutation must be called with the `props` of the top-level form.\n\n  Both default to a local commit (where you can deal with persistence in some other way), but if you supply\n  them with a remote argument they will send the *changes* to the data in the form to the server. Of course,\n  new entities will be completely sent.\n\n  ## What Your Server Must Do\n\n  On the server, you must provide a mutation handler for the `f/commit-to-entity` symbol (where `f` is the\n  forms namespace). If you're using multimethods on the server, this might look like:\n\n  ```\n  (ns amazing-server.mutations\n    (:require\n      [om.next :as om]\n      [untangled.ui.forms :as f]))\n\n  (defmulti my-mutate om/dispatch)\n\n  ;; NOTE: the syntax quote will honor the `f` aliasing in the ns.\n  (defmethod my-mutate `f/commit-to-entity [env k params]\n     {:action (fn [] ...)})\n  ```\n\n  The complete form delta will be in the incoming `params`. The description of the entries in `params`\n  is below.\n\n  ## Incoming Server Parameters for `commit-to-entity`\n\n  The incoming parameters is a map. This map will contain up to four different keys to indicate\n  what changed on the client.\n\n  ### Form Field Updates\n\n  Field updates are sent under the following conditions:\n\n  - The entity of the form has a REAL ID\n  - One or more fields have values different from those at the time of `build-form` or the last commit.\n\n  The parameters sent to the `commit-to-entity` mutation on the server will include the key\n  `:form/updates` whose value will be a map. The map's keys will be client-side idents of\n  the entities that changed, and the values will be maps of k-v pairs of the data the changed.\n\n  Examples:\n\n  ```\n  {:form/updates { [:thing 1] {:field-a 1 }\n                   [:thing 2] {:field-b 55 }}}\n  ```\n\n  NOTES:\n\n  - Updates will *never* include referential updates (e.g. A references subform element B). See\n  New Relations and Removed Relations below.\n  - Fields on the entity in the UI that are *not* declared as form fields *will never* appear in\n  an update.\n\n  ### New Entities\n\n  When a form (and/or subforms) is submitted that has a primary ID whose value is an Om tempid then\n  the incoming commit parameters will include the `:form/new-entities` key. The value of this entry is just like\n  that of `:form/updates`, but the ID in the ident will be an Om tempid (which you must send remaps\n  back for), and the map of data will include all attributes of that entity that were declared as part\n  of the form.\n\n  ```\n  {:form/new-entities { [:thing tempid-1] {:field-a 1 :field-b 55 }\n                        [:thing tempid-2] {:field-a 8 :field-b 42 }}}\n  ```\n\n  It is important that you remember to return a map to remap the incoming tempids:\n\n  ```\n  (defmethod my-mutate `f/commit-to-entity [env k params]\n     {:action (fn []\n                ...\n                {:tempids {tempid-1 realid-1 tempid-2 realid-2}})})\n  ```\n\n  NOTES:\n  - New entity properties include only the columns declared in the form support. Remember that you can\n  declare fields without rendering them.\n  - New entity entries *do not include* references! Any reference changes are always expressed\n  with linkage change entries, as described below.\n\n  ### New Relations\n\n  If a subform is explicitly declared, then new linkage between a form and the subforms will\n  be expressed via the `:form/add-relations` entry. The value will be a map whose keys are idents of the\n  referring object and whose values are a single ident (in the to-one case) or vectors of the idents (in the to-many\n  case) of the new targets. This is a delta. This is\n  not meant to be interpreted as all of them, just the ones that were added since the form was considered\n  clean.\n\n  Examples:\n\n  Two different to-one relationship additions:\n\n  ```\n  {:form/add-relations { [:thing tempid-1] {:thing/child [:thing tempid-2] }\n                         [:thing tempid-2] {:thing/parent [:thing tempid-1] }}}\n  ```\n\n  A to-many parent-child relationship with two new children:\n\n  ```\n  {:form/add-relations { [:people/by-id 1] {:person/number [[:phone/by-id 2] [:phone/by-id 3]] }}}\n  ```\n\n  ### Removed Relations\n\n  If a subform is explicitly declared, then removal of linkage between a form and the subforms will\n  be expressed via the `:form/remove-relations` entry. The value will be a map whose keys are idents of the\n  referring object and whose values just like in new linkage. This is also a delta.\n\n  Examples:\n\n  Removal of a to-one relation:\n\n  ```\n  {:form/remove-relations { [:thing 1] {:thing/child [:thing 2] }}}\n  ```\n\n  Removal of a single child in a to-many relation:\n\n  ```\n  {:form/remove-relations { [:people/by-id 1] {:person/number [[:phone/by-id 3]] }}}\n  ```\n\n  # Updating a forms-based Entity From the Server\n\n  Since your app state is normalized, any reads of an entity will end up being merged over top of\n  the entity you already have. This means that your active form fields on such an entity would\n  update.\n\n  There are some caveats to doing this, since the *remembered* state of your form will now be out\n  of sync with what you read (or pushed) from the server.\n\n  Typically what you'll want to do when (re)reading an entity that is being actively used on a form is:\n\n  1. Issue an untangled load for that entity. The incoming state will cause the UI of the form to update\n  (since you're always editing/rendering active state of the entity). Unfortunately, the pristine state\n  of the form now thinks the newly loaded entity is *dirty*!\n  2. Include a post mutation, which should:\n      - `dissoc` the form state via `(update-in app-state form-ident dissoc f/form-key)`\n      - Run `build-form` on the form\n      - Optionally use the `validate-fields` or `validate-forms` function to update the validation markers.\n\n  A non-remote (local-only) commit-to-entity (still as a post-mutation) could also be used to accomplish (2).\n  "),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));

//# sourceMappingURL=Forms__03_Server_Integration.js.map?rel=1489703354576