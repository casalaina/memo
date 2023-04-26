<script>
  export let data;
  import Card from "./Card.svelte";
  import { scorePlayer1, scorePlayer2, selected1, selected2 } from "../$lib/stores.js";
  let card1, card2;

  let evaluate = () => {
    console.log(`evaluate`);
    // if they match, up score, hide elements, and reset store
    if (data.content[card1].url === data.content[card2].url) {
      console.log(`match!`);
      data.content[card1].selected = data.content[card2].selected = false;
      data.content[card1].hidden = data.content[card2].hidden = true;
      $scorePlayer1++;
      card1 = card2 = undefined;
    } else {
      // otherwise flip back over, reset store
      console.log(`no match!`);
      setTimeout(function () {
        data.content[card1].selected = data.content[card2].selected = false;
        card1 = card2 = undefined;
      }, 1000);
    }
  };

  let cardLogic = (i) => {
    // set url on first, if first is falsey
    if (card1 == undefined) {
      card1 = i;
      data.content[card1].selected = true;
    } else {
      card2 = i;
      data.content[card2].selected = true;
      evaluate();
    }
  };
</script>

<div id="grid">
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
  #grid {
    display: grid;
    height: auot;
    width: 80%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
  }
</style>
