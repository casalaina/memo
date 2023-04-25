<script>
  export let item;
  import { fade } from "svelte/transition";
  import cardBg from "../assets/card-bg.jpg";
  let selected = false;
</script>

<div class="cardWrap">
  <div class={selected ? "card" : "card selected"} on:click={() => (selected = !selected)} on:keydown={() => (selected = !selected)}>
    <div class="cardSide back">
      <img src={cardBg} alt="back of card" />
    </div>
    <div class="cardSide image">
      <img src={item.url} alt={item.description} />
    </div>
  </div>
</div>

<style lang="scss">
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

    &.selected {
      transform: rotateY(180deg);
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
      z-index: 0;
    }

    .back {
      transform: rotateY(180deg);
    }
  }
</style>
