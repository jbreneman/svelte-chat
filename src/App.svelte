<script>
	import SignIn from './components/SignIn.svelte';

	let preferences = JSON.parse(localStorage.getItem('preferences')) || { username: '' };
</script>

<main class="app">
	{#if !preferences.username }
		<SignIn bind:preferences={preferences} />
	{:else}
		test
	{/if}
</main>

<style>
.app {
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 16rem;
}
</style>