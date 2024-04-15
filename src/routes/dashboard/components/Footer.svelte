<!--
@component

The `Footer` component implements a very simple footer that displays links to
SDF's terms of service, privacy policy, and the GitHub repo where this project
can be found.
-->

<script>
    // We import things from external packages that will be needed
    import { GithubIcon } from 'svelte-feather-icons'
</script>

<footer class="footer bg-base-300 items-center p-4">
    <div class="grid-flow-col items-center">
        <ul class="menu menu-vertical md:menu-horizontal">
            <li>
                <a href="" target="_blank">Terms of Service</a>
            </li>
            <li>
                <a href="" target="_blank">Privacy Policy</a>
            </li>
        </ul>
    </div>
</footer>
