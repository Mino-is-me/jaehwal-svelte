<Button 
    color="White" 
    title="Simple button"
    raised='true'
    on:click={redirect_to}>
    Launch App
    <Icon 
        path="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" 
        style='color: Blueviolet'/>
        
</Button>
<script>
    import {Button, Icon } from 'svelte-mui';
    import {redirect_url_01} from '../store.js';
    function redirect_to() {
        window.location.href = $redirect_url_01;
    }

</script>

<style>
    
</style>

