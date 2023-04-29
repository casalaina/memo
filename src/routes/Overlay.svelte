<script>
  import { onMount } from "svelte";
  import { backOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  import { player1, twoPlayerGame, gameOver, scorePlayer1, scorePlayer2, namePlayer1, namePlayer2 } from "../$lib/stores.js";

  import Logo from "../assets/Logo.svelte";
  import wizz from "../assets/wizz.svg";
  import seal from "../assets/memo-seal-bw.svg";
  import vid from "../assets/vid.mp4";

  let intro;
  let newGame = true;
  let selectNames = false;
  let visible = false;
  $: duration = !visible ? 200 : 1500;
  $: easing = backOut;
  $: optionsIn = { duration, easing, times: 1 };

  let spin = (node, options) => {
    const { times = 1 } = options;
    return {
      ...options,
      css(t) {
        const degrees = 360 * times;
        return `transform: scale(${t}) rotate(${t * degrees}deg);`;
      },
    };
  };

  const now = new Date();
  const date = now.toDateString().split(" ").slice(1).join(" ");

  let startGame = (twoPlayer) => {
    visible = false;
    newGame = false;
    $gameOver = false;
    intro.style.pointerEvents = "none";
    $scorePlayer1 = $scorePlayer2 = 0;
    $twoPlayerGame = false;
    $player1 = true;

    if (twoPlayer) {
      $twoPlayerGame = true;
      selectNames = false;
    }
  };

  onMount(() => {
    setTimeout(function () {
      visible = true;
    }, 500);
  });
</script>

{#if visible || $gameOver}
  <div id="intro" transition:fade bind:this={intro}>
    <div id="page" transition:spin={optionsIn}>
      <div id="logo"><Logo color={"#FF0000"} /></div>
      <div>Official Letterhead</div>
      {#if newGame}
        <div id="date" transition:fade>
          {date}
        </div>
        <div class="copy" transition:fade>
          <p>Cadet,</p>

          <p>We are very close to finalizing our decision on which of you will will travel on the Artemis II and which will keep your feet planted on earth. Considering you’ve all shown similar abilities with regards to low-g lunch-containment, high-pressure breath-holding, and deep-sea suit-wearing, you’ve made it a tough choice. Which leaves us with one final challenge.</p>

          <p>On that fateful day in 1969, when Neil Armstrong first touched down on the powdery surface of the moon, dude was tasked with remembering one simple line: “that’s one small step for <strong>a</strong> man, one giant leap for mankind.”</p>

          <p>And what did he do? <a href="https://en.wikipedia.org/wiki/Neil_Armstrong#First_Moon_walk" target="_blank">Botched it</a>. He dropped the “a,” leaving generations perplexed as to the difference between the collective “man” and “mankind.”</p>

          <p>We’re not going to let that happen again. To prove your memory skills, we ask you to complete this final challenge. Your ability to do so may land you on the moon. Or at least among the stars.</p>
        </div>
        <div id="signature">
          <p>Good luck,</p>
          <img src={wizz} alt="Signature from Sgt. 'Wizz" />
          <span class="caption">Sgt. Major Wilford “Wizz” Pennypacker, MEMO</span>
        </div>
        <div class="buttons">
          <button
            on:click={() => {
              startGame(false);
            }}
            tabindex="0">Start Single Game</button>
          <button
            on:click={() => {
              selectNames = true;
              newGame = false;
            }}>Start 2-Player Game</button>
        </div>
      {:else if selectNames}
        <div id="names" transition:fade>
          <div>
            <label for="player1"><strong>Name Cadet 1</strong></label>
            <input type="text" name="" id="player1" placeholder={$namePlayer1} bind:value={$namePlayer1} on:focus={(event) => event.target.select()} />
          </div>
          <div>
            <label for="player1"><strong>Name Cadet 1</strong></label>
            <input type="text" name="" id="player1" placeholder={$namePlayer2} bind:value={$namePlayer2} on:focus={(event) => event.target.select()} />
          </div>
          <button
            on:click={() => {
              startGame(true);
            }}>Start Game!</button>
        </div>
      {:else if $gameOver}
        <div>
          <h1 id="finalText">
            {#if $twoPlayerGame && $scorePlayer1 !== $scorePlayer2}
              🚀 We have liftoff, <span class="craftGradient"><span>{$scorePlayer1 > $scorePlayer2 ? $namePlayer1 : $namePlayer2}</span></span>!
            {:else if $twoPlayerGame && $scorePlayer1 == $scorePlayer2}
              <h1 class="final text">🤝 It's a tie!</h1>
            {:else}
              🚀 We have liftoff!
            {/if}
          </h1>
          <video src={vid} autoplay muted loop />
          <div class="copy">
            {#if $scorePlayer1 !== $scorePlayer2}
              <p>You did it, <strong>{$twoPlayerGame && $scorePlayer1 > $scorePlayer2 ? $namePlayer1 : $twoPlayerGame && $scorePlayer1 < $scorePlayer2 ? $namePlayer2 : "Cadet"}</strong>! Can't wait to hear a detailed report of all the amazing memories you've made in space. Good luck, and don't forget your toothbrush!</p>
            {:else if $scorePlayer1 == $scorePlayer2}
              <p>Amazing, you both did great. But there's only one seat left in the pod. Better try again!</p>
            {/if}
          </div>
        </div>
        <div class="buttons">
          <button
            on:click={() => {
              startGame(false);
            }}
            tabindex="0">Start Single Game</button>
          <button
            on:click={() => {
              startGame(true);
            }}>{!$twoPlayerGame ? "Start 2-Player Game" : "Have a Rematch!"}</button>
        </div>
      {/if}

      <div id="footer">
        <img id="seal" src={seal} alt="NASA-style 60s seal, spelling the word 'MEMO'" />
        <p><strong>Authorized</strong> for <br />MEMO personnel only.</p>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  @import "../src/styles/vars";

  #intro {
    width: 100vw;
    height: 100vh;
    background-color: rgba(black, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(0.7rem, 0.775vw, 1.25rem);
    z-index: 1;
  }

  #page {
    position: absolute;
    width: 90%;
    height: 90%;
    margin: 5%;
    padding: 2em 4em 1em 4em;
    background: linear-gradient(343.02deg, rgba(126, 126, 126, 0.17) 5.85%, rgba(255, 255, 241, 0) 66.62%), #ffffff;
    transform: rotate(-0.25deg);
    box-shadow: 0 8px 8px -4px black;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    @media #{$md} {
      width: 67vh;
      height: 90vh;
      padding: 5em 7.5em 2em 7.5em;
    }
  }

  #logo {
    margin-bottom: 0.5%;
  }

  #date {
    font-weight: 500;
    margin-top: 4em;
  }

  .copy {
    width: 100%;
    margin-top: 5em;
    p {
      margin-bottom: 1.5rem;
    }
  }
  #signature {
    .caption {
      display: block;
      margin-top: 0.5rem;
      font-size: clamp(0.5rem, 0.75vw, 1rem);
    }
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 4rem;
  }

  button {
    border: none;
    margin: 0;
    padding: 1rem 2rem;
    width: 100%;
    overflow: visible;
    background: transparent;
    border: 0.1rem solid #ff0000;
    color: #ff0000;
    font-weight: 600;
    flex-grow: 1;
    cursor: pointer;
    transition: 1s transform, 1s box-shadow;

    & + button {
      margin-left: 1rem;
    }

    &:hover,
    &:focus {
      transform: translate(0, -1px);
      box-shadow: 0 8px 8px -4px rgba(black, 0.2);
    }
  }

  #footer {
    display: none;
    margin-top: auto;
    width: 100%;
    font-size: clamp(0.5rem, 0.75vw, 1rem);
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    #seal {
      margin: 1rem 0.4rem 0 -0.2rem;
    }
  }

  a {
    color: black;
  }

  #finalText {
    margin: 4rem 0 2rem 0;
  }

  .copy strong,
  .craftGradient {
    // Good artists copy, great artists steal!
    color: rgb(119, 74, 211);
    background-image: linear-gradient(90deg, rgb(36, 73, 254) 0%, rgb(202, 75, 167) 100%);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }

  video {
    width: 100%;
  }

  #names {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    label {
      display: block;
      margin-top: 1rem;
    }

    input {
      display: block;
      margin: 0.25rem 0 1rem 0;
      width: 100%;
      padding: 0.25rem;
      &:focus::placeholder {
        color: transparent;
      }
    }
  }
</style>
