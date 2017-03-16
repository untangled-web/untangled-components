// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.impl.om_plumbing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('om.util');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('cljs.core.async');
goog.require('clojure.walk');
/**
 * Read function for the Om parser.
 * 
 *   *** NOTE: This function only runs when it is called without a target -- it is not triggered for remote reads. To
 *   trigger a remote read, use the `untangled/data-fetch` namespace. ***
 * 
 *   Returns the current locale when reading the :ui/locale keyword. Otherwise pulls data out of the app-state.
 *   
 */
untangled.client.impl.om_plumbing.read_local = (function untangled$client$impl$om_plumbing$read_local(p__45137,dkey,_){
var map__45141 = p__45137;
var map__45141__$1 = ((((!((map__45141 == null)))?((((map__45141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45141):map__45141);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45141__$1,cljs.core.cst$kw$query);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45141__$1,cljs.core.cst$kw$target);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45141__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45141__$1,cljs.core.cst$kw$ast);
if(cljs.core.not(target)){
var G__45143 = dkey;
switch (G__45143) {
default:
var top_level_prop = (query == null);
var key = (function (){var or__7502__auto__ = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return dkey;
}
})();
var by_ident_QMARK_ = om.util.ident_QMARK_(key);
var union_QMARK_ = cljs.core.map_QMARK_(query);
var data = ((by_ident_QMARK_)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),key):cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),key));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,((union_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([key,query])], null),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),key):((top_level_prop)?data:om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,data,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)))
))], null);

}
} else {
return null;
}
});
/**
 * This is the Om entry point for writes. In general this is simply a call to the multi-method
 *   defined by Untangled (mutate); however, Untangled supports the concept of a global `post-mutate`
 *   function that will be called anytime the general mutate has an action that is desired. This
 *   can be useful, for example, in cases where you have some post-processing that needs
 *   to happen for a given (sub)set of mutations (that perhaps you did not define).
 */
untangled.client.impl.om_plumbing.write_entry_point = (function untangled$client$impl$om_plumbing$write_entry_point(env,k,params){
var rv = (function (){try{return (untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : untangled.client.mutations.mutate.call(null,env,k,params));
}catch (e45174){var e = e45174;
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Mutation "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" failed with exception")].join(''),e], 0));

return null;
}})();
var action = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(rv);
if(cljs.core.truth_(action)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rv,cljs.core.cst$kw$action,((function (rv,action){
return (function (){
try{var action_result = (action.cljs$core$IFn$_invoke$arity$3 ? action.cljs$core$IFn$_invoke$arity$3(env,k,params) : action.call(null,env,k,params));
try{(untangled.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : untangled.client.mutations.post_mutate.call(null,env,k,params));
}catch (e45176){var e_45179 = e45176;
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Post mutate failed on dispatch to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], 0));
}
return action_result;
}catch (e45175){var e = e45175;
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Mutation "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" failed with exception")].join(''),e], 0));

throw e;
}});})(rv,action))
);
} else {
return rv;
}
});
/**
 * Replaces all om-tempids in app-state with the ids returned by the server.
 */
untangled.client.impl.om_plumbing.resolve_tempids = (function untangled$client$impl$om_plumbing$resolve_tempids(state,tid__GT_rid){
if(cljs.core.empty_QMARK_(tid__GT_rid)){
return state;
} else {
return clojure.walk.prewalk((function (p1__45180_SHARP_){
if(om.next.tempid_QMARK_(p1__45180_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tid__GT_rid,p1__45180_SHARP_,p1__45180_SHARP_);
} else {
return p1__45180_SHARP_;
}
}),state);
}
});
/**
 * Rewrite any pending requests in the request queue to account for the fact that a response might have
 *   changed ids that are expressed in the mutations of that queue. tempid-map MUST be a map from om
 *   tempid to real ids, not idents.
 */
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue = (function untangled$client$impl$om_plumbing$rewrite_tempids_in_request_queue(queue,tempid_map){
var entry = cljs.core.async.poll_BANG_(queue);
var entries = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(entry)){
var G__45191 = cljs.core.async.poll_BANG_(queue);
var G__45192 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entries,untangled.client.impl.om_plumbing.resolve_tempids(entry,tempid_map));
entry = G__45191;
entries = G__45192;
continue;
} else {
if(cljs.core.seq(entries)){
var seq__45187 = cljs.core.seq(entries);
var chunk__45188 = null;
var count__45189 = (0);
var i__45190 = (0);
while(true){
if((i__45190 < count__45189)){
var e = chunk__45188.cljs$core$IIndexed$_nth$arity$2(null,i__45190);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Queue should not block."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(async/offer! queue e)")].join('')));
}

var G__45195 = seq__45187;
var G__45196 = chunk__45188;
var G__45197 = count__45189;
var G__45198 = (i__45190 + (1));
seq__45187 = G__45195;
chunk__45188 = G__45196;
count__45189 = G__45197;
i__45190 = G__45198;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__45187);
if(temp__6753__auto__){
var seq__45187__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45187__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__45187__$1);
var G__45205 = cljs.core.chunk_rest(seq__45187__$1);
var G__45206 = c__8413__auto__;
var G__45207 = cljs.core.count(c__8413__auto__);
var G__45208 = (0);
seq__45187 = G__45205;
chunk__45188 = G__45206;
count__45189 = G__45207;
i__45190 = G__45208;
continue;
} else {
var e = cljs.core.first(seq__45187__$1);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Queue should not block."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(async/offer! queue e)")].join('')));
}

var G__45215 = cljs.core.next(seq__45187__$1);
var G__45216 = null;
var G__45217 = (0);
var G__45218 = (0);
seq__45187 = G__45215;
chunk__45188 = G__45216;
count__45189 = G__45217;
i__45190 = G__45218;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
break;
}
});
/**
 * Removes all untangled/load and tx/fallback mutations from the query
 */
untangled.client.impl.om_plumbing.remove_loads_and_fallbacks = (function untangled$client$impl$om_plumbing$remove_loads_and_fallbacks(query){
var symbols_to_filter = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$untangled_SLASH_load,null,cljs.core.cst$sym$tx_SLASH_fallback,null], null), null);
var ast = om.next.query__GT_ast(query);
var children = cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_filter,ast,children){
return (function (child){
return !(cljs.core.contains_QMARK_(symbols_to_filter,cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(child)));
});})(symbols_to_filter,ast,children))
,children);
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,new_children);
return om.next.ast__GT_query(new_ast);
});
untangled.client.impl.om_plumbing.fallback_query = (function untangled$client$impl$om_plumbing$fallback_query(query,resp){

var symbols_to_find = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$tx_SLASH_fallback,null], null), null);
var ast = om.next.query__GT_ast(query);
var children = cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_find,ast,children){
return (function (ast__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(ast__$1,cljs.core.cst$kw$params,cljs.core.assoc,cljs.core.cst$kw$execute,true,cljs.core.cst$kw$error,cljs.core.array_seq([resp], 0));
});})(symbols_to_find,ast,children))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_find,ast,children){
return (function (child){
return cljs.core.contains_QMARK_(symbols_to_find,cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(child));
});})(symbols_to_find,ast,children))
,children));
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,new_children);
var fallback_query = om.next.ast__GT_query(new_ast);
if(cljs.core.truth_(cljs.core.not_empty(fallback_query))){
return fallback_query;
} else {
return null;
}
});
/**
 * Check the given keyword to see if it is in the :ui namespace.
 */
untangled.client.impl.om_plumbing.is_ui_query_fragment_QMARK_ = (function untangled$client$impl$om_plumbing$is_ui_query_fragment_QMARK_(kw){
if((kw instanceof cljs.core.Keyword)){
var G__45236 = kw;
var G__45236__$1 = (((G__45236 == null))?null:cljs.core.namespace(G__45236));
if((G__45236__$1 == null)){
return null;
} else {
return cljs.core.re_find(/^ui(?:\.|$)/,G__45236__$1);
}
} else {
return null;
}
});
/**
 * Returns a new query with fragments that are in the `ui` namespace removed.
 */
untangled.client.impl.om_plumbing.strip_ui = (function untangled$client$impl$om_plumbing$strip_ui(query){
var ast = om.next.query__GT_ast(query);
var drop_ui_children = ((function (ast){
return (function untangled$client$impl$om_plumbing$strip_ui_$_drop_ui_children(ast_node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast_node,cljs.core.cst$kw$children,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ast){
return (function (acc,n){
if(cljs.core.truth_(untangled.client.impl.om_plumbing.is_ui_query_fragment_QMARK_(cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(n)))){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,untangled$client$impl$om_plumbing$strip_ui_$_drop_ui_children(n));
}
});})(ast))
,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast_node)));
});})(ast))
;
return om.next.ast__GT_query(drop_ui_children(ast));
});
untangled.client.impl.om_plumbing.nf = cljs.core.cst$kw$untangled$client$impl$om_DASH_plumbing_SLASH_not_DASH_found;
untangled.client.impl.om_plumbing.walk = (function untangled$client$impl$om_plumbing$walk(inner,outer,form){
if(cljs.core.map_QMARK_(form)){
var G__45262 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45247_SHARP_){
var G__45263 = cljs.core.with_meta(p1__45247_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$map_DASH_entry_QMARK_,true], null));
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__45263) : inner.call(null,G__45263));
}),form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45262) : outer.call(null,G__45262));
} else {
if(cljs.core.list_QMARK_(form)){
var G__45269 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45269) : outer.call(null,G__45269));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__45272 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45272) : outer.call(null,G__45272));
} else {
if(cljs.core.record_QMARK_(form)){
var G__45275 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),form,form);
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45275) : outer.call(null,G__45275));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__45278 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45278) : outer.call(null,G__45278));
} else {
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(form) : outer.call(null,form));

}
}
}
}
}
});
untangled.client.impl.om_plumbing.prewalk = (function untangled$client$impl$om_plumbing$prewalk(f,form){
return untangled.client.impl.om_plumbing.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.om_plumbing.prewalk,f),cljs.core.identity,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form)));
});
untangled.client.impl.om_plumbing.postwalk = (function untangled$client$impl$om_plumbing$postwalk(f,form){
return untangled.client.impl.om_plumbing.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.om_plumbing.postwalk,f),f,form);
});
untangled.client.impl.om_plumbing.recursive_QMARK_ = (function untangled$client$impl$om_plumbing$recursive_QMARK_(qf){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,qf);
});
untangled.client.impl.om_plumbing.add_meta_to_recursive_queries = (function untangled$client$impl$om_plumbing$add_meta_to_recursive_queries(q){
var a = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(q) : cljs.core.atom.call(null,q));
return untangled.client.impl.om_plumbing.postwalk(((function (a){
return (function (p1__45289_SHARP_){
if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.vector_QMARK_(p1__45289_SHARP_);
if(and__7490__auto__){
var and__7490__auto____$1 = cljs.core.not((function (){var G__45301 = p1__45289_SHARP_;
var G__45301__$1 = (((G__45301 == null))?null:cljs.core.meta(G__45301));
if((G__45301__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$map_DASH_entry_QMARK_.cljs$core$IFn$_invoke$arity$1(G__45301__$1);
}
})());
if(and__7490__auto____$1){
var and__7490__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__45289_SHARP_),(2));
if(and__7490__auto____$2){
var G__45303 = p1__45289_SHARP_;
var G__45303__$1 = (((G__45303 == null))?null:cljs.core.second(G__45303));
var G__45303__$2 = (((G__45303__$1 == null))?null:cljs.core.meta(G__45303__$1));
var G__45303__$3 = (((G__45303__$2 == null))?null:cljs.core.cst$kw$depth.cljs$core$IFn$_invoke$arity$1(G__45303__$2));
if((G__45303__$3 == null)){
return null;
} else {
return typeof G__45303__$3 === 'number';
}
} else {
return and__7490__auto____$2;
}
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(p1__45289_SHARP_),cljs.core.cst$kw$depth.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.second(p1__45289_SHARP_)))], null);
} else {
return p1__45289_SHARP_;

}
});})(a))
,untangled.client.impl.om_plumbing.prewalk(((function (a){
return (function (p1__45288_SHARP_){
if((cljs.core.vector_QMARK_(p1__45288_SHARP_)) && (cljs.core.cst$kw$map_DASH_entry_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__45288_SHARP_)) === false)){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(a,p1__45288_SHARP_) : cljs.core.reset_BANG_.call(null,a,p1__45288_SHARP_));

return p1__45288_SHARP_;
} else {
if(typeof p1__45288_SHARP_ === 'number'){
return cljs.core.with_meta(cljs.core.cst$sym$$$$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$$$$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a)),cljs.core.cst$kw$depth,p1__45288_SHARP_], null));
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.recursive_QMARK_(p1__45288_SHARP_))){
return cljs.core.with_meta(p1__45288_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$$$$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a))], null));
} else {
return p1__45288_SHARP_;

}
}
}
});})(a))
,q));
});
/**
 * Returns data with meta-data marking it as a leaf in the result.
 */
untangled.client.impl.om_plumbing.as_leaf = (function untangled$client$impl$om_plumbing$as_leaf(data){
if(cljs.core.coll_QMARK_(data)){
return cljs.core.with_meta(data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$untangled_SLASH_leaf,true], null));
} else {
return data;
}
});
/**
 * Returns true iff the given data is marked as a leaf in the result (according to the query). Requires pre-marking.
 */
untangled.client.impl.om_plumbing.leaf_QMARK_ = (function untangled$client$impl$om_plumbing$leaf_QMARK_(data){
return (!(cljs.core.coll_QMARK_(data))) || (cljs.core.empty_QMARK_(data)) || ((cljs.core.coll_QMARK_(data)) && (cljs.core.boolean$(cljs.core.cst$kw$untangled_SLASH_leaf.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)))));
});
/**
 * Recursively walk the query and response marking anything that was *asked for* in the query but is *not* in the response as missing.
 *   The merge process (which happens later in the plumbing) looks for these markers as indicators to remove any existing
 *   data in the database (which has provably disappeared).
 * 
 *   The naive approach to data merging (even recursive) would fail to remove such data.
 * 
 *   Returns the result with missing markers in place (which are then used/removed in a later stage).
 */
untangled.client.impl.om_plumbing.mark_missing = (function untangled$client$impl$om_plumbing$mark_missing(result,query){
var paramterized_QMARK_ = (function untangled$client$impl$om_plumbing$mark_missing_$_paramterized_QMARK_(q){
return (cljs.core.list_QMARK_(q)) && (((cljs.core.first(q) instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(q))));
});
var ok_STAR_not_found = (function untangled$client$impl$om_plumbing$mark_missing_$_ok_STAR_not_found(res,k){
if(cljs.core.contains_QMARK_(res,k)){
return res;
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.recursive_QMARK_(k))){
return res;
} else {
if(om.util.ident_QMARK_(k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(((cljs.core.map_QMARK_(res))?res:cljs.core.PersistentArrayMap.EMPTY),k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$not_DASH_found], null)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(((cljs.core.map_QMARK_(res))?res:cljs.core.PersistentArrayMap.EMPTY),k,untangled.client.impl.om_plumbing.nf);

}
}
}
});
var union__GT_query = (function untangled$client$impl$om_plumbing$mark_missing_$_union__GT_query(u){
return cljs.core.set(cljs.core.flatten(cljs.core.vals(u)));
});
var union_QMARK_ = (function untangled$client$impl$om_plumbing$mark_missing_$_union_QMARK_(q){
var expr = (function (){var G__45416 = q;
if(cljs.core.seq_QMARK_(q)){
return cljs.core.first(G__45416);
} else {
return G__45416;
}
})();
return (cljs.core.map_QMARK_(expr)) && (((1) < cljs.core.count(cljs.core.seq(expr))));
});
var step = (function untangled$client$impl$om_plumbing$mark_missing_$_step(res,q){
var q__$1 = (cljs.core.truth_(paramterized_QMARK_(q))?cljs.core.first(q):q);
var vec__45433 = (cljs.core.truth_(om.util.join_QMARK_(q__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key(q__$1),om.util.join_value(q__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$1,null], null)
);
var query_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45433,(0),null);
var _QMARK_sub_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45433,(1),null);
var result_or_not_found = ok_STAR_not_found(res,query_key);
var result_or_not_found__$1 = ((((q__$1 instanceof cljs.core.Keyword)) && (cljs.core.map_QMARK_(result_or_not_found)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(result_or_not_found,q__$1,untangled.client.impl.om_plumbing.as_leaf):result_or_not_found);
var sub_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result_or_not_found__$1,query_key);
if(cljs.core.truth_((function (){var and__7490__auto__ = union_QMARK_(_QMARK_sub_query);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.map_QMARK_(sub_result);
} else {
return and__7490__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_or_not_found__$1,query_key,(function (){var G__45437 = sub_result;
var G__45438 = union__GT_query(cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,query_key));
return (untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(G__45437,G__45438) : untangled.client.impl.om_plumbing.mark_missing.call(null,G__45437,G__45438));
})());
} else {
if(cljs.core.truth_((function (){var and__7490__auto__ = union_QMARK_(_QMARK_sub_query);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.coll_QMARK_(sub_result);
} else {
return and__7490__auto__;
}
})())){
var _LT__GT_ = sub_result;
var _LT__GT___$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_LT__GT_,q__$1,vec__45433,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result){
return (function (p1__45314_SHARP_){
var G__45440 = p1__45314_SHARP_;
var G__45441 = union__GT_query(cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,query_key));
return (untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(G__45440,G__45441) : untangled.client.impl.om_plumbing.mark_missing.call(null,G__45440,G__45441));
});})(_LT__GT_,q__$1,vec__45433,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result))
,_LT__GT_);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_or_not_found__$1,query_key,_LT__GT___$1);
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.is_ui_query_fragment_QMARK_(q__$1))){
return untangled.client.impl.om_plumbing.as_leaf(res);
} else {
if(cljs.core.truth_((function (){var and__7490__auto__ = _QMARK_sub_query;
if(cljs.core.truth_(and__7490__auto__)){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.om_plumbing.nf,sub_result)) && (cljs.core.not(untangled.client.impl.om_plumbing.recursive_QMARK_(_QMARK_sub_query)));
} else {
return and__7490__auto__;
}
})())){
var _LT__GT_ = sub_result;
var _LT__GT___$1 = ((cljs.core.vector_QMARK_(_LT__GT_))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_LT__GT_,q__$1,vec__45433,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result){
return (function (p1__45315_SHARP_){
return (untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(p1__45315_SHARP_,_QMARK_sub_query) : untangled.client.impl.om_plumbing.mark_missing.call(null,p1__45315_SHARP_,_QMARK_sub_query));
});})(_LT__GT_,q__$1,vec__45433,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result))
,_LT__GT_):(untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(_LT__GT_,_QMARK_sub_query) : untangled.client.impl.om_plumbing.mark_missing.call(null,_LT__GT_,_QMARK_sub_query)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_or_not_found__$1,query_key,_LT__GT___$1);
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.recursive_QMARK_(_QMARK_sub_query))){
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,query_key);
if(cljs.core.truth_(temp__6751__auto__)){
var res_ = temp__6751__auto__;
var _LT__GT_ = res_;
var _LT__GT___$1 = ((cljs.core.vector_QMARK_(_LT__GT_))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_LT__GT_,res_,temp__6751__auto__,q__$1,vec__45433,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result){
return (function (p1__45316_SHARP_){
return (untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(p1__45316_SHARP_,_QMARK_sub_query) : untangled.client.impl.om_plumbing.mark_missing.call(null,p1__45316_SHARP_,_QMARK_sub_query));
});})(_LT__GT_,res_,temp__6751__auto__,q__$1,vec__45433,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result))
,_LT__GT_):(untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? untangled.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(_LT__GT_,_QMARK_sub_query) : untangled.client.impl.om_plumbing.mark_missing.call(null,_LT__GT_,_QMARK_sub_query)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,query_key,_LT__GT___$1);
} else {
return result_or_not_found__$1;
}
} else {
return result_or_not_found__$1;

}
}
}
}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,result,(cljs.core.truth_(untangled.client.impl.om_plumbing.recursive_QMARK_(query))?untangled.client.impl.om_plumbing.add_meta_to_recursive_queries(cljs.core.cst$kw$$$$.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query))):untangled.client.impl.om_plumbing.add_meta_to_recursive_queries(query)));
});