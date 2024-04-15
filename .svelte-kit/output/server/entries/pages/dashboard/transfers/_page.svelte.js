import { s as subscribe, a as is_promise, b as noop } from "../../../../chunks/window.js";
import { c as create_ssr_component, a as add_attribute, e as escape, g as getContext, d as each, v as validate_component } from "../../../../chunks/ssr.js";
import "buffer";
import { w as webAuthStore, g as getSep6Info, b as getSep24Info, f as fetchStellarToml } from "../../../../chunks/sep6.js";
import "../../../../chunks/kycStore.js";
import "../../../../chunks/walletStore.js";
import "stellar-sdk";
import "../../../../chunks/horizonQueries.js";
import "../../../../chunks/index.js";
const LogInIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-log-in " + escape(customClass, true)}"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>`;
});
const LogOutIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-log-out " + escape(customClass, true)}"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $webAuthStore, $$unsubscribe_webAuthStore;
  $$unsubscribe_webAuthStore = subscribe(webAuthStore, (value) => $webAuthStore = value);
  let { data } = $$props;
  console.log("routes/dashboard/transfers/+page.svelte data", data);
  getContext("simple-modal");
  const transferButtonClasses = {
    deposit: "btn lg:w-1/2 join-item btn-accent",
    withdraw: "btn lg:w-1/2 join-item btn-secondary"
  };
  const authStatusClasses = {
    unauthenticated: "badge badge-error",
    auth_expired: "badge badge-warning",
    auth_valid: "badge badge-success"
  };
  const getAuthStatus = (homeDomain) => {
    if ($webAuthStore[homeDomain]) {
      if (webAuthStore.isTokenExpired(homeDomain)) {
        return "auth_expired";
      } else {
        return "auth_valid";
      }
    } else {
      return "unauthenticated";
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_webAuthStore();
  return `  ${each(data.homeDomainBalances, (asset) => {
    return `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(stellarToml) {
        return ` ${"WEB_AUTH_ENDPOINT" in stellarToml || "TRANSFER_SERVER" in stellarToml ? (() => {
          let authStatus = getAuthStatus(asset.home_domain), assetDescription = stellarToml.CURRENCIES?.filter(({ code }) => code === asset.asset_code)[0].desc;
          return ` <h3 class="card-title">${escape(asset.asset_code)} <small>(${escape(asset.home_domain)})</small> <div${add_attribute("class", authStatusClasses[authStatus], 0)}>${escape(authStatus)}</div></h3>  ${assetDescription ? `<p>${escape(assetDescription)}</p>` : ``} ${authStatus !== "auth_valid" ? `<button${add_attribute("id", `authButton${asset.asset_code}`, 0)}${add_attribute("name", `authButton${asset.asset_code}`, 0)} class="btn-primary btn">Authenticate with Anchor</button> <div class="form-control"><label class="label"${add_attribute("for", `authButton${asset.asset_code}`, 0)}><span class="label-text" data-svelte-h="svelte-qcogmm">Please authenticate before attempting any transfers.</span></label> </div>` : `<div class="flex w-full flex-col lg:flex-row">${"TRANSFER_SERVER" in stellarToml ? `${function(__value2) {
            if (is_promise(__value2)) {
              __value2.then(null, noop);
              return ``;
            }
            return function(sep6Info) {
              return ` <div class="card rounded-box bg-base-300 grid flex-grow place-items-center"><div class="card-body w-full"><h4 data-svelte-h="svelte-10kq8qf">SEP-6 Transfers</h4> <div class="join-vertical join lg:join-horizontal w-full">${each(Object.entries(sep6Info), ([endpoint, details]) => {
                return `${(endpoint === "deposit" || endpoint === "withdraw") && asset.asset_code in details ? `<button${add_attribute("class", transferButtonClasses[endpoint], 0)} ${authStatus !== "auth_valid" ? "disabled" : ""}>${endpoint === "deposit" ? `${validate_component(LogInIcon, "LogInIcon").$$render($$result, {}, {}, {})}
                                                        Deposit` : `Withdraw
                                                        ${validate_component(LogOutIcon, "LogOutIcon").$$render($$result, {}, {}, {})}`} </button>` : ``}`;
              })}</div> </div></div> `;
            }(__value2);
          }(getSep6Info(asset.home_domain))}` : ``} ${"TRANSFER_SERVER" in stellarToml && "TRANSFER_SERVER_SEP0024" in stellarToml ? `<div class="divider lg:divider-horizontal"></div>` : ``} ${"TRANSFER_SERVER_SEP0024" in stellarToml ? `${function(__value2) {
            if (is_promise(__value2)) {
              __value2.then(null, noop);
              return ``;
            }
            return function(sep24Info) {
              return ` <div class="card rounded-box bg-base-300 grid flex-grow place-items-center"><div class="card-body w-full"><h4 data-svelte-h="svelte-1xbddaf">SEP-24 Transfers</h4> <div class="join-vertical join lg:join-horizontal w-full">${each(Object.entries(sep24Info), ([endpoint, details]) => {
                return `${(endpoint === "deposit" || endpoint === "withdraw") && asset.asset_code in details ? `<button${add_attribute("class", transferButtonClasses[endpoint], 0)} ${authStatus !== "auth_valid" ? "disabled" : ""}>${endpoint === "deposit" ? `${validate_component(LogInIcon, "LogInIcon").$$render($$result, {}, {}, {})}
                                                        Deposit` : `Withdraw
                                                        ${validate_component(LogOutIcon, "LogOutIcon").$$render($$result, {}, {}, {})}`} </button>` : ``}`;
              })}</div> </div></div> `;
            }(__value2);
          }(getSep24Info(asset.home_domain))}` : ``} </div>`}`;
        })() : ``} `;
      }(__value);
    }(fetchStellarToml(asset.home_domain))}`;
  })}`;
});
export {
  Page as default
};
