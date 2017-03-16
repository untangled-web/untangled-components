// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.Layout__01_Basics');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('untangled.ui.layout');
goog.require('untangled.ui.elements');
goog.require('untangled.client.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Layout__01_Basics,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["# Layout\n\n  Untangled UI includes CSS for a responsive grid that is 12-elements wide. The `layout` namespace includes a number\n  of functions that can generate the various DOM elements with the correct classes in a more conside form to\n  make code more readable (and potentially more portable, since the concepts are not tied to DOM or CSS directly).\n\n  Some general notes:\n\n  - The helper functions accept a clj(s) map as an argument. All React properties are allowed in this map.\n  - The special attributes these helpers take will be translated to CSS for you.\n  - The resulting set of attributes will be converted to the proper JS object and passed to React DOM elements.\n\n  This causes some nice simplifications because you're always working with regular clojure data structures. Expressions\n  using the raw CSS like:\n\n  ```\n  (dom/div #js {:className \"my-custom-class u-column--2\" :style #js {:color :red}} ...)\n  ```\n\n  instead look like:\n\n  ```\n  (l/col {:width 2 :className \"my-custom-class\" :style {:color :red}} ...)\n  ```\n\n  "], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Layout__01_Basics,cljs.core.cst$kw$rows], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"rows",cljs.core.cst$kw$documentation,"# Rows and Columns\n\n  Rows are created with the `row` function. Columns are created with the `col` function. Columns have a width from\n  1 to 12.\n\n  ```\n  (l/row {}\n   (l/col {:width 12 :style {:backgroundColor :yellow}} \"A row\"))\n  ```\n\n  which renders:\n  ",cljs.core.cst$kw$main_DASH_obj,untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(12),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq(["A row"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Layout__01_Basics,cljs.core.cst$kw$basic_DASH_grid], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"basic-grid",cljs.core.cst$kw$documentation,"# Basic Grid\n\n  Thus, one can create a basic layout by putting together a few rows with columns:\n\n  ```\n  (l/row {:style {:height \"200px\"}}\n    (l/col {:width 2 :style {:backgroundColor :yellow}} \"Left column\")\n    (l/col {:width 10 :style {:backgroundColor :lightgray}} \"Right column\")))\n  ```\n\n  which renders as:\n\n  ",cljs.core.cst$kw$main_DASH_obj,untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"200px"], null)], null),cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(2),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq(["Left column"], 0)),untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(10),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightgray], null)], null),cljs.core.array_seq(["Right column"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Layout__01_Basics,cljs.core.cst$kw$grid_DASH_nesting], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"grid-nesting",cljs.core.cst$kw$documentation,"# Nesting Grids\n\n  One can nest 12-column grids within the grid by nesting rows. This makes it possible\n  to create more complex layouts:\n\n  ```\n  (l/row {:style {:height \"200px\"}}\n    (l/col {:width 2 :style {:backgroundColor :yellow}} \"Left column\")\n    (l/col {:width 10 :style {:backgroundColor :lightgray}}\n      (l/row {}\n        (l/col {:width 12 :style {:backgroundColor :lightblue}} \"Toolbar Items\"))\n      (l/row {}\n        (l/col {:width 12 :style {:backgroundColor :orange}}\n          (dom/p nil \"Other content\")\n          (dom/p nil \"Other content\")\n          (dom/p nil \"Other content\")\n          (dom/p nil \"Other content\")))))\n  ```\n\n  which renders as:\n\n  ",cljs.core.cst$kw$main_DASH_obj,untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"200px"], null)], null),cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(2),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq(["Left column"], 0)),untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(10),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightgray], null)], null),cljs.core.array_seq([untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(12),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightblue], null)], null),cljs.core.array_seq(["Toolbar Items"], 0))], 0)),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(12),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$orange], null)], null),cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Other content"], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Other content"], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Other content"], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Other content"], 0))], 0))], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Layout__01_Basics,cljs.core.cst$kw$column_DASH_push], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"column-push",cljs.core.cst$kw$documentation,"# Pushing Columns\n\n  There are times when you'd like to skip some number of columns. The `:push` attribute on a column can be used to\n  do this.\n\n  ```\n  (l/row {:style {:height \"200px\"}}\n    (l/col {:width 2 :style {:backgroundColor :yellow}} \"Left column\")\n    (l/col {:width 8 :push 2 :style {:backgroundColor :orange}}\n      (dom/p nil \"Other content\")\n      (dom/p nil \"Other content\")\n      (dom/p nil \"Other content\")\n      (dom/p nil \"Other content\")))\n  ```\n\n  which renders as:\n  ",cljs.core.cst$kw$main_DASH_obj,untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"200px"], null)], null),cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(2),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq(["Left column"], 0)),untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(8),cljs.core.cst$kw$push,(2),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$orange], null)], null),cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Other content"], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Other content"], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Other content"], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Other content"], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Layout__01_Basics,cljs.core.cst$kw$consuming_DASH_unused_DASH_columns], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"consuming-unused-columns",cljs.core.cst$kw$documentation,"# Consuming Unused Columns\n\n  Rows can be told how to deal with unused columns with :distribute-extra-columns as :around or :between.\n\n  ```\n  (dom/div nil\n    (l/row {:style {:backgroundColor :yellow}}\n      (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} \"12-Column Wide\"))\n    (l/row {:distribute-extra-columns :around :style {:backgroundColor :yellow}}\n      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\")\n      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\")\n      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\"))\n    (l/row {:distribute-extra-columns :between :style {:backgroundColor :yellow}}\n      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\")\n      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\")\n      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\")))\n  ```\n\n  The first row rendered below is using :around. The second is using :between.\n  ",cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(12),cljs.core.cst$kw$halign,cljs.core.cst$kw$center,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightblue], null)], null),cljs.core.array_seq(["12-Column Wide"], 0))], 0)),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$distribute_DASH_extra_DASH_columns,cljs.core.cst$kw$around,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(2),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightblue], null)], null),cljs.core.array_seq(["2-Column Wide"], 0)),untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(2),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightblue], null)], null),cljs.core.array_seq(["2-Column Wide"], 0)),untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(2),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightblue], null)], null),cljs.core.array_seq(["2-Column Wide"], 0))], 0)),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$distribute_DASH_extra_DASH_columns,cljs.core.cst$kw$between,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(2),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightblue], null)], null),cljs.core.array_seq(["2-Column Wide"], 0)),untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(2),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightblue], null)], null),cljs.core.array_seq(["2-Column Wide"], 0)),untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(2),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightblue], null)], null),cljs.core.array_seq(["2-Column Wide"], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Layout__01_Basics,cljs.core.cst$kw$vertical_DASH_spacing], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"vertical-spacing",cljs.core.cst$kw$documentation,"# Vertical Spacing\n\n  The grid system in Untangled UI follows the principles of vertical rhythm. Most elements\n  are sized to a standard grid line height. This makes it easy to do a large number\n  of complex alignment things easily.\n\n  The `ui-vertical-margin` helper wraps the children in a div that includes some\n  scaled multiple of the grid line height as margin above and/or below.\n\n  The properties of this function (a clj(s) map) allow you to include any React properties on the div\n  (including additional class names with :className).\n\n  The allowed scale factors for :before and :after  (e.g. :one, :half, etc.) are in the docstring of the function.\n\n  So in the example below is adding padding around the middle row.\n\n  ```\n  (dom/div nil\n    (l/row {:style {:backgroundColor :yellow}}\n      (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} \"12-Column Wide\"))\n    (l/ui-vertical-margin {:before :half :after :one}\n      (l/row {:style {:backgroundColor :yellow}}\n        (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} \"12-Column Wide\")))\n    (l/row {:style {:backgroundColor :yellow}}\n      (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} \"12-Column Wide\")))\n  ```\n\n  which renders as:\n  ",cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(12),cljs.core.cst$kw$halign,cljs.core.cst$kw$center,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightblue], null)], null),cljs.core.array_seq(["12-Column Wide"], 0))], 0)),untangled.ui.layout.ui_vertical_margin.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$before,cljs.core.cst$kw$half,cljs.core.cst$kw$after,cljs.core.cst$kw$one], null),cljs.core.array_seq([untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(12),cljs.core.cst$kw$halign,cljs.core.cst$kw$center,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightblue], null)], null),cljs.core.array_seq(["12-Column Wide"], 0))], 0))], 0)),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(12),cljs.core.cst$kw$halign,cljs.core.cst$kw$center,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$lightblue], null)], null),cljs.core.array_seq(["12-Column Wide"], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Layout__01_Basics,cljs.core.cst$kw$responsive_DASH_grid], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"responsive-grid",cljs.core.cst$kw$documentation,"# Responsive Grid\n\n  When building a grid, it is common to want to define a layout where columns have a different grid width on different\n  size screens, and variable amounts of push. The `col` function includes options to make those combinations possible.\n\n  It is also sometimes necessary to cause columns to appear/disappear based on screen size, for that see `rwhen`.\n\n  The screen size abbreviations are `sm`, `md`, `lg`, and `xl`. Those abbreviations can be used on any number of\n  `width` and `push` attributes to indicate the width/push for a column on those screen sizes (see the CSS docs for\n  information on what the screen sizes map to).\n\n  So, to make a column that is 2 wide on a small screen and otherwise 1:\n\n  ```\n  (l/row {}\n    (l/col {:width 1 :sm-width 2 } ...))\n  ```\n\n  TODO: Need to make iframe work to show examples...\n\n  ",cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["TODO: needs iframe to demo properly"], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Layout__01_Basics,cljs.core.cst$kw$responsive_DASH_conditionals], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"responsive-conditionals",cljs.core.cst$kw$documentation,"# Responsive Conditionals\n\n  It is very common in a responsive UI to want elements to disappear/appear based on the screen size. This can be\n  accomplished with `rwhen` (responsive when). It wraps the children in a `span` with the correct CSS to cause\n  the element to appear only under the condition specified.\n\n  Legal conditions are simply predefined keywords listed in the doc string of `rwhen`. The screen size dimensions\n  are detailed in the docstring of `rwhen`.\n\n  ```\n  (rwhen :large+\n     (dom/div nil \"will show on viewports of large size or bigger\"))\n\n  (rwhen :medium-\n     (dom/div nil \"will show on viewports of medium size or smaller\"))\n  ```\n  ",cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"300px",cljs.core.cst$kw$height,"50px",cljs.core.cst$kw$scrolling,cljs.core.cst$kw$no], null),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq([om.dom.link(({"rel": "stylesheet", "href": "css/untangled-ui.css"})),"Width is 300px :",untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$small,cljs.core.array_seq(["SMALL "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$medium,cljs.core.array_seq(["MEDIUM "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$large,cljs.core.array_seq(["LARGE "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xlarge,cljs.core.array_seq(["XLARGE "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$small_PLUS_,cljs.core.array_seq(["SMALL+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$medium_PLUS_,cljs.core.array_seq(["MEDIUM+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$large_PLUS_,cljs.core.array_seq(["LARGE+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xlarge_PLUS_,cljs.core.array_seq(["XLARGE+ "], 0))], 0))),untangled.ui.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"800px",cljs.core.cst$kw$height,"50px",cljs.core.cst$kw$scrolling,cljs.core.cst$kw$no], null),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq([om.dom.link(({"rel": "stylesheet", "href": "css/untangled-ui.css"})),"Width is 800px :",untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$small,cljs.core.array_seq(["SMALL "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$medium,cljs.core.array_seq(["MEDIUM "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$large,cljs.core.array_seq(["LARGE "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xlarge,cljs.core.array_seq(["XLARGE "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$small_PLUS_,cljs.core.array_seq(["SMALL+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$medium_PLUS_,cljs.core.array_seq(["MEDIUM+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$large_PLUS_,cljs.core.array_seq(["LARGE+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xlarge_PLUS_,cljs.core.array_seq(["XLARGE+ "], 0))], 0))),untangled.ui.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"1100px",cljs.core.cst$kw$height,"50px",cljs.core.cst$kw$scrolling,cljs.core.cst$kw$no], null),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq([om.dom.link(({"rel": "stylesheet", "href": "css/untangled-ui.css"})),"Width is 1100px :",untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$small,cljs.core.array_seq(["SMALL "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$medium,cljs.core.array_seq(["MEDIUM "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$large,cljs.core.array_seq(["LARGE "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xlarge,cljs.core.array_seq(["XLARGE "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$small_PLUS_,cljs.core.array_seq(["SMALL+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$medium_PLUS_,cljs.core.array_seq(["MEDIUM+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$large_PLUS_,cljs.core.array_seq(["LARGE+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xlarge_PLUS_,cljs.core.array_seq(["XLARGE+ "], 0))], 0))),untangled.ui.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"1400px",cljs.core.cst$kw$height,"50px",cljs.core.cst$kw$scrolling,cljs.core.cst$kw$no], null),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq([om.dom.link(({"rel": "stylesheet", "href": "css/untangled-ui.css"})),"Width is 1400px :",untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$small,cljs.core.array_seq(["SMALL "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$medium,cljs.core.array_seq(["MEDIUM "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$large,cljs.core.array_seq(["LARGE "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xlarge,cljs.core.array_seq(["XLARGE "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$small_PLUS_,cljs.core.array_seq(["SMALL+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$medium_PLUS_,cljs.core.array_seq(["MEDIUM+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$large_PLUS_,cljs.core.array_seq(["LARGE+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xlarge_PLUS_,cljs.core.array_seq(["XLARGE+ "], 0))], 0))),untangled.ui.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"3400px",cljs.core.cst$kw$height,"50px",cljs.core.cst$kw$scrolling,cljs.core.cst$kw$no], null),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$yellow], null)], null),cljs.core.array_seq([om.dom.link(({"rel": "stylesheet", "href": "css/untangled-ui.css"})),"Width is 3400px :",untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$small,cljs.core.array_seq(["SMALL "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$medium,cljs.core.array_seq(["MEDIUM "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$large,cljs.core.array_seq(["LARGE "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xlarge,cljs.core.array_seq(["XLARGE "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$small_PLUS_,cljs.core.array_seq(["SMALL+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$medium_PLUS_,cljs.core.array_seq(["MEDIUM+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$large_PLUS_,cljs.core.array_seq(["LARGE+ "], 0)),untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$xlarge_PLUS_,cljs.core.array_seq(["XLARGE+ "], 0))], 0)))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));