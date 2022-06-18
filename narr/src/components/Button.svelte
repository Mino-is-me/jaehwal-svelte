<Button 
    color="White" 
    title="Simple button"
    raised='true'
    on:click={do_toggle_side_pannel}>
    <Icon 
        path="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" 
        style='color: #6667AB'/>
</Button>

<style>
    :root{
        position: sticky;
    }
</style>
<script>
    import {Button, Icon } from 'svelte-mui';
    import {side_panel_toggle} from '../store.js';

    function do_toggle_side_pannel() {
		$side_panel_toggle = !$side_panel_toggle;
		// alert('clicked');
        console.log('Side panel toggle evnt');
	}

</script>

