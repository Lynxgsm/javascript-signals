import { createSignal } from './signal.js';

export const c = createSignal(0);
export const isLoading = createSignal(false);
export const jokeResponse = createSignal('');
