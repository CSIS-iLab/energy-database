<!--
  This file is to test the Svelte Select component
  site: https://github.com/rob-balfre/svelte-select
-->
<script>
  import Select from 'svelte-select'

  const optionIdentifier = 'value';
  const labelIdentifier = 'label';

  function handleSelect(event, selectName) {
    if (selectName === 'State') {
      console.log(event.detail.value)
      selectedState = event.detail.value
    } else if (selectName === 'Authority') {
      selectedAuthority = event.detail.value
    } else {
      selectedResourceType = event.detail.value
    }
  }

  export function handleClear(event, selectName) {
    if (selectName === 'State') {
      selectedState = ''
    } else if (selectName === 'Authority') {
      selectedAuthority = ''
    } else {
      selectedResourceType = ''
    }
  }

  export let dataset;
  export let selectedState;
  export let selectedResourceType;
  export let selectedAuthority;
  // export let selectedTags;
</script>

<div>
  <Select
  {optionIdentifier} labelIdentifier={'name'} items={dataset.states}
  placeholder="Select a State"
  on:select={(event) => handleSelect(event, 'State')}
  on:clear={(event) => handleClear(event, 'State')}
  ></Select>
  
  <Select
  {optionIdentifier} {labelIdentifier} items={dataset.authority}
  placeholder="Select an Authority"
  on:select={(event) => handleSelect(event, 'Authority')}
  on:clear={(event) => handleClear(event, 'Authority')}
  ></Select>

  <Select
  {optionIdentifier} {labelIdentifier} items={dataset.resourceTypes}
  placeholder="Select an Authority"
  on:select={(event) => handleSelect(event, 'ResourceType')}
  on:clear={(event) => handleClear(event, 'ResourceType')}
  ></Select>
  
</div>

<style lang="scss">
</style>
