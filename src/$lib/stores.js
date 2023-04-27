import { writable } from "svelte/store";

export const twoPlayer = writable(false);
export const scorePlayer1 = writable(0);
export const scorePlayer2 = writable(0);
