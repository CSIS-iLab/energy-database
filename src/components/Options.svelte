
<script> 
  export let selectedState
  export let selected
  export let selectOptions
  export let selectName
  export let filterKey

</script>

<label for="{selectName}-select">{selectName}</label>
<select
  name="{selectName}"
  key="{filterKey}"
  id="{filterKey}-select"
  bind:value="{selectedState}"
  on:change={selected}
>
  <option value="">Select a {selectName}</option>
  {#if selectOptions}
    {#if filterKey === 'state'}
      {#each selectOptions as option}
        <option value="{option.abbreviation}">{option.name}</option>
      {/each}
    {:else}
      {#each selectOptions as val}
        <option value="{val}">{(val ? val : 'No Data' )}</option>
      {/each}
    {/if}
  {/if}
</select>

<style lang='scss'>

</style>
