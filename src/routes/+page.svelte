<script>
  export let data;

  import Game from "~/components/Game";
  import Sidebar from "~/components/Sidebar";
  import Overlay from "~/components/Overlay";

  import spaceBg from "~/assets/space-bg.jpg";
</script>

<main style={`background-image:url(${spaceBg})`}>
  <div id="inner">
    <Overlay />
    <Sidebar />
    <Game {data} />
  </div>
</main>

<style lang="scss">
  @use "../src/styles/vars" as *;

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
      @include from(md) {
        flex-direction: row;
      }
    }
  }
</style>
