(ns untangled.ui.element-visuals
  (:require
    [devcards.core :as dc :refer-macros [defcard]]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.ui.menu :as dropdowns :refer [menu menu-item]]
    [untangled.ui.elements :as e]
    [untangled.icons :refer [icon]]
    [untangled.i18n :as i :refer [tr trf]]))

(defcard buttons-visual-regression-testing
  (dom/div nil
    (for [shape    [:rect :round :wide]
          color    [:neutral :primary :accent]
          size     [:normal :small]
          disabled [true false]
          active   [true false]]
      (e/ui-button {:className "extra" :color color :active active :disabled disabled
                    :shape     shape :size size}
        (str shape " " color " " size " " (when disabled "disabled ") (when active "active "))))
    (e/ui-button {} "Label" (icon :arrow_forward))
    (e/ui-button {} (icon :arrow_back) "Label")))

(defcard flat-buttons-visual-regression-testing
  (dom/div nil
    (for [shape    [:rect :round :wide]
          color    [:neutral :primary :accent]
          size     [:normal :small]
          disabled [true false]
          active   [true false]]
      (e/ui-flat-button {:className "extra" :color color :active active :disabled disabled
                         :shape     shape :size size}
        (str shape " " color " " size " " (when disabled "disabled ") (when active "active "))))
    (e/ui-flat-button {} "Label" (icon :arrow_forward))
    (e/ui-flat-button {} (icon :arrow_back) "Label")))

(defcard badges-visual-regressions
  (dom/div nil
    (e/ui-button {} "Notifications " (e/ui-badge {} "8"))
    (e/ui-badge {:className "hello"} "7")
    (e/ui-badge {} (icon :arrow_back))
    (e/ui-badge {} (icon :arrow_back) (icon :arrow_forward))))

(defcard card
   (dom/div nil
      (e/ui-card {:title "Card Title"} (dom/p nil "Card with a title"))
      (e/ui-card {:type :round} (dom/p nil "Round Card, no title"))
      (e/ui-card {:type :transparent :title "Transparent Card Title"} (dom/p nil "Text for Transparent Card"))
      (e/ui-card {:type :ruled :title-bar true :title "Ruled Title"} (dom/p nil "Text for Ruled Card"))
      (e/ui-card {:type :zone} (dom/p nil "Text for Zone Card"))))

(defcard labels-visual-regressions
  (dom/div nil
    (e/ui-label {} "Default")
    (e/ui-label {:color :green} "Green")
    (e/ui-label {:color :blue} "Blue")
    (e/ui-label {:color :magenta} "Magenta")
    (e/ui-label {:color :grey} "Grey")
    (e/ui-label {:color :yellow} "Yellow")
    (e/ui-label {:color :orange} "Orange")
    (e/ui-label {:color :red} "red")
    (e/ui-label {:color :green} (icon :add) "Add")
    (e/ui-label {:color :red} (icon :close) "Remove")))

(defcard field-visual-regressions
  (dom/div nil
    (e/ui-field {} "Default field")
    (e/ui-field {:size :small :state #{:required}} "Small required field")
    (e/ui-field {:size :medium :state #{:focus}} "Medium focused field")
    (e/ui-field {:size :large :state #{:invalid}} "Large invalid field")
    (e/ui-field {:state #{:error}} "Error field")))

(defcard messages-visual-regressions
  (dom/div nil
    (e/ui-message {} "This is default message.")
    (e/ui-message {:color :neutral} "This is neutral message.")
    (e/ui-message {:color :alert} "This is an alert message.")
    (e/ui-message {:color :success} "This is a success message.")
    (e/ui-message {:color :warning} "This is a warning message.")
    (e/ui-message {:color :warning} "This is a warning message with another child." (icon :arrow_forward))
    (e/ui-message {:className "h2"} "This is message using a standard H2 class name.")))

(defcard checkbox
   (dom/div nil
    (e/ui-checkbox {:id "checkbox"} )
    (e/ui-checkbox {:id "checkbox" :style #{:is-indeterminate}} )
    (e/ui-checkbox {:id "checkbox" :style #{:c-checkbox--informative}} )
    (e/ui-checkbox {:id "checkbox" :style #{:is-indeterminate :c-checkbox--informative}} )))
