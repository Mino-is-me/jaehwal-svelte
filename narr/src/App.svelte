<script>
	// export let name;
	import {master_name} from './store.js';
	import Sidepanel from './components/Sidepanel.svelte';
	import Button from './components/Button.svelte';
//	import Intro from './components/Intro.svelte';
//	import ButtonLaunchApp from './components/ButtonLanuchApp.svelte';
//	import Subpage from './components/Subpage.svelte';

</script>

<main>
	<nav class="navbar">
		<div>
			<Button />
		</div>
	</nav>		
	<h1>glad to meet you</h1>
	<Sidepanel />
	
</main>

<style>
	main {
		/* text-align: center; */
		padding: 1em;
		margin: 0 0%;
		/* width: 2560px; */
		height: 100%;
	}
	h1 {
		color: #6667AB;
		text-transform: uppercase;
		font-size: 4em;
		/* font-weight: 100; */
		text-align: center;
		margin: 0% 10% 0% 10%;
		padding: 15% 0%;
		/* background-color: rgba(128, 128, 128, 0.26); */
	}
	nav {
		text-align: right;
		position:sticky;
		/* margin: 20%; */
	}
	.navbar {
		position: sticky;
	}
</style>