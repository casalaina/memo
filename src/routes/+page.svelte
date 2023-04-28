<script>
  export let data;
  import Game from "./Game.svelte";
  import Sidebar from "./Sidebar.svelte";

  import spaceBg from "../assets/space-bg.jpg";
</script>

<main style={`background-image:url(${spaceBg})`}>
  <Sidebar />
  <Game {data} />
</main>

<style lang="scss" global>
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
  }
  main {
    background-size: cover;
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    padding: 2vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    // @media #{$md} {
    //   padding: 2vw;
    //   flex-direction: row;
    // }
  }
</style>
