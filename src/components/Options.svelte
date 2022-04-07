<script>
  import SelectOri from "./Select.svelte";

  export let dataset;
  export let selectedState;
  export let selectedResourceType;
  export let selectedAuthority;
  // export let selectedTags;
</script>

<div>
  <SelectOri
    bind:selectedValue={selectedState}
    options={dataset.states}
    selectName="State"
  />

  <SelectOri
    bind:selectedValue={selectedAuthority}
    options={dataset.authority}
    selectName="Authority"
  />

  <SelectOri
    bind:selectedValue={selectedResourceType}
    options={dataset.resourceTypes}
    selectName="ResourceType"
  />
</div>

<style lang="scss">
</style>
