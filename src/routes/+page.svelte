<script>
  export let data;
  import { scorePlayer1, scorePlayer2, selected1, selected2, paired } from "../$lib/stores.js";

  import Game from "./Game.svelte";
  import Sidebar from "./Sidebar.svelte";

  import spaceBg from "../assets/space-bg.jpg";
</script>

<main style={`background-image:url(${spaceBg})`}>
  <Sidebar />
  <Game {data} />
</main>

<style lang="scss">
  :global(body),
  :global(#svelte),
  :global(main) {
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  main {
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
