<script>
	import { client } from './main';
	import SignIn from './components/SignIn.svelte';
	import ChatBody from './components/ChatBody.svelte';

	let preferences = JSON.parse(localStorage.getItem('preferences')) || { username: '' };
	let messages = [];
	let users = [];

	client.onReceiveMessage(({ message }) => {
		messages = [
			...messages,
			message
		];
	});

	client.onReceiveAllMessages(({ messages: allMessages }) => {
		messages = allMessages;
	});

	client.onUpdateUserlist((users) => {
		users = users;
	});

	client.onReconnect(() => {
		client.connect({ name: preferences.username });
	});

	if (preferences.username) {
		client.connect({ name: preferences.username });
	}
</script>

<div class="app">
	{#if !preferences.username }
		<SignIn bind:preferences={preferences} />
	{:else}
		<ChatBody
			messages={messages}
			preferences={preferences}
		/>
	{/if}
</div>

<style>
.app {
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 16rem;
}
</style>