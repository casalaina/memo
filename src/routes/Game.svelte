<script>
  export let data;
  import Card from "./Card.svelte";
  import { scorePlayer1, scorePlayer2 } from "../$lib/stores.js";
  let card1, card2;
  let grid;

  let evaluate = () => {
    // prevent game play during evaluation animation
    grid.style.pointerEvents = "none";
    // if they match, up the score, hide elements, and reset vars
    if (data.content[card1].url === data.content[card2].url) {
      data.content[card1].hidden = data.content[card2].hidden = true;
      setTimeout(function () {
        data.content[card1].selected = data.content[card2].selected = false;
        grid.style.pointerEvents = "all";
        $scorePlayer1++;
        card1 = card2 = undefined;
      }, 2000);
    } else {
      // otherwise flip back over, reset vars
      setTimeout(function () {
        data.content[card1].selected = data.content[card2].selected = false;
        card1 = card2 = undefined;
        grid.style.pointerEvents = "all";
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
  }
</style>
