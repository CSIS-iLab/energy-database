<script>
  import Table from "./Table.svelte";
  import Options from "./Options.svelte";


  export let dataset
  let selectedState = ''

  const headerNames = [
    "Activity",
    "State",
    "Policy Goals",
    "Authority",
    "Type of Resource",
    "Tags",
  ];

  $: filteredData = () => {
    return selectedState
      ? dataset.data.filter(el => el.state === selectedState)
      : dataset.data
  }

</script>

<Options
  selectOptions={dataset.states}
  bind:selectedState
  selectName="State"
  filterKey="state"
/>

<!-- TODO: remove this p tag -->
<p>selected state {selectedState ? selectedState : ''}</p>

<!-- TODO: Tags select must allow selecting multiple options -->

<Table
  filteredData={filteredData()}
  bind:selectedState
/>
<!-- <Options
  selectOptions={dataset.resourceTypes}
  {selectedState}
  selectName="Resource Type"
  filterKey="type_of_resource"
/>

<Options
  selectOptions={dataset.authority}
  {selectedState}
  selectName="Authority"
  filterKey="authority"
/> -->



<style lang="scss">
  @use "../scss/components/table.scss";
</style>
