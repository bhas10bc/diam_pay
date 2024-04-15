import { s as subscribe } from "../../../chunks/window.js";
import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { E as ErrorAlert } from "../../../chunks/ErrorAlert.js";
const MenuIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-menu " + escape(customClass, true)}"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <header class="navbar bg-base-300"><label for="drawer-toggle" class="btn-ghost drawer-button btn-square btn lg:hidden">${validate_component(MenuIcon, "MenuIcon").$$render($$result, { size: "24" }, {}, {})}</label> <div class="flex-1" data-svelte-h="svelte-m95whu"><a href="/dashboard" class="btn-ghost btn text-xl normal-case">DiamPay</a></div> <div class="flex-none" data-svelte-h="svelte-uhjejo"><div class="dropdown-end dropdown"> <ul class="menu-compact dropdown-content menu rounded-box bg-base-100 z-10 mt-3 w-52 p-2 shadow"><li><a href="/dashboard/settings/kyc" class="justify-between">Manage KYC Information</a></li> </ul></div></div></header>`;
});
const SidebarMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const dashboardRoutes = [
    {
      route: "/dashboard/send",
      text: "Payments"
    },
    {
      route: "/dashboard/assets",
      text: "Assets"
    },
    {
      route: "/dashboard/contacts",
      text: "Contacts"
    }
  ];
  $$unsubscribe_page();
  return `  <ul class="menu bg-base-200 text-base-content h-full w-80 p-4">${each(dashboardRoutes, (route) => {
    let linkClass = $page.route.id === route.route ? "active" : "";
    return ` <li><a${add_attribute("href", route.route, 0)}${add_attribute("class", linkClass, 0)}>${escape(route.text)}</a> </li>`;
  })}</ul>`;
});
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <div class="drawer grow lg:drawer-open"><input id="drawer-toggle" type="checkbox" class="drawer-toggle"> <div class="drawer-content flex flex-col"><main class="prose max-w-full p-6">${validate_component(ErrorAlert, "ErrorAlert").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}</main></div> <div class="drawer-side z-10 lg:h-auto"><label for="drawer-toggle" class="drawer-overlay"></label> ${validate_component(SidebarMenu, "SidebarMenu").$$render($$result, {}, {}, {})}</div></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <footer class="footer bg-base-300 items-center p-4" data-svelte-h="svelte-1kxw2rv"><div class="grid-flow-col items-center"><ul class="menu menu-vertical md:menu-horizontal"><li><a href="" target="_blank">Terms of Service</a></li> <li><a href="" target="_blank">Privacy Policy</a></li></ul></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log("routes/dashboard/+layout.svelte data", data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex min-h-screen flex-col">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Drawer, "Drawer").$$render($$result, {}, {}, {
    default: () => {
      return ` ${slots.default ? slots.default({}) : ``}`;
    }
  })} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
