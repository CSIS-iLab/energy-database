<script>
  import Table from "./Table.svelte"
  import Options from "./Options.svelte"

  export let dataset
  let selectedState = ''
  let selectedResourceType = ''
  let selectedAuthority = ''
  let selectedTags = []
  $: filteredData = () => {
    if (selectedState && selectedResourceType && selectedAuthority) {
      console.log(selectedState, selectedResourceType)
      return dataset.data.filter(
        (row) =>
          row.state === selectedState &&
          row.type_of_resource === selectedResourceType &&
          row.authority === selectedAuthority
      )
    } else if (selectedState && selectedResourceType) {
      return dataset.data.filter(
        (row) =>
          row.state === selectedState &&
          row.type_of_resource === selectedResourceType
      )
    } else if (selectedState && selectedAuthority) {
      return dataset.data.filter(
        (row) =>
          row.state === selectedState &&
          row.authority === selectedAuthority
      )
    } else if (selectedResourceType && selectedAuthority) {
      return dataset.data.filter(
        (row) =>
          row.type_of_resource === selectedResourceType &&
          row.authority === selectedAuthority
      )
    } else if (selectedState) {
      return dataset.data.filter((row) => row.state === selectedState)
    } else if (selectedResourceType) {
      return dataset.data.filter(
        (row) => row.type_of_resource === selectedResourceType
      )
    } else if (selectedAuthority) {
      return dataset.data.filter((row) => row.authority === selectedAuthority)
    } else {
      return dataset.data
    }
  }

</script>

<Options
  selectName="State"
  selectOptions={dataset.states}
  bind:selectedState
/>

<Options
  selectName="Resources"
  selectOptions={dataset.resourceTypes}
  bind:selectedResourceType
/>

<Options
  selectName="Authority"
  selectOptions={dataset.authority}
  bind:selectedAuthority
/>

<!-- <Options
  selectName="Tags"
  selectOptions={dataset.tags}
  bind:selectedTags
/> -->

<!-- TODO: Tags select must allow selecting multiple options -->
<Table
  filteredData={filteredData()}
  bind:selectedState
/>

<style lang="scss">
  // @use "../scss/components/table.scss";
</style>
