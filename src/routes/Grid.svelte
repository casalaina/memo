<script>
  export let data;
  import Card from "./Card.svelte";
  import { getContext } from "svelte";

  // duplicate all the array items
  data.content = data.content.flatMap((i) => [i, i]);

  // Randomize array in-place using Durstenfeld shuffle algorithm
  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  shuffleArray(data.content);
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
