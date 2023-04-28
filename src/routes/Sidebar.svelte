<script>
  import { scorePlayer1, scorePlayer2, twoPlayer } from "../$lib/stores.js";
  import logo from "../assets/memo-logo.svg";
  import seal from "../assets/memo-seal-color.svg";
</script>

<div id="sidebar">
  <div class="top">
    <img id="logo" src={logo} alt="NASA-style logo, spelling the word 'MEMO'" />
    <p id="test">Test your <span class="medium">memory</span> on these stunning space images, provided by NASA’s “Astronomy Photograph of the Day” archive.</p>
    <p>But work quick, your ability to commit these images to memory will decide if you get the job or not: on the next mission to the moon!</p>
  </div>
  <div class="bottom">
    <div id="score">
      <p>
        {#if !$twoPlayer}
          <strong>Total pairs found:</strong><br />
          {$scorePlayer1} / 10
        {:else}
          score: {$scorePlayer2}
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
  @import "../src/styles/vars";

  #sidebar {
    width: 100%;
    min-width: 200px;
    color: #fff;

    font-weight: 300;
    font-size: clamp(0.8rem, 0.8vw, 1.5rem);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    @media #{$md} {
      width: 15vw;
      padding: 1% 2vw 1% 0;
    }

    .medium {
      font-weight: 500;
    }
  }

  .top {
    #logo {
      margin-bottom: 15%;
    }
    p {
      display: none;
      max-width: 10rem;
      margin-bottom: 15%;
      @media #{$md} {
        display: block;
      }
    }
  }

  .bottom {
    #score {
      margin-bottom: 20%;
    }
    strong {
      margin-bottom: 2%;
      display: inline-block;
    }

    #seal {
      margin: 0% 5% -2% -2%;
    }

    #sealWrap {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
    }
  }
</style>
