<script>
  export let data;
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Game from "./Game.svelte";
  import Sidebar from "./Sidebar.svelte";
  import Intro from "./Intro.svelte";

  import spaceBg from "../assets/space-bg.jpg";
  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <main style={`background-image:url(${spaceBg})`} transition:fade>
    <div id="inner">
      <Intro />
      <Sidebar />
      <Game {data} />
    </div>
  </main>
{/if}

<style lang="scss">
  @import "../src/styles/vars";

  :global(*) {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(body),
  :global(#svelte),
  :global(main) {
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-size: clamp(0.8rem, 0.8vw, 1.5rem);
    background-color: #000;
  }
  main {
    background-size: cover;
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    padding: 2vw;

    #inner {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      align-items: stretch;
      align-content: stretch;

      @media #{$md} {
        flex-direction: row;
      }
    }
  }
</style>
