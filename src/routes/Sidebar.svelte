<script>
  import { scorePlayer1, scorePlayer2 } from "../$lib/stores.js";
  let twoPlayer = false;
</script>

<div id="sidebar">
  score: {$scorePlayer1}
  {#if twoPlayer}
    score: {$scorePlayer2}
  {/if}
</div>

<style lang="scss">
  #sidebar {
    width: 20vw;
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
