<script>
  export let item;
  export let index;
  import { onMount } from "svelte";

  import { fade } from "svelte/transition";
  import cardBg from "../assets/card-bg.jpg";
  let selected = false;
  let current;
  import { scorePlayer1, scorePlayer2, selected1, selected2 } from "../$lib/stores.js";

  let cardLogic = () => {
    // toggle class
    selected = !selected;
    // set url on first, if first is falsey
    if (!$selected1) {
      $selected1 = item.url;
    } else {
      // set url on second, if first isn't falsey
      $selected2 = item.url;
    }
  };
  onMount(() => {});
</script>

<div class="cardWrap">
  <div class={!selected ? `card ${index}` : `card ${index} selected`} on:click={cardLogic} on:keydown={cardLogic} bind:this={current}>
    <div class="cardSide image">
      <img src={item.url} alt={item.description} />
    </div>
    <div class="cardSide back">
      <img src={cardBg} alt="back of card" />
    </div>
  </div>
</div>

<style lang="scss" global>
  .cardWrap {
    width: 100%;
    border-radius: 0.5vw;
    aspect-ratio: 1/1;
    perspective: 500px;
  }

  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    transform: rotateY(180deg);

    &.selected {
      transform: rotateY(0);
    }

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .cardSide {
      position: absolute;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 0.25vw;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.25vw;
      }
    }

    .image {
      border: 0.25vw solid #fffdeb;
    }

    .back {
      transform: rotateY(180deg);
    }
  }
</style>
