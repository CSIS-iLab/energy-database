
<script> 
  export let selected
  export let selectOptions
</script>

<label for="pronouns-select">State</label>
<select name="pronouns" id="pronouns-select" on:change={selected}>
  <option value="">Select a State</option>
  {#if selectOptions}
    {#each selectOptions as val}
      <option value="{val}">{(val ? val : 'No Data' )}</option>
    {:else}
      <p>loading</p>
    {/each}
  {/if}
</select>

<style>
  label[aria-hidden="true"],
  [hidden] {
    display: none;
  }
</style>
