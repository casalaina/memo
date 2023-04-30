<script>
  import { scorePlayer1, scorePlayer2, namePlayer1, namePlayer2, player1, twoPlayerGame } from "~/lib/stores.js";
  import Logo from "~/assets/Logo.svelte";
  import seal from "~/assets/memo-seal-color.svg";
</script>

<div id="sidebar">
  <div id="top">
    <div id="logo"><Logo color={"#FFFFFF"} /></div>
    <p id="test">Prove you've got the <span class="medium">memory</span> on these stunning space images, provided by NASA’s “Astronomy Photograph of the Day” archive.</p>
    <p>But work quick, your ability to commit these images to the dome will decide if you <span class="medium">get the job</span> or not: on the next mission to the moon!</p>
  </div>
  <div id="bottom">
    <div id="score">
      <p>
        {#if !$twoPlayerGame}
          <strong>Total pairs found:</strong><br />
          {$scorePlayer1} / 10
        {:else}
          <div class="player" class:active={$player1} id="scorePlayer1">
            <strong>👨‍🚀 {$namePlayer1}:</strong>
            {$scorePlayer1}
          </div>
          <div class="player" class:active={!$player1} id="scorePlayer1">
            <strong>👩‍🚀 {$namePlayer2}:</strong>
            {$scorePlayer2}
          </div>
        {/if}
      </p>
    </div>
    <div id="sealWrap">
      <img id="seal" src={seal} alt="NASA-style 60s seal, spelling the word 'MEMO'" />
      <p><strong>Authorized</strong> for MEMO use only.</p>
    </div>
  </div>
</div>

<style lang="scss">
  @use "../src/styles/vars" as *;

  #sidebar {
    width: 100%;
    min-width: 200px;
    color: #fff;

    font-weight: 300;
    font-size: clamp(0.8rem, 0.8vw, 1.5rem);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    padding: 1%;

    @include from(md) {
      flex-direction: column;

      padding: 1% 2vw 1% 0;
      width: 15vw;
    }

    .medium {
      font-weight: 500;
    }
  }

  #top {
    #logo {
      margin-bottom: 15%;
    }
    p {
      display: none;
      max-width: 10rem;
      margin-bottom: 15%;

      @include from(md) {
        display: block;
      }
    }
  }

  #bottom {
    #score {
      margin-bottom: 20%;
      text-align: right;

      @include from(md) {
        text-align: left;
      }
    }
    strong {
      margin-bottom: 2%;
      display: inline-block;
    }

    #sealWrap {
      display: none;

      @include from(md) {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
      }
    }
    #seal {
      margin: 0% 5% -2% -2%;
    }
  }

  .player {
    border-radius: 0.25vw;
    padding: 0.5rem 1rem;
    display: block;
    transition: 1s background-color, 1s box-shadow, 1s color, 2s box-shadow;
    color: white;

    &:before {
      content: "";
      height: 1rem;
      display: block;
      opacity: 0;
      transition: 1s opacity;
    }

    &.active {
      background-color: rgba(white, 0.9);
      color: black;
      border-radius: 0.25vw;
      box-shadow: 0 8px 8px -4px rgba(yellow, 0.4);

      &:before {
        content: "You're up:";
        opacity: 1;
      }
    }
  }
</style>
