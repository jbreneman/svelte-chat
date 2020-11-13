import App from './App.svelte';
import { init } from './ws';
export const client = init();

const app = new App({
	target: document.body
});

export default app;