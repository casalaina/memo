<script>
  export let data;
  import Card from "./Card.svelte";
  import { scorePlayer1, scorePlayer2, selected1, selected2 } from "../$lib/stores.js";
</script>

<div id="grid">
  {#each data.content as item, index}
    <Card {item} {index} />
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
