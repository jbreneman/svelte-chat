<script>
    import ChatInput from './ChatInput.svelte';
    import ChatMessage from './ChatMessage.svelte';

    export let messages = [];
    export let preferences = {};
    let scrolledUp = false;
    let anchor;

    $: {
        if (!scrolledUp && anchor) {
            anchor.scrollIntoView(false);
		}
    }

    const handleScroll = () => {
        scrolledUp = this.list.scrollHeight - this.list.scrollTop !== this.list.clientHeight;
    };
</script>

<main class="chat-body">
    <section
        class="list"
        on:scroll={handleScroll}
    >
        {#each messages as message (message.id)}
            <ChatMessage message={message} />
        {/each}
        <span
            class="anchor"
            aria-hidden="true"
            bind:this={anchor}
        ></span>
        </section>
    <ChatInput preferences={preferences} />
</main>

<style>
    .chat-body {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .list {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .anchor {
        opacity: 0;
        height: 0;
    }
</style>