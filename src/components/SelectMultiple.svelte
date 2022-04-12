<script>
  export let selectName = "name";
  export let options = [];
  export let selectedValue = [];
  
  let isListOpen = false;
  let optionsList
  let selectLabel = `Select a ${selectName}`

  const formatOption = (opt, type) => {
    if (selectName !== "State") {
      return opt;
    } else if (type === "name") {
      return opt.name;
    } else if (type === "value") {
      return opt.value;
    }
  };

  let showOptions = () => {
    (isListOpen) ? optionsList.style.display = 'none' : optionsList.style.display = 'block'
    isListOpen = !isListOpen
  }

  $: if (selectedValue.length > 0 && selectedValue !== "") {
    selectLabel = selectedValue
  } else {
    selectLabel = `Select a ${selectName}`
  }
</script>

<div>Select {selectName}</div>
<div
  class="select__select-tag"
  contenteditable="false"
  bind:innerHTML={selectLabel}
  on:click={showOptions}
>Select {selectName}</div>
<div class="select__tags-options" bind:this={optionsList}>
  {#each options as option}
    <label for="{formatOption(option, "value")}">
    <input
      type="checkbox"
      name="tags"
      value="{formatOption(option, "value")}"
      bind:group={selectedValue}
      >
      {formatOption(option, "name")}</label>
  {/each}
</div>


<!-- <select multiple name={selectName} bind:value={selectedValue}>
  <option value="">Select a {selectName}</option>
  {#each options as option}
    <option value={formatOption(option, "value")}>{formatOption(option, "name")}</option>
  {/each}
</select> -->

<style lang="scss">
  @use "../scss/components/select";
</style>
