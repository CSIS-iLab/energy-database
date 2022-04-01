
<script>
  import Select from "./Select.svelte"
  export let selectedState
  export let selectedResourceType
  export let selectedAuthority
  export let selectedTags
  export let selectOptions
  export let selectName

  // let selectedValue = ''

</script>

{#if selectName === 'State'}
  <!-- <Select name='State' options={selectOptions} bind:selectedValue />
  <p>{selectedValue}</p>

  <Select name={selectName} {...selectOptions} bind:selectedValue /> -->

<label for="{selectName}-select">{selectName}</label>
<select
  name="{selectName}"
  bind:value="{selectedState}"
>
    <option value="">Select a {selectName}</option>
    {#each selectOptions as option}
      <option value="{option.value}">{option.name}</option>
    {/each}
    
</select>
{/if}

{#if selectName === 'Resources'}
  <label for="{selectName}-select">{selectName}</label>
  <select
    name="{selectName}"
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
    bind:value="{selectedAuthority}"
  >
  <option value="">Select a {selectName}</option>
  {#each selectOptions as option}
    <option value="{option}">{option}</option>
  {/each}
  </select>
{/if}

{#if selectName === 'Tags'}
  <label for="{selectName}-select">{selectName}</label>
  <select
    name="{selectName}"
    bind:value="{selectedTags}"
  >
  <option value="">Select a {selectName}</option>
  {#each selectOptions as option}
    <option value="{option}">{option}</option>
  {/each}
  </select>
{/if}


<style lang='scss'>

</style>
