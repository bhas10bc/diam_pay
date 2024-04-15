<!-- A very basic Hero page, prompting the user to either signup or login -->
<div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="text-5xl font-bold">Welcome to DiamPay!</h1>
            <p class="py-6">
                A cutting-edge app that makes it simple and hassle-free to pay anyone you want.
            </p>
            <!-- These SvelteKit preload attributes keep the redirects from firing when the user hovers over the button -->
            <div data-sveltekit-preload-data="tap" data-sveltekit-preload-code="hover">
                <a href="/signup" class="btn-primary btn">Signup Now</a>
                <a href="/login" class="btn-outline btn">Login</a>
            </div>
        </div>
    </div>
</div>
