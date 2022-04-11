<script>
  import Table from "./Table.svelte";
  import Options from "./Options.svelte";
  import OptionsSelect from "./OptionsSelect.svelte";

  export let dataset;
  let selectedState = "";
  let selectedResourceType = "";
  let selectedAuthority = "";
  let selectedTags = [];

  $: filteredData = () => {
    if (selectedState && selectedResourceType && selectedAuthority && selectedTags.length > 0 && selectedTags[0] !== "") {
      return dataset.data.filter(
        (row) =>
          row.state === selectedState &&
          row.type_of_resource === selectedResourceType &&
          row.authority === selectedAuthority &&
          row.tags.some((tag) => selectedTags.includes(tag))
      );
    } else if( selectedState && selectedResourceType && selectedTags.length > 0 && selectedTags[0] !== "") {
      return dataset.data.filter(
        (row) =>
          row.state === selectedState &&
          row.type_of_resource === selectedResourceType &&
          row.tags.some((tag) => selectedTags.includes(tag))
      )
    } else if (selectedState && selectedAuthority && selectedTags.length > 0 && selectedTags[0] !== "") {
      return dataset.data.filter(
        (row) =>
          row.state === selectedState &&
          row.authority === selectedAuthority &&
          row.tags.some((tag) => selectedTags.includes(tag))
      )
    } else if (selectedAuthority && selectedResourceType && selectedTags.length > 0 && selectedTags[0] !== "") {
      return dataset.data.filter(
        (row) =>
          row.authority === selectedAuthority &&
          row.type_of_resource === selectedResourceType &&
          row.tags.some((tag) => selectedTags.includes(tag))
      )
    } else if (selectedState && selectedResourceType) {
      return dataset.data.filter(
        (row) =>
          row.state === selectedState &&
          row.type_of_resource === selectedResourceType
      );
    } else if (selectedState && selectedAuthority) {
      return dataset.data.filter(
        (row) =>
          row.state === selectedState && row.authority === selectedAuthority
      );
    } else if (selectedState && selectedTags.length > 0 && selectedTags[0] !== "") {
      return dataset.data.filter(
        (row) =>
          row.state === selectedState &&
          row.tags.some((tag) => selectedTags.includes(tag))
      )
    } else if (selectedResourceType && selectedAuthority) {
      return dataset.data.filter(
        (row) =>
          row.type_of_resource === selectedResourceType &&
          row.authority === selectedAuthority
      );
    } else if (selectedResourceType && selectedTags.length > 0 && selectedTags[0] !== "") {
      return dataset.data.filter(
        (row) =>
          row.type_of_resource === selectedResourceType &&
          row.tags.some((tag) => selectedTags.includes(tag))
      )
    } else if (selectedAuthority && selectedTags.length > 0 && selectedTags[0] !== "") {
      return dataset.data.filter(
        (row) =>
          row.authority === selectedAuthority &&
          row.tags.some((tag) => selectedTags.includes(tag))
      )
    }  else if (selectedState) {
      return dataset.data.filter((row) => row.state === selectedState);
    } else if (selectedResourceType) {
      return dataset.data.filter(
        (row) => row.type_of_resource === selectedResourceType
      );
    } else if (selectedAuthority) {
      return dataset.data.filter((row) => row.authority === selectedAuthority);
    } else if (selectedTags.length > 0 && selectedTags[0] !== "") {
      console.log(dataset.data);
      console.log(selectedTags)
      return dataset.data.filter((row) =>
        selectedTags.every((tag) => row.tags.includes(tag))
      );
    } else {
      return dataset.data;
    }
  };
</script>

<!-- <Options
  {dataset}
  bind:selectedAuthority
  bind:selectedResourceType
  bind:selectedState
/> -->

<OptionsSelect
  {dataset}
  bind:selectedAuthority
  bind:selectedResourceType
  bind:selectedState
  bind:selectedTags
/>

<!-- TODO: Tags select must allow selecting multiple options -->
<Table filteredData={filteredData()} />

<style lang="scss">
  // @use "../scss/components/table.scss";
</style>
