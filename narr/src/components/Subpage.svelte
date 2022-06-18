<script>
	// export let name;
	import {master_name} from '../store.js';
    import Blog from './Blog.svelte'

</script>

<main>
    <div>
        <h1>Welcome to </h1>
        <h1 class="highlight">
            Next-Gen
        </h1>

        <h1 class="highlight">
            Brand-New
        </h1>

        <h1 class="highlight">
            Awesome 
        </h1>
        <h1>
            DEX <br>
            Protocol <br>
        </h1>  
    </div>

</main>

<style>
    main {
        text-align: center;
        background-color: rgba(73, 73, 73, 0.272);
		width: 100%;
		height: 100%;
    }
    div {
        /* position: relative; */
        margin: 10% 10% 10% 10%;
    }
    h1 {
        text-align: left;
        color: black;
    }
    .highlight {
        color:blueviolet;
    }
</style>
