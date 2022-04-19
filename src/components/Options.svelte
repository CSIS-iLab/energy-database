<!--
  This file is to test the Svelte Select component
  site: https://github.com/rob-balfre/svelte-select
-->
<script>
  import Select from 'svelte-select'
  import SelectMultiple from './SelectMultiple.svelte';
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
  export let selectedTags;

  // handle the icon
  const chevronUp = '<svg class="test" width="28" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 15 14 0 0 15h28z" fill="#000"/></svg>';
  const chevronDown = '<svg width="28" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m0 0 14 15L28 0H0z" fill="#000"/></svg>';
  let chevron = chevronDown;
  let isListOpen = false;
  
  $: chevron = isListOpen ? chevronUp : chevronDown;
</script>

<div class="themed icon">
  <div>
    <div class="label">State</div>
    <Select
      containerClasses="myclass"
      showChevron={true}
      indicatorSvg={chevron}
      bind:listOpen={isListOpen}
      listOffset={16}
      inputStyles="box-sizing: border-box; border-bottom: 1px solid #D3D4D6;"
      {optionIdentifier} labelIdentifier={'name'} items={dataset.states}
      placeholder="Select a State"
      on:select={(event) => handleSelect(event, 'State')}
      on:clear={(event) => handleClear(event, 'State')}
    ></Select>
  </div>

  <div>
    <div class="label">Authority</div>
    <Select
    containerClasses="myclass"
    inputStyles="box-sizing: border-box; border-bottom: 1px solid #D3D4D6;"
    showChevron={true}
    {optionIdentifier} {labelIdentifier} items={dataset.authority}
    placeholder="Select an Authority"
    on:select={(event) => handleSelect(event, 'Authority')}
    on:clear={(event) => handleClear(event, 'Authority')}
  ></Select>
  </div>

  <div>
    <div class="label">Resource Type</div>
    <Select
    containerClasses="myclass"
    inputStyles="box-sizing: border-box; border-bottom: 1px solid #D3D4D6;"
    showChevron={true}
    {optionIdentifier} {labelIdentifier} items={dataset.resourceTypes}
    placeholder="Select a Resource"
    on:select={(event) => handleSelect(event, 'ResourceType')}
    on:clear={(event) => handleClear(event, 'ResourceType')}
  ></Select>
  </div>
  
  <div>
    <div class="label">Tags</div>
    <SelectMultiple
    bind:selectedValue={selectedTags}
    options={dataset.tags}
    selectName="Tags"
  />
  </div>
</div>

<style lang="scss">
  @use "../scss/components/select";
  @use "../scss/components/label";
  :global(.myclass) {
    width: 200px;
  }

  :global(.selectContainer .item.active) {
    &::before {
      content:'L';
      font-family: arial;
      -ms-transform: scaleX(-1) rotate(-35deg); /* IE 9 */
      -webkit-transform: scaleX(-1) rotate(-35deg); /* Chrome, Safari, Opera */
      transform: scaleX(-1) rotate(-35deg);
      display:inline-block;
      // vertical-align: middle;
      line-height: 1rem;
      width: 1rem;
      height: 1rem;
      color: royalblue;
      margin-right: 0.3em;
      text-align: center;
      // position: relative;
      // left: 0;
      // top: -4px;
    }
  }
</style>
