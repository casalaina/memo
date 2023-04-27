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
    min-width: 25%;
    margin: 2%;
    border-radius: 0.5vw;
    perspective: 500px;
    flex-shrink: 1;
    aspect-ratio: 1/1;

    // usually don't love a bunch of media queries, but making an exception
    // to keep this grid filling the space as best as possible
    // using aspect-ratio queries to avoid having to mess with a million heights
    // and widths
    @media (min-aspect-ratio: 50/100) {
      min-width: 22%;
      margin: 1.5%;
    }
    @media (min-aspect-ratio: 75/100) {
      min-width: 20%;
    }
    @media (min-aspect-ratio: 85/100) {
      min-width: 17%;
    }
    @media (min-aspect-ratio: 120/100) {
      min-width: 15%;
      margin: 1%;
    }
    // @media (min-aspect-ratio: 150/100) {
    //   min-width: 13%;
    // }
    @media (min-aspect-ratio: 170/100) {
      min-width: 12%;
    }
    @media (min-aspect-ratio: 200/100) {
      min-width: 10%;
    }
  }

  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 1s, opacity 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;

    &.selected {
      transform: rotateY(0);
      pointer-events: none;
      cursor: not-allowed;
    }

    &.hidden {
      opacity: 0;
      transform: scale(0.1);
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
