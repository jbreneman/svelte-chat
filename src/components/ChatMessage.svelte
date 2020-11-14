<script>
    import { formatTime } from '../helpers/time';

    export let message = {};

    $: formattedTime = formatTime(new Date(message.datetime));
    $: longTime = formatTime(new Date(message.datetime), false);
</script>

<article class="message">
    <header class="header">
        <span class="name">
            {message.username}
        </span>
        <span class="time">
            {formattedTime}
            <span class="full-time">
                {longTime}
            </span>
        </span>
    </header>
    <p class="text">
        {message.text}
    </p>
</article>

<style>
    .message {
        flex-shrink: 0;
        width: 100%;
        padding: var(--spacing-400);
        border-top: 2px solid var(--neutral);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .header {
        margin-bottom: var(--spacing-400);
        padding-bottom: var(--spacing-100);
        border-bottom: 2px solid var(--neutral);
    }

    .name {
        color: var(--primary);
        font-size: 1.25rem;
        font-weight: 700;
    }

    .time {
        position: relative;
        font-size: .75rem;
        margin-left: var(--spacing-100);
    }

    .time:hover .full-time {
        opacity: .75;
    }

    .full-time {
        position: absolute;
        margin-top: var(--spacing-200);
		padding: var(--spacing-200) var(--spacing-300);
		background-color: var(--primary);
		top: 100%;
		left: 50%;
		transform: translate3d(-50%, 0, 0);
		color: white;
		white-space: nowrap;
		border-radius: var(--radius-small);
		opacity: 0;
		pointer-events: none;
		transition: opacity var(--easing-300);
    }

    .full-time::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 100%;
        transform: translate3d(-50%, 0, 0);
        border-right: .25rem solid transparent;
        border-left: .25rem solid transparent;
        border-bottom: .25rem solid var(--primary);
    }

    .text {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.4;
    }
</style>