<script>
    import { client } from '../main';

    export let preferences = { username: '' };
    let username = '';
    let active = false;

    const submit = () => {
        active = true;
        client.connect({ name: username });
        preferences = {
            ...preferences,
            username
        };
        localStorage.setItem('preferences', JSON.stringify(preferences));
    }
</script>

<main class="sign-in">
    <section class="card">
        <h1 class="heading">
            Choose name
        </h1>
        <form class="form" on:submit|preventDefault={submit}>
            <input class="name-input" type="text" bind:value={username} />
            <button
                class="submit-button"
                disabled={active}
            >
                Join
            </button>
        </form>
    </section>
</main>

<style>
    .sign-in {
        background-color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-900);
    }

    .card {
        border-radius: var(--radius);
        background: white;
        max-width: 25rem;
        width: 100%;
        padding: var(--spacing-700);
    }

    .heading {
        margin: 0;
        font-size: clamp(2rem, 1.6250rem + 1.8750vw, 3.5rem);
        text-align: center;
        letter-spacing: -2px;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .name-input {
        margin-top: var(--spacing-400);
        width: 100%;
        border-radius: var(--radius-small);
        border: 2px solid var(--primary);
        background-color: white;
        caret-color: var(--secondary);
        padding: var(--spacing-300) var(--spacing-400);
        transition: box-shadow var(--easing-300);
    }

    .name-input:focus {
        outline: none;
        box-shadow: 0 0 0 4px var(--primary-faded);
    }

    .submit-button {
        appearance: none;
        border: 0;
        border-radius: var(--radius-small);
        background-color: var(--primary);
        padding: var(--spacing-300) var(--spacing-400);
        color: white;
        margin-top: var(--spacing-300);
        transition: box-shadow var(--easing-300);
        cursor: pointer;
    }

    .submit-button:disabled {
        background-color: var(--primary-faded);
        cursor: not-allowed;
    }

    .submit-button:focus {
        outline: none;
        box-shadow: 0 0 0 4px var(--primary-faded);
    }
</style>