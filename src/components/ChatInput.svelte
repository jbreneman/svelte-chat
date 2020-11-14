<script>
    import { client } from '../main';
    export let preferences = {};
    let text = '';

    const handleSubmit = () => {
        client.sendMessage({
            text,
            username: preferences.username,
            datetime: new Date()
        });
        text = '';
    }
</script>

<section class="chat-input">
    <form on:submit|preventDefault={handleSubmit}>
        <input
            class="input"
            type="text"
            placeholder="Chat..."
            bind:value={text}
        />
        <button class="visually-hidden">
            Send message
        </button>
    </form>
</section>

<style>
    .chat-input {
        flex-shrink: 0;
        width: 100%;
        padding: var(--spacing-400);
        border-top: 2px solid var(--neutral);
    }

    .input {
        width: 100%;
        border-radius: var(--radius-small);
        border: 2px solid var(--primary);
        background-color: white;
        caret-color: var(--secondary);
        padding: var(--spacing-300) var(--spacing-400);
        transition: box-shadow var(--easing-300);
    }

    .input:focus {
        outline: none;
        box-shadow: 0 0 0 4px var(--primary-faded);
    }
</style>