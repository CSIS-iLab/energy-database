
<script> 
  export let selectedState
  export let selectedResourceType
  export let selectedAuthority
  export let selectOptions
  export let selectName
  export let filterBy

</script>

{#if selectName === 'State'}
<label for="{selectName}-select">{selectName}</label>
<select
  name="{selectName}"
  id="{filterBy}-select"
  bind:value="{selectedState}"
>
    <option value="">Select a {selectName}</option>
    {#each selectOptions as option}
      <option value="{option.abbreviation}">{option.name}</option>
    {/each}
    
</select>
{/if}

{#if selectName === 'Resources'}
  <label for="{selectName}-select">{selectName}</label>
  <select
    name="{selectName}"
    id="{filterBy}-select"
    bind:value="{selectedResourceType}"
  >
  <option value="">Select a {selectName}</option>
  {#each selectOptions as option}
    <option value="{option}">{option}</option>
  {/each}
  </select>
{/if}

{#if selectName === 'Authority'}
  <label for="{selectName}-select">{selectName}</label>
  <select
    name="{selectName}"
    id="{filterBy}-select"
    bind:value="{selectedAuthority}"
  >
  <option value="">Select a {selectName}</option>
  {#each selectOptions as option}
    <option value="{option}">{option}</option>
  {/each}
  </select>
{/if}

<style lang='scss'>

</style>
