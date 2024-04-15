import { s as subscribe } from "./window.js";
import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { w as writable } from "./index2.js";
let errorMessage = writable("");
const XCircleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-x-circle " + escape(customClass, true)}"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
});
const ErrorAlert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errorMessage, $$unsubscribe_errorMessage;
  $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => $errorMessage = value);
  let { dismissible = true } = $$props;
  if ($$props.dismissible === void 0 && $$bindings.dismissible && dismissible !== void 0)
    $$bindings.dismissible(dismissible);
  $$unsubscribe_errorMessage();
  return `  ${$errorMessage ? `<div class="alert alert-error dark:prose-invert">${validate_component(XCircleIcon, "XCircleIcon").$$render($$result, {}, {}, {})} <span>Error: ${escape($errorMessage)}</span> ${dismissible ? `<button class="btn-neutral btn-sm btn" data-svelte-h="svelte-z7xsw2">Dismiss</button>` : ``}</div>` : ``}`;
});
export {
  ErrorAlert as E
};
