<!--
  This file is to test the Svelte Select component
  site: https://github.com/rob-balfre/svelte-select
-->
<script>
  import Select from 'svelte-select'
  import Icon from './Icons.svelte'
  
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

<div class="themed icon">
  <Select
    containerClasses="myclass"
    inputStyles="box-sizing: border-box; border-bottom: 1px solid #D3D4D6;"
    {optionIdentifier} labelIdentifier={'name'} items={dataset.states}
    placeholder="Select a State"
    on:select={(event) => handleSelect(event, 'State')}
    on:clear={(event) => handleClear(event, 'State')}
    {Icon}
  ></Select>
  <Icon
    name="icon-caret-down"
    width={"1rem"}
    height={"1rem"}
    class="icon"
  />

  <Select
    containerClasses="myclass"
    inputStyles="box-sizing: border-box; border-bottom: 1px solid #D3D4D6;"
    showChevron={true}
    {optionIdentifier} {labelIdentifier} items={dataset.authority}
    placeholder="Select an Authority"
    on:select={(event) => handleSelect(event, 'Authority')}
    on:clear={(event) => handleClear(event, 'Authority')}
  ></Select>

  <Select
    containerClasses="myclass"
    inputStyles="box-sizing: border-box; border-bottom: 1px solid #D3D4D6;"
    showChevron={true}
    {optionIdentifier} {labelIdentifier} items={dataset.resourceTypes}
    placeholder="Select a Resource"
    on:select={(event) => handleSelect(event, 'ResourceType')}
    on:clear={(event) => handleClear(event, 'ResourceType')}
  ></Select>
  
  <Select
    containerClasses="myclass"
    inputStyles="box-sizing: border-box; border-bottom: 1px solid #D3D4D6;"
    showChevron={true}
  ></Select>
</div>

<style lang="scss">
  @use "../scss/components/select";
  :global(.myclass) {
    width: 200px;
  }

</style>
