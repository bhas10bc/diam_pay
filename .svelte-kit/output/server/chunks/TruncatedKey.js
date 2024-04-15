import "./window.js";
import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { c as contacts } from "./contactsStore.js";
/* empty css                                            */const CopyIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-copy " + escape(customClass, true)}"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
});
const css = {
  code: ".tooltip.svelte-yxu2va:before{max-width:-moz-min-content;max-width:min-content\n}",
  map: null
};
const TruncatedKey = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contactName;
  let { keyText = "" } = $$props;
  let { lookupName = true } = $$props;
  if ($$props.keyText === void 0 && $$bindings.keyText && keyText !== void 0)
    $$bindings.keyText(keyText);
  if ($$props.lookupName === void 0 && $$bindings.lookupName && lookupName !== void 0)
    $$bindings.lookupName(lookupName);
  $$result.css.add(css);
  contactName = lookupName ? contacts.lookup(keyText) : false;
  return `  <div class="flex max-w-full items-center gap-2"><div class="relative flex min-w-0 flex-shrink">${lookupName && contactName ? `<div class="tooltip svelte-yxu2va"${add_attribute("data-tip", keyText, 0)}><span class="font-mono">${escape(contactName)}</span></div>` : `<span class="truncate font-mono">${escape(keyText.slice(0, -3))}</span> <span class="font-mono">${escape(keyText.slice(-3))}</span>`}</div> <button class="btn-ghost btn-square btn-sm btn">${validate_component(CopyIcon, "CopyIcon").$$render($$result, { size: "16" }, {}, {})}</button> </div>`;
});
export {
  TruncatedKey as T
};
