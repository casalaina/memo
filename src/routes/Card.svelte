<script>
  export let item;
  import cardBg from "../assets/card-bg.jpg";
</script>

<div class="cardWrap">
  <div class={item.selected ? "card selected" : item.hidden ? "card hidden" : "card"} on:click on:keydown>
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
