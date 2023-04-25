<script>
  export let data;
  import { scorePlayer1, scorePlayer2, selected1, selected2 } from "../$lib/stores.js";

  import Grid from "./Grid.svelte";
  import Sidebar from "./Sidebar.svelte";

  import spaceBg from "../assets/space-bg.jpg";

  // duplicate all the array items
  data.content = data.content.flatMap((i) => [i, i]);

  // Randomize array in-place using Durstenfeld shuffle algorithm
  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  $: $selected2, evaluate();

  let evaluate = () => {
    // if they match, up score, hide elements, and reset store
    if ($selected1 === $selected2) {
      $scorePlayer1++;
      $selected1 = $selected2 = "";
    } else {
      // otherwise flip back over, reset store
      setTimeout(function () {
        console.log(`no match!`);
        Array.from(document.querySelectorAll(".card.selected")).forEach((el) => el.classList.remove("selected"));
        $selected1 = $selected2 = "";
      }, 1000);
    }
  };
  shuffleArray(data.content);
</script>

<main style={`background-image:url(${spaceBg})`}>
  <Sidebar />
  <Grid {data} />
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
