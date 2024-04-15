import "../../../chunks/window.js";
import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import { E as ErrorAlert } from "../../../chunks/ErrorAlert.js";
import { T as TruncatedKey } from "../../../chunks/TruncatedKey.js";
import "../../../chunks/walletStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let pincode = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `  <div class="hero bg-base-200 min-h-screen"><div class="hero-content flex-col gap-7 lg:flex-row-reverse"><div class="text-center lg:text-left" data-svelte-h="svelte-1pnvlf4"><h1 class="text-5xl font-bold">Login now!</h1> <p class="py-6">Submit your 6-digit PIN code to access the dashboard. Your PIN code remains local to
                your device, and your secret key is encrypted within your browser, guaranteeing that
                it is not shared with any other entity.</p></div> <div class="card bg-base-100 w-full max-w-sm flex-shrink-0 shadow-2xl"><div class="card-body">${validate_component(ErrorAlert, "ErrorAlert").$$render($$result, { dismissible: false }, {}, {})} <form><div class="form-control"><label class="label" for="publicKey" data-svelte-h="svelte-psvwbt"><span class="label-text">Public Key</span></label> <div class="input-bordered input flex">${validate_component(TruncatedKey, "TruncatedKey").$$render($$result, { keyText: data.publicKey }, {}, {})}</div></div> <div class="form-control"><label for="pincode" class="label" data-svelte-h="svelte-15rt43d"><span class="label-text">Pincode</span></label> <input id="pincode" name="pincode" type="password" class="input-bordered input" minlength="6" maxlength="6" required${add_attribute("value", pincode, 0)}></div> <div class="form-control mt-6" data-svelte-h="svelte-1r64k69"><button class="btn-primary btn">Login</button></div></form></div></div></div></div>`;
});
export {
  Page as default
};
