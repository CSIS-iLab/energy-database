<script>
  import { onMount } from "svelte";
  import getData from "./data";
  import Table from "./components/Table.svelte";

  let dataset = {};
  let filteredData = [];

  onMount(async () => {
    const res = await getData();
    dataset = res;
    console.log(dataset);
    filteredData = dataset.data;
  });

  const filterBy = (e) => {
    // console.log(e.target)
    const filter = e.target.value;
    const key = e.target.attributes.key.value;
    // console.log(filter)
    // console.log(key)
    const result = dataset.originalData.filter((el) =>
      el[key].includes(filter)
    );
    // console.log(result)
    dataset.data = [...result];
  };
</script>

<main>
  <div>
    <h1>Energy Database | SPA</h1>
    {#if dataset.data && dataset.data.length > 0}
      <Table {dataset} {filteredData} selected={filterBy} />
    {:else}
      <div class="loading-container">
        <div class="loading" />
      </div>
    {/if}
  </div>
</main>

<style lang="scss" global>
  // @import './scss/layout/_base.scss';
  @use "./scss/main.scss";
</style>
