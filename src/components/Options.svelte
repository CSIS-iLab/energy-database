<!--
  This file is to test the Svelte Select component
  site: https://github.com/rob-balfre/svelte-select
-->
<script>
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import Search from "./Search.svelte";
  import Select from 'svelte-select'
  import SelectMultiple from './SelectMultiple.svelte';
  import Icon from './Icons.svelte'
  
  export let dataset;
  export let filteredData;
  export let selectedState;
  export let selectedResourceType;
  export let selectedAuthority;
  export let selectedTags;
  export let selectedPolicyGoal;
  export let searchText = '';
  export let row;

  $: totalEntries =filteredData.length

  const policyGoalsTotal = dataset.data.length
  function getPGCount(policyGoal) {
    return dataset.data.filter(row => row.policy_goals.includes(policyGoal)).length
  }

  const optionIdentifier = 'value';
  const labelIdentifier = 'label';

  function handleSelect(event, selectName) {
    row.isOpen = !row.isOpen
    if (selectName === 'State') {
      // console.log(event.detail.value)
      selectedState = event.detail.value
    } else if (selectName === 'Authority') {
      selectedAuthority = event.detail.value
    } else if (selectName === 'Policy Goal') {
      selectedPolicyGoal = event.target.value
      // console.log(selectedPolicyGoal, event)
    }  else {
      selectedResourceType = event.detail.value
    }
  }

  export function handleClear(selectName) {
    row.isOpen = !row.isOpen
    if (selectName === 'State') {
      selectedState = ''
    } else if (selectName === 'Authority') {
      selectedAuthority = ''
    } else {
      selectedResourceType = ''
    }
  }

  // handle the icon
  const chevronUp = '<svg class="test" width="28" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 15 14 0 0 15h28z" fill="#000"/></svg>';
  const chevronDown = '<svg width="28" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m0 0 14 15L28 0H0z" fill="#000"/></svg>';
  let chevron = chevronDown;
  let isListOpen = false;
  
  $: chevron = isListOpen ? chevronUp : chevronDown;


    // const tableContainer = document.getElementById('table-body') 
    // const table = document.getElementsByClassName('table')[0]
    // const btnLeft = document.querySelector('#btn-scroll-left')

  function handleScrollLeft() {
    // let scrollLeft = document.querySelector("#table-header").scrollLeft
    // document.querySelector("#table-header").scrollLeft = scrollLeft - 150
    const tableContainer = document.getElementById('table-body') 
    // const table = document.getElementsByClassName('table')[0]
    const btnRight = document.querySelector('#btn-scroll-right')
    const btnLeft = document.querySelector('#btn-scroll-left')
    tableContainer.scrollLeft -= 100
    if (btnRight.classList.contains('inactive')) {
      btnRight.classList.remove('inactive')
    }
    if (tableContainer.scrollLeft === 0) {
      btnLeft.classList.add('inactive')
    }
  }

  function handleScrollRight() {
    // let scrollLeft = document.querySelector("#table-header").scrollLeft
    // document.querySelector("#table-header").scrollLeft = scrollLeft + 150

    const tableContainer = document.getElementById('table-body') 
    const table = document.getElementsByClassName('table')[0]
    const btnLeft = document.querySelector('#btn-scroll-left')
    const btnRight = document.querySelector('#btn-scroll-right')
    // console.log(tableContainer);
    tableContainer.scrollLeft += 100
    if (btnLeft.classList.contains('inactive')) {
      btnLeft.classList.remove('inactive')
    }
    if (Math.ceil(tableContainer.scrollLeft) + tableContainer.offsetWidth >= table.offsetWidth) {
      btnRight.classList.add('inactive')
    }
  }

</script>

<section class="options__container">
  <div class="options__header">
    <button class="options__btn--tab options__btn--tab--active" on:click={(event) => handleSelect(event, 'Policy Goal')}>All <span class="options__count">{policyGoalsTotal}</span></button>
    {#each dataset.policyGoals as policy}
      <button class="options__btn--tab" value="{policy}" on:click={(event) => handleSelect(event, 'Policy Goal')}>{policy.split('_').join(' ')} <span class="options__count">{getPGCount(policy)}</span></button>
    {/each}
  </div>
  <div class="selects">
    <div class="select-container">
      <div class="label">State</div>
      <Select
        showChevron={true}
        indicatorSvg={chevron}
        bind:listOpen={isListOpen}
        listOffset={16}
        inputStyles="box-sizing: border-box; border-bottom: 1px solid #D3D4D6;"
        {optionIdentifier} labelIdentifier={'name'} items={dataset.states}
        placeholder="Select a State"
        on:select={(event) => handleSelect(event, 'State')}
        on:clear={() => handleClear('State')}
      />
    </div>

    <div class="select-container">
      <div class="label">Authority</div>
      <Select
        inputStyles="box-sizing: border-box; border-bottom: 1px solid #D3D4D6;"
        showChevron={true}
        {optionIdentifier} {labelIdentifier} items={dataset.authority}
        placeholder="Select an Authority"
        on:select={(event) => handleSelect(event, 'Authority')}
        on:clear={() => handleClear('Authority')}
      />
    </div>

    <div class="select-container">
      <div class="label">Resource Type</div>
      <Select
        inputStyles="box-sizing: border-box; border-bottom: 1px solid #D3D4D6;"
        showChevron={true}
        {optionIdentifier} {labelIdentifier} items={dataset.resourceTypes}
        placeholder="Select a Resource"
        on:select={(event) => handleSelect(event, 'ResourceType')}
        on:clear={(event) => handleClear(event, 'ResourceType')}
      />
    </div>
    
    <div class="select-container">
      <div class="label">Tags</div>
      <SelectMultiple
        bind:selectedValue={selectedTags}
        options={dataset.tags}
        selectName="Tags"
      />
    </div>
  </div>
  <div>
</section>
<div class="options__container options__container--sticky">
  <section class="options__navigation">
    <!-- div class="table__container table__container--sticky" -->
    <Search bind:searchText/>
    <div>
      <span class="table__total-entries">Showing {totalEntries} entries</span>
      <Button id='btn-scroll-left' text="<" classes="btn btn--scroll btn--scroll--left inactive" ariaLabel="Scroll table to the left" on:click={handleScrollLeft} />
      <Button id='btn-scroll-right' text=">" classes="btn btn--scroll btn--scroll--right" ariaLabel="Scroll table to the right" on:click={handleScrollRight} />
    </div>
  </section>
</div>
<style lang="scss">
  @use "../scss/components/label";
  @use "../scss/components/select";
  @use "../scss/components/options";
  // @use "../scss/components/table";
  // :global(.myclass) {
  //   width: 200px;
  // }

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
