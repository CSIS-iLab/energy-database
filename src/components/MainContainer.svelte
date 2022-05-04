<script>
  import Header from "./Header.svelte";
  import IntroContent from "./IntroContent.svelte";
  // import Test from "./Test.svelte";
  import Options from "./Options.svelte";
  // import Search from "./Search.svelte";
  import Table from "./Table.svelte";
  import About from "./About.svelte";
  import Footer from "./Footer.svelte";

  export let dataset;
  let selectedState = "";
  let selectedResourceType = "";
  let selectedAuthority = "";
  let selectedTags = [];
  let selectedPolicyGoal = "";
  let searchText
  $: row = { isOpen: false };
  // $: rowIsOpen = false;

  $: filteredData = () => {
    return dataset.data.filter(
      (row) => {
        // const search = searchText ? searchText.toLowerCase() : "";
        const filteredActivity = searchText ? searchText : row.activity.title
        const filteredState = selectedState ? selectedState : row.state
        const filteredResource = selectedResourceType ? selectedResourceType : row.type_of_resource
        const filteredAuthority = selectedAuthority ? selectedAuthority : row.authority
        const filteredTags = selectedTags.length > 0 ? row.tags.some((tag) => selectedTags.includes(tag)) : row.tags
        const filteredPolicyGoal = selectedPolicyGoal ? row.policy_goals.some((policy) => selectedPolicyGoal.includes(policy)) : row.policy_goals
        // console.log(filteredPolicyGoal)
        return (row.activity.title.toLowerCase().includes(filteredActivity.toLowerCase()) ||
          row.state.toLowerCase().includes(filteredActivity.toLowerCase()) || 
          row.type_of_resource.toLowerCase().includes(filteredActivity.toLowerCase()) ||
          row.authority.toLowerCase().includes(filteredActivity.toLowerCase())) &&
          row.state === filteredState &&
          row.type_of_resource === filteredResource &&
          row.authority === filteredAuthority &&
          filteredPolicyGoal &&
          filteredTags
      }
    )
  }

  $: console.log(row.isOpen)

</script>

<div id="site-content">
  <Header />
  <div class="container">
    <IntroContent />
  </div>
  <section class="table-container">
    <section class="table-container__header">
      <h2 class="table-container__subtitle">Explore Policy Goals</h2>
    </section>
      <Options
        {dataset}
        filteredData={filteredData()}
        bind:row
        bind:selectedAuthority
        bind:selectedResourceType
        bind:selectedState
        bind:selectedTags
        bind:selectedPolicyGoal
        bind:searchText
      />
    
    <!-- <Search bind:searchText/> -->
    
    <Table filteredData={filteredData()} bind:row />
  </section>
  <About />
  <Footer />
</div>
    
<style lang="scss">
  @use "../scss/components/table-container";
</style>
