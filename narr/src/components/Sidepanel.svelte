<Sidepanel 
    right
    bind:visible={$side_panel_toggle}
    >
    <ul class="parent">
        <li>
            <Button on:click={
                goto($url_cv)
            }>CV</Button>

            <Button>ArtStation</Button>
            <Button>GitHub</Button>
            <Button>LinkedIn</Button>

        </li>
    </ul>
    <ul class='parent'>
        <li>
            <Button on:click={
                goto($url_eve)
            }>Worked</Button>

            <Button on:click={
                goto($url_bu)
            }>Worked</Button> 
        </li>
    </ul>
</Sidepanel>
<style>
    ul {
        padding : 10%;
        margin : 10%;
    }
    li {
        list-style: none;
    }
</style>

<script>
    import { side_panel_toggle, url_eve, url_bu, url_cv } from '../store.js';
    import { Sidepanel } from 'svelte-mui';
    import {Button} from 'svelte-mui';


    function temp_event() {
        console.log('temp_event');
    }

    function goto(_url) {
        let win = window.open(_url, '_blank');
        win.focus();
    }
</script>


