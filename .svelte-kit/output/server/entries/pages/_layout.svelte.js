import { i as identity, w as window, n as null_to_empty, s as subscribe } from "../../chunks/window.js";
import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as createEventDispatcher, o as onDestroy, s as setContext, m as missing_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
const app = "";
const XIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-x " + escape(customClass, true)}"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
});
const ModalCloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClose = () => {
  } } = $$props;
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  return `  <button class="btn-square btn absolute right-6 top-3 z-10 bg-base-300">${validate_component(XIcon, "XIcon").$$render($$result, {}, {}, {})}</button>`;
});
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-5425ae{box-sizing:border-box}.bg.svelte-5425ae{position:fixed;z-index:1000;top:0;left:0;display:flex;flex-direction:column;justify-content:center;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.66)}@supports (-webkit-touch-callout: none){}.wrap.svelte-5425ae{position:relative;margin:2rem;max-height:100%}.window.svelte-5425ae{position:relative;width:40rem;max-width:100%;max-height:100%;margin:2rem auto;color:black;border-radius:0.5rem;background:white}.content.svelte-5425ae{position:relative;padding:1rem;max-height:calc(100vh - 4rem);overflow:auto}.close.svelte-5425ae{display:block;box-sizing:border-box;position:absolute;z-index:1000;top:1rem;right:1rem;margin:0;padding:0;width:1.5rem;height:1.5rem;border:0;color:black;border-radius:1.5rem;background:white;box-shadow:0 0 0 1px black;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);-webkit-appearance:none}.close.svelte-5425ae:before,.close.svelte-5425ae:after{content:'';display:block;box-sizing:border-box;position:absolute;top:50%;width:1rem;height:1px;background:black;transform-origin:center;transition:height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)}.close.svelte-5425ae:before{transform:translate(0, -50%) rotate(45deg);left:0.25rem}.close.svelte-5425ae:after{transform:translate(0, -50%) rotate(-45deg);left:0.25rem}.close.svelte-5425ae:hover{background:black}.close.svelte-5425ae:hover:before,.close.svelte-5425ae:hover:after{height:2px;background:white}.close.svelte-5425ae:focus{border-color:#3399ff;box-shadow:0 0 0 2px #3399ff}.close.svelte-5425ae:active{transform:scale(0.9)}.close.svelte-5425ae:hover,.close.svelte-5425ae:focus,.close.svelte-5425ae:active{outline:none}",
  map: null
};
function bind(Component, props = {}) {
  return function ModalComponent(options) {
    return new Component({
      ...options,
      props: { ...props, ...options.props }
    });
  };
}
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  const baseSetContext = setContext;
  const baseIsTabbable = (node) => node.tabIndex >= 0 && !node.hidden && !node.disabled && node.style.display !== "none" && node.type !== "hidden" && Boolean(node.offsetWidth || node.offsetHeight || node.getClientRects().length);
  let { isTabbable = baseIsTabbable } = $$props;
  let { show = null } = $$props;
  let { id = null } = $$props;
  let { key = "simple-modal" } = $$props;
  let { ariaLabel = null } = $$props;
  let { ariaLabelledBy = null } = $$props;
  let { closeButton = true } = $$props;
  let { closeOnEsc = true } = $$props;
  let { closeOnOuterClick = true } = $$props;
  let { styleBg = {} } = $$props;
  let { styleWindowWrap = {} } = $$props;
  let { styleWindow = {} } = $$props;
  let { styleContent = {} } = $$props;
  let { styleCloseButton = {} } = $$props;
  let { classBg = null } = $$props;
  let { classWindowWrap = null } = $$props;
  let { classWindow = null } = $$props;
  let { classContent = null } = $$props;
  let { classCloseButton = null } = $$props;
  let { unstyled = false } = $$props;
  let { setContext: setContext$1 = baseSetContext } = $$props;
  let { transitionBg = fade } = $$props;
  let { transitionBgProps = { duration: 250 } } = $$props;
  let { transitionWindow = transitionBg } = $$props;
  let { transitionWindowProps = transitionBgProps } = $$props;
  let { disableFocusTrap = false } = $$props;
  const defaultState = {
    id,
    ariaLabel,
    ariaLabelledBy,
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindowWrap,
    styleWindow,
    styleContent,
    styleCloseButton,
    classBg,
    classWindowWrap,
    classWindow,
    classContent,
    classCloseButton,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps,
    disableFocusTrap,
    isTabbable,
    unstyled
  };
  let state = { ...defaultState };
  let Component = null;
  let background;
  let wrap;
  let modalWindow;
  let scrollY;
  let cssBg;
  let cssWindowWrap;
  let cssWindow;
  let cssContent;
  let cssCloseButton;
  let prevBodyPosition;
  let prevBodyOverflow;
  let prevBodyWidth;
  const camelCaseToDash = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  const toCssString = (props) => props ? Object.keys(props).reduce((str, key2) => `${str}; ${camelCaseToDash(key2)}: ${props[key2]}`, "") : "";
  const isFunction = (f) => !!(f && f.constructor && f.call && f.apply);
  const updateStyleTransition = () => {
    cssBg = toCssString(Object.assign(
      {},
      {
        width: window.innerWidth,
        height: window.innerHeight
      },
      state.styleBg
    ));
    cssWindowWrap = toCssString(state.styleWindowWrap);
    cssWindow = toCssString(state.styleWindow);
    cssContent = toCssString(state.styleContent);
    cssCloseButton = toCssString(state.styleCloseButton);
    state.transitionBg;
    state.transitionWindow;
  };
  const toVoid = () => {
  };
  let onClose = toVoid;
  let onClosed = toVoid;
  const open = (NewComponent, newProps = {}, options = {}, callbacks = {}) => {
    Component = bind(NewComponent, newProps);
    state = { ...defaultState, ...options };
    updateStyleTransition();
    disableScroll();
    onClose = (event) => {
      if (callbacks.onClose)
        callbacks.onClose(event);
      dispatch("close");
      dispatch("closing");
    };
    onClosed = (event) => {
      if (callbacks.onClosed)
        callbacks.onClosed(event);
      dispatch("closed");
    };
  };
  const close = (callbacks = {}) => {
    if (!Component)
      return;
    onClose = callbacks.onClose || onClose;
    onClosed = callbacks.onClosed || onClosed;
    Component = null;
    enableScroll();
  };
  const disableScroll = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    prevBodyWidth = document.body.style.width;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  };
  const enableScroll = () => {
    document.body.style.position = prevBodyPosition || "";
    document.body.style.top = "";
    document.body.style.overflow = prevBodyOverflow || "";
    document.body.style.width = prevBodyWidth || "";
    window.scrollTo({
      top: scrollY,
      left: 0,
      behavior: "instant"
    });
  };
  const context = { open, close };
  setContext$1(key, context);
  onDestroy(() => {
  });
  if ($$props.isTabbable === void 0 && $$bindings.isTabbable && isTabbable !== void 0)
    $$bindings.isTabbable(isTabbable);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaLabelledBy === void 0 && $$bindings.ariaLabelledBy && ariaLabelledBy !== void 0)
    $$bindings.ariaLabelledBy(ariaLabelledBy);
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  if ($$props.closeOnEsc === void 0 && $$bindings.closeOnEsc && closeOnEsc !== void 0)
    $$bindings.closeOnEsc(closeOnEsc);
  if ($$props.closeOnOuterClick === void 0 && $$bindings.closeOnOuterClick && closeOnOuterClick !== void 0)
    $$bindings.closeOnOuterClick(closeOnOuterClick);
  if ($$props.styleBg === void 0 && $$bindings.styleBg && styleBg !== void 0)
    $$bindings.styleBg(styleBg);
  if ($$props.styleWindowWrap === void 0 && $$bindings.styleWindowWrap && styleWindowWrap !== void 0)
    $$bindings.styleWindowWrap(styleWindowWrap);
  if ($$props.styleWindow === void 0 && $$bindings.styleWindow && styleWindow !== void 0)
    $$bindings.styleWindow(styleWindow);
  if ($$props.styleContent === void 0 && $$bindings.styleContent && styleContent !== void 0)
    $$bindings.styleContent(styleContent);
  if ($$props.styleCloseButton === void 0 && $$bindings.styleCloseButton && styleCloseButton !== void 0)
    $$bindings.styleCloseButton(styleCloseButton);
  if ($$props.classBg === void 0 && $$bindings.classBg && classBg !== void 0)
    $$bindings.classBg(classBg);
  if ($$props.classWindowWrap === void 0 && $$bindings.classWindowWrap && classWindowWrap !== void 0)
    $$bindings.classWindowWrap(classWindowWrap);
  if ($$props.classWindow === void 0 && $$bindings.classWindow && classWindow !== void 0)
    $$bindings.classWindow(classWindow);
  if ($$props.classContent === void 0 && $$bindings.classContent && classContent !== void 0)
    $$bindings.classContent(classContent);
  if ($$props.classCloseButton === void 0 && $$bindings.classCloseButton && classCloseButton !== void 0)
    $$bindings.classCloseButton(classCloseButton);
  if ($$props.unstyled === void 0 && $$bindings.unstyled && unstyled !== void 0)
    $$bindings.unstyled(unstyled);
  if ($$props.setContext === void 0 && $$bindings.setContext && setContext$1 !== void 0)
    $$bindings.setContext(setContext$1);
  if ($$props.transitionBg === void 0 && $$bindings.transitionBg && transitionBg !== void 0)
    $$bindings.transitionBg(transitionBg);
  if ($$props.transitionBgProps === void 0 && $$bindings.transitionBgProps && transitionBgProps !== void 0)
    $$bindings.transitionBgProps(transitionBgProps);
  if ($$props.transitionWindow === void 0 && $$bindings.transitionWindow && transitionWindow !== void 0)
    $$bindings.transitionWindow(transitionWindow);
  if ($$props.transitionWindowProps === void 0 && $$bindings.transitionWindowProps && transitionWindowProps !== void 0)
    $$bindings.transitionWindowProps(transitionWindowProps);
  if ($$props.disableFocusTrap === void 0 && $$bindings.disableFocusTrap && disableFocusTrap !== void 0)
    $$bindings.disableFocusTrap(disableFocusTrap);
  $$result.css.add(css);
  return ` ${Component ? `<div aria-hidden="true"${add_attribute("id", state.id, 0)} class="${[
    escape(null_to_empty(state.classBg), true) + " svelte-5425ae",
    !unstyled ? "bg" : ""
  ].join(" ").trim()}"${add_attribute("style", cssBg, 0)}${add_attribute("this", background, 0)}><div class="${[
    escape(null_to_empty(state.classWindowWrap), true) + " svelte-5425ae",
    !unstyled ? "wrap" : ""
  ].join(" ").trim()}"${add_attribute("style", cssWindowWrap, 0)}${add_attribute("this", wrap, 0)}><div class="${[
    escape(null_to_empty(state.classWindow), true) + " svelte-5425ae",
    !unstyled ? "window" : ""
  ].join(" ").trim()}" role="dialog" aria-modal="true"${add_attribute("aria-label", state.ariaLabelledBy ? null : state.ariaLabel || null, 0)}${add_attribute("aria-labelledby", state.ariaLabelledBy || null, 0)}${add_attribute("style", cssWindow, 0)}${add_attribute("this", modalWindow, 0)}>${state.closeButton ? `${isFunction(state.closeButton) ? `${validate_component(state.closeButton || missing_component, "svelte:component").$$render($$result, { onClose: close }, {}, {})}` : `<button class="${[
    escape(null_to_empty(state.classCloseButton), true) + " svelte-5425ae",
    !unstyled ? "close" : ""
  ].join(" ").trim()}" aria-label="Close modal"${add_attribute("style", cssCloseButton, 0)} type="button"></button>`}` : ``} <div class="${[
    escape(null_to_empty(state.classContent), true) + " svelte-5425ae",
    !unstyled ? "content" : ""
  ].join(" ").trim()}"${add_attribute("style", cssContent, 0)}>${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div></div></div>` : ``} ${slots.default ? slots.default({}) : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  const modal = writable(null);
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  $$unsubscribe_modal();
  return ` ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      show: $modal,
      classContent: "rounded bg-base-100",
      closeButton: ModalCloseButton
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
export {
  Layout as default
};
