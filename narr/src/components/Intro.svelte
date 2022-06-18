<script>
	// export let name;
	import {master_name} from '../store.js';
    import Blog from './Blog.svelte'

</script>

<main>
	<h1>{$master_name} is DEX Protocol that supports Buying and Selling</h1>
    <Blog />
    <Blog />
    <Blog />
    <Blog />
</main>

<style>
    main {
        text-align: center;
        background-color: gray;
		/* width: 2560px; */
		height: 100%;
    }
</style>
