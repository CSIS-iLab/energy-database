<script>
  import Select from "./Select.svelte";

  export let dataset;
  export let selectedState;
  export let selectedResourceType;
  export let selectedAuthority;
  // export let selectedTags;
  // export let selectOptions;
  // export let selectName;

  // // let selectedValue = ''
</script>

<div>
  <Select
    bind:selectedValue={selectedState}
    options={dataset.states}
    selectName="State"
  />

  <Select
    bind:selectedValue={selectedAuthority}
    options={dataset.authority}
    selectName="Authority"
  />

  <Select
    bind:selectedValue={selectedResourceType}
    options={dataset.resourceTypes}
    selectName="ResourceType"
  />

  <!-- <label for="{selectName}-select">{selectName}</label>
  <select name={selectName} bind:value={selectedState}>
    <option value="">Select a {selectName}</option>
    {#each selectOptions as option}
      <option value={option.value}>{option.name}</option>
    {/each}
  </select>

  <label for="{selectName}-select">{selectName}</label>
  <select name={selectName} bind:value={selectedResourceType}>
    <option value="">Select a {selectName}</option>
    {#each selectOptions as option}
      <option value={option}>{option}</option>
    {/each}
  </select>

  <label for="{selectName}-select">{selectName}</label>
  <select name={selectName} bind:value={selectedAuthority}>
    <option value="">Select a {selectName}</option>
    {#each selectOptions as option}
      <option value={option}>{option}</option>
    {/each}
  </select> -->

  <!-- <label for="{selectName}-select">{selectName}</label>
<select name={selectName} bind:value={selectedTags}>
  <option value="">Select a {selectName}</option>
  {#each selectOptions as option}
    <option value={option}>{option}</option>
  {/each}
</select> -->
</div>

<style lang="scss">
</style>
