<script>
  export let item;
  import cardBg from "../assets/card-bg.jpg";
  let w;
  let x;
</script>

<div class={item.selected ? "cardWrap selected" : item.hidden ? "cardWrap hidden" : "cardWrap"}>
  <div
    class={x < w / 2 ? "card left" : x > w / 2 ? "card right" : "card"}
    on:click
    on:keydown
    on:mousemove={(e) => {
      x = e.clientX - e.target.closest(".cardWrap").offsetLeft;
    }}
    bind:clientWidth={w}>
    <div class="cardSide image">
      <img src={item.url} alt={item.description} />
    </div>
    <div class="cardSide back">
      <img src={cardBg} alt="back of card" />
    </div>
  </div>
  <button class="a11yBtn" on:click>Select card</button>
</div>

<style lang="scss">
  @import "../src/styles/vars";

  .cardWrap {
    min-width: 25%;
    margin: 2%;
    border-radius: 0.5vw;
    perspective: 500px;
    flex-shrink: 1;
    aspect-ratio: 1/1;

    .a11yBtn {
      width: 100%;
      height: 100%;
      border: none;
      background: transparent;
      font-size: 0;
    }

    &.selected .card,
    &.selected .a11yBtn {
      transform: rotateY(0);
      pointer-events: none;
      cursor: not-allowed;
    }

    &.hidden .card,
    &.hidden .a11yBtn {
      opacity: 0;
      transform: scale(0.1);
      pointer-events: none;
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

      @media (hover: hover) {
        &.left {
          &:hover {
            transform: rotateY(180deg) scale(1.05) rotateY(10deg);
          }
        }
        &.right {
          &:hover {
            transform: rotateY(180deg) scale(1.05) rotateY(-10deg);
          }
        }
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
      margin: 1%;
    }
    @media (min-aspect-ratio: 160/100) {
      min-width: 15%;
    }
    @media (min-aspect-ratio: 180/100) {
      min-width: 13%;
    }
    @media (min-aspect-ratio: 210/100) {
      min-width: 10%;
    }
  }
</style>
