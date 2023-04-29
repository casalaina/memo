import { writable } from "svelte/store";

export const twoPlayerGame = writable(false);
export const scorePlayer1 = writable(0);
export const scorePlayer2 = writable(0);
export const player1 = writable(true);
export const gameOver = writable(false);
