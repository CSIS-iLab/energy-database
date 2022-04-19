<script>
  export let searchText
</script>

<label for="search" aria-hidden="true" hidden>Search</label>
<input type="search" name="search" id="search" placeholder="Search..." bind:value={searchText}>

<style lang="scss">
  @use "../scss/components/search";
</style>