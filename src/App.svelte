<script>
  import { onMount } from "svelte";
  import getData from "./data";
  import MainContainer from "./components/MainContainer.svelte";

  let dataset = {};

  onMount(async () => {
    const res = await getData();
    dataset = res;
  });
</script>

<main>
  <div>
    {#if dataset.data && dataset.data.length > 0}
      <MainContainer {dataset} />
    {:else}
      <div class="loading-container">
        <div class="loading" />
      </div>
    {/if}
  </div>
</main>

<style lang="scss" global>
  @use "./scss/main.scss";
</style>
