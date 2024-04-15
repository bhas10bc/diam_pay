
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const USER: string;
	export const npm_package_devDependencies__esbuild_plugins_node_globals_polyfill: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_user_agent: string;
	export const npm_package_devDependencies_uuid: string;
	export const npm_config_bin_links: string;
	export const npm_node_execpath: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_config_init_version: string;
	export const SHLVL: string;
	export const npm_package_devDependencies_svelte_local_storage_store: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_config_init_license: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_package_scripts_check: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_devDependencies_svelte_feather_icons: string;
	export const npm_config_engine_strict: string;
	export const npm_config_resolution_mode: string;
	export const WSL_DISTRO_NAME: string;
	export const npm_package_description: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_daisyui: string;
	export const npm_package_devDependencies__tailwindcss_forms: string;
	export const npm_package_readmeFilename: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_scripts_dev: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const NAME: string;
	export const WSL_INTEROP: string;
	export const PULSE_SERVER: string;
	export const _: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_private: string;
	export const npm_package_devDependencies__rollup_plugin_inject: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const npm_package_devDependencies__stellar_wallet_sdk: string;
	export const npm_config_ignore_scripts: string;
	export const npm_package_devDependencies_svelte_copy: string;
	export const npm_package_devDependencies_prettier_plugin_tailwindcss: string;
	export const PATH: string;
	export const NODE: string;
	export const GOBIN: string;
	export const npm_package_name: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const npm_package_devDependencies_postcss_load_config: string;
	export const npm_package_devDependencies__esbuild_plugins_node_modules_polyfill: string;
	export const LANG: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies__tailwindcss_typography: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_version_git_message: string;
	export const SHELL: string;
	export const GOPATH: string;
	export const npm_lifecycle_event: string;
	export const npm_package_version: string;
	export const npm_config_argv: string;
	export const npm_package_devDependencies_svelte_simple_modal: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_git_sign: string;
	export const npm_package_license: string;
	export const npm_config_strict_ssl: string;
	export const BASH_ENV: string;
	export const npm_package_devDependencies_path: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_config_save_prefix: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_scripts_preview: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const HOSTTYPE: string;
	export const INIT_CWD: string;
	export const WSLENV: string;
	export const npm_package_devDependencies_stellar_sdk: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		USER: string;
		npm_package_devDependencies__esbuild_plugins_node_globals_polyfill: string;
		npm_config_version_commit_hooks: string;
		npm_config_user_agent: string;
		npm_package_devDependencies_uuid: string;
		npm_config_bin_links: string;
		npm_node_execpath: string;
		npm_package_devDependencies_vite: string;
		npm_config_init_version: string;
		SHLVL: string;
		npm_package_devDependencies_svelte_local_storage_store: string;
		MOTD_SHOWN: string;
		HOME: string;
		OLDPWD: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_config_init_license: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_svelte_check: string;
		npm_config_version_tag_prefix: string;
		npm_package_scripts_check: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_devDependencies_svelte_feather_icons: string;
		npm_config_engine_strict: string;
		npm_config_resolution_mode: string;
		WSL_DISTRO_NAME: string;
		npm_package_description: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_daisyui: string;
		npm_package_devDependencies__tailwindcss_forms: string;
		npm_package_readmeFilename: string;
		WAYLAND_DISPLAY: string;
		npm_package_devDependencies_prettier: string;
		npm_package_scripts_dev: string;
		LOGNAME: string;
		npm_package_type: string;
		NAME: string;
		WSL_INTEROP: string;
		PULSE_SERVER: string;
		_: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_scripts_check_watch: string;
		npm_package_private: string;
		npm_package_devDependencies__rollup_plugin_inject: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		TERM: string;
		npm_package_devDependencies__stellar_wallet_sdk: string;
		npm_config_ignore_scripts: string;
		npm_package_devDependencies_svelte_copy: string;
		npm_package_devDependencies_prettier_plugin_tailwindcss: string;
		PATH: string;
		NODE: string;
		GOBIN: string;
		npm_package_name: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		npm_package_devDependencies_postcss_load_config: string;
		npm_package_devDependencies__esbuild_plugins_node_modules_polyfill: string;
		LANG: string;
		npm_package_devDependencies_eslint: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies__tailwindcss_typography: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_version_git_message: string;
		SHELL: string;
		GOPATH: string;
		npm_lifecycle_event: string;
		npm_package_version: string;
		npm_config_argv: string;
		npm_package_devDependencies_svelte_simple_modal: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_build: string;
		npm_config_version_git_tag: string;
		npm_config_version_git_sign: string;
		npm_package_license: string;
		npm_config_strict_ssl: string;
		BASH_ENV: string;
		npm_package_devDependencies_path: string;
		npm_package_scripts_format: string;
		PWD: string;
		npm_execpath: string;
		XDG_DATA_DIRS: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_config_save_prefix: string;
		npm_config_ignore_optional: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_scripts_preview: string;
		WSL2_GUI_APPS_ENABLED: string;
		HOSTTYPE: string;
		INIT_CWD: string;
		WSLENV: string;
		npm_package_devDependencies_stellar_sdk: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
