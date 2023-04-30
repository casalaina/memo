<script>
  export let data;
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Notifications from "svelte-notifications";

  import Game from "./Game.svelte";
  import Sidebar from "./Sidebar.svelte";
  import Overlay from "./Overlay.svelte";

  import spaceBg from "../assets/space-bg.jpg";
  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <Notifications>
    <main style={`background-image:url(${spaceBg})`} transition:fade>
      <div id="inner">
        <Overlay />
        <Sidebar />
        <Game {data} />
      </div>
    </main>
  </Notifications>
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
    min-height: 100dvh;
    margin: 0;
    padding: 0;
    font-size: clamp(0.8rem, 0.8vw, 1.5rem);
    background-color: #000;
  }
  main {
    background-size: cover;
    width: 100vw;
    height: 100%;
    min-height: 100dvh;
    padding: 2vw;
    position: relative;

    #inner {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      align-items: stretch;
      align-content: stretch;
      @media #{$md} {
        flex-direction: row;
      }
    }
  }
</style>
