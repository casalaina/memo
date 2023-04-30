<script>
  import { onMount } from "svelte";
  import Notifications from "svelte-notifications";
  import { fade } from "svelte/transition";

  // global vars
  import "~/styles/globals.scss";

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <Notifications>
    <div transition:fade>
      <slot />
    </div>
  </Notifications>
{/if}
