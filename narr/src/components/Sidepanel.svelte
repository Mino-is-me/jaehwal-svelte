<Sidepanel 
    right
    bind:visible={$side_panel_toggle}
    >
    <ul class="parent">
        <li>
            <Button on:click={temp_event}>CV</Button>
            <Button>ArtStation</Button>
            <Button>GitHub</Button>
            <Button>LinkedIn</Button>
            <Button on:click={goto_cv}>Working</Button> 
        </li>
    </ul>
    <!-- 아서 하이요~ -->
</Sidepanel>
<style>
    .parent {
        color: blueviolet;
    }
    ul {
        padding : 10%;
        margin : 10%;
    }
    li {
        list-style: none;
    }
</style>

<script>
    import { side_panel_toggle } from '../store.js';
    import { Sidepanel } from 'svelte-mui';
    import {Button} from 'svelte-mui';

    function temp_event() {
        console.log('temp_event');
    }

    function goto_cv() {
        let win = window.open('https://rtzr.ai', '_blank');
        win.focus();
    }
</script>


