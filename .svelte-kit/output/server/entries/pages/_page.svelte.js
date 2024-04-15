import "../../chunks/window.js";
import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="hero bg-base-200 min-h-screen" data-svelte-h="svelte-169yep6"><div class="hero-content text-center"><div class="max-w-md"><h1 class="text-5xl font-bold">Welcome to DiamPay!</h1> <p class="py-6">A cutting-edge app that makes it simple and hassle-free to pay anyone you want.</p>  <div data-sveltekit-preload-data="tap" data-sveltekit-preload-code="hover"><a href="/signup" class="btn-primary btn">Signup Now</a> <a href="/login" class="btn-outline btn">Login</a></div></div></div></div>`;
});
export {
  Page as default
};
