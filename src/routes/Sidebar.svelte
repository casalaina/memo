<script>
  import { scorePlayer1, scorePlayer2, twoPlayer } from "../$lib/stores.js";
  import logo from "../assets/memo-logo.svg";
</script>

<div id="sidebar">
  <div class="top">
    <img src={logo} alt="NASA-style logo, spelling the word 'MEMO'" />
    <p id="test">Test your memory on these stunning space images, provided by NASA’s “Astronomy Photograph of the Day” archive.</p>
    <p>But work quick, your ability to commit these images to memory will decide if you get the job or not: on the next mission to the moon!</p>
  </div>
  <div class="bottom">
    score: {$scorePlayer1}
    {#if $twoPlayer}
      score: {$scorePlayer2}
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../src/styles/vars";

  #sidebar {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 300;
    font-size: clamp(0.8rem, 1vw, 1.5rem);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    // color: $md;
    height: 50px;

    @media #{$md} {
      width: 15vw;
      padding: 0 5vw 0 0;
    }
  }

  .top {
    p {
      display: none;
      @media #{$md} {
        display: block;
      }
    }
  }
</style>
