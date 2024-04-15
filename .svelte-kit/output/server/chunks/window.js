import { Buffer } from "buffer";
function noop() {
}
const identity = (x) => x;
function is_promise(value) {
  return !!value && (typeof value === "object" || typeof value === "function") && typeof /** @type {any} */
  value.then === "function";
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    for (const callback of callbacks) {
      callback(void 0);
    }
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
{
  globalThis.Buffer = Buffer;
  globalThis.window = {};
}
const window = globalThis;
export {
  is_promise as a,
  noop as b,
  blank_object as c,
  safe_not_equal as d,
  get_store_value as g,
  identity as i,
  null_to_empty as n,
  run_all as r,
  subscribe as s,
  window as w
};
