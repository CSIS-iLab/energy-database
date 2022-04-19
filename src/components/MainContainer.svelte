<script>
  import Table from "./Table.svelte";
  import Options from "./Options.svelte";
  import Search from "./Search.svelte";
  import Header from "./Header.svelte";

  export let dataset;
  let selectedState = "";
  let selectedResourceType = "";
  let selectedAuthority = "";
  let selectedTags = [];
  let searchText;

  $: filteredData = () => {
    return dataset.data.filter(
      (row) => {
        const filteredActivity = searchText ? searchText : row.activity.title
        const filteredState = selectedState ? selectedState : row.state
        const filteredResource = selectedResourceType ? selectedResourceType : row.type_of_resource
        const filteredAuthority = selectedAuthority ? selectedAuthority : row.authority
        const filteredTags = selectedTags.length > 0 ? row.tags.some((tag) => selectedTags.includes(tag)) : row.tags
        

        return row.activity.title.toLowerCase().includes(filteredActivity.toLowerCase()) &&
          row.state === filteredState &&
          row.type_of_resource === filteredResource &&
          row.authority === filteredAuthority &&
          filteredTags
      }
    )
  }
</script>

<Header />

<Options
  {dataset}
  bind:selectedAuthority
  bind:selectedResourceType
  bind:selectedState
  bind:selectedTags
/>

<Search bind:searchText/>

<Table filteredData={filteredData()} />

<style lang="scss">
  
</style>
