<script>
  export let data;
  import { invalidateAll } from "$app/navigation";
  import { twoPlayerGame, scorePlayer1, scorePlayer2, player1, gameOver } from "../$lib/stores.js";

  import Card from "./Card.svelte";

  import { getNotificationsContext } from "svelte-notifications";
  const { addNotification } = getNotificationsContext();
  let card1, card2;
  let grid;

  let evaluate = () => {
    // prevent game play during evaluation animation
    grid.style.pointerEvents = "none";
    // if they match, up the score, hide elements, and reset vars
    if (data.content[card1].url === data.content[card2].url) {
      data.content[card1].hidden = data.content[card2].hidden = true;
      addNotification({
        text: $twoPlayerGame && $player1 ? "🚀 Match Cadet 1!" : $twoPlayerGame && !$player1 ? "🚀 Match Cadet 2!" : "🚀 Match!",
        position: "bottom-center",
        removeAfter: 2500,
      });

      setTimeout(function () {
        data.content[card1].selected = data.content[card2].selected = false;
        grid.style.pointerEvents = "all";
        $player1 ? $scorePlayer1++ : $scorePlayer2++;
        card1 = card2 = undefined;
        if ($scorePlayer1 + $scorePlayer2 === 1) {
          $gameOver = true;
          invalidateAll();
        }
        if ($twoPlayerGame && !$gameOver) {
          addNotification({
            text: $player1 ? "🫡 Go Again Cadet 1!" : "🫡 Go Again Cadet 2!",
            position: "bottom-center",
            removeAfter: 1500,
          });
        }
      }, 2000);
    } else {
      // otherwise flip back over, reset vars
      setTimeout(function () {
        $twoPlayerGame && $player1 ? ($player1 = false) : ($player1 = true);
        data.content[card1].selected = data.content[card2].selected = false;
        card1 = card2 = undefined;
        // extra pause to prevent hover stutter
        setTimeout(function () {
          grid.style.pointerEvents = "all";
        }, 750);
      }, 1000);
    }
  };

  let cardLogic = (i) => {
    // set selected on first, if card1 isn't defined
    if (card1 == undefined) {
      card1 = i;
      data.content[card1].selected = true;
    } else {
      // set selected on second, if card2 isn't defined
      card2 = i;
      data.content[card2].selected = true;
      evaluate();
    }
  };
</script>

<div id="grid" bind:this={grid}>
  {#each data.content as item, index}
    <Card
      {item}
      on:click={() => {
        cardLogic(index);
      }}
      on:keydown={() => {
        cardLogic(index);
      }} />
  {/each}
</div>

<style lang="scss">
  @import "../src/styles/vars";

  #grid {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;

    @media #{$lg} {
      max-width: 75vw;
    }

    @media #{$xl} {
      max-width: auto;
    }
  }

  :global(.default-notification-style) {
    font-weight: 600;
  }
</style>
