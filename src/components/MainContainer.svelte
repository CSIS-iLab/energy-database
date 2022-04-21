<script>
  import Header from "./Header.svelte";
  import IntroContent from "./IntroContent.svelte";
  // import Test from "./Test.svelte";
  import Options from "./Options.svelte";
  import Search from "./Search.svelte";
  import Table from "./Table.svelte";
  import About from "./About.svelte";
  import Footer from "./Footer.svelte";
  export let dataset;
  let selectedState = "";
  let selectedResourceType = "";
  let selectedAuthority = "";
  let selectedTags = [];
  let searchText

  $: filteredData = () => {
    return dataset.data.filter(
      (row) => {
        const search = searchText ? searchText.toLowerCase() : "";
        const filteredActivity = searchText ? searchText : row.activity.title
        const filteredState = selectedState ? selectedState : row.state
        const filteredResource = selectedResourceType ? selectedResourceType : row.type_of_resource
        const filteredAuthority = selectedAuthority ? selectedAuthority : row.authority
        const filteredTags = selectedTags.length > 0 ? row.tags.some((tag) => selectedTags.includes(tag)) : row.tags
        

        return row.activity.title.toLowerCase().includes(filteredActivity.toLowerCase()) &&
          // row.state.toLowerCase().includes(filteredActivity.toLowerCase()) ||
          // row.type_of_resource.toLowerCase().includes(filteredActivity.toLowerCase()) ||
          // row.authority.toLowerCase().includes(filteredActivity.toLowerCase()) 
          // &&
          // row.state.toLowerCase().includes(search) ||
          row.state === filteredState &&
          row.type_of_resource === filteredResource &&
          row.authority === filteredAuthority &&
          filteredTags
      }
    )
  }
</script>

<div id="site-content">
  <Header />
  <div class="container">
    <IntroContent />
    <section class="table-container">
      <h2 class="table__subtitle">Explore Policy Goals</h2>
      <Options
      {dataset}
      bind:selectedAuthority
      bind:selectedResourceType
      bind:selectedState
      bind:selectedTags
      />
      
      <Search bind:searchText/>
      
      <Table filteredData={filteredData()} />
    </section>
    <About />
    <!-- <Test /> -->
  </div>
  <Footer />
</div>
    
<style lang="scss">
  @use "../scss/components/table-container";
</style>
