import { writable } from "svelte/store";

export const twoPlayerGame = writable(false);
export const scorePlayer1 = writable(0);
export const scorePlayer2 = writable(0);
export const namePlayer1 = writable("Cadet 1");
export const namePlayer2 = writable("Cadet 2");
export const player1 = writable(true);
export const gameOver = writable(false);
