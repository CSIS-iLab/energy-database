<script>
  import {clickOutside} from "../js/clickOutside.js";
  import Icon from "./Icons.svelte";

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
      const name = opt.name
      return name
    } else if (type === "value") {
      return opt.value;
    }
  };

  let showOptions = () => {
    if (!isListOpen) {
      optionsList.classList.toggle("hide");
      isListOpen = !isListOpen
    }
  }

  $: if (selectedValue.length > 0 && selectedValue !== "") {
    selectLabel = selectedValue
  } else {
    selectLabel = `Select ${selectName}`
  }

	let handleClickOutside = () => {
    if (isListOpen) {
      optionsList.classList.toggle("hide");
      isListOpen = !isListOpen
    }
	}

</script>

<div>
  <div
    class="select__select-tag"
    contenteditable="false"
    bind:innerHTML={selectLabel}
    on:click={showOptions}
  >Select {selectName}</div>
  <div class="select__tags-options hide" bind:this={optionsList}
    use:clickOutside on:click_outside={handleClickOutside}
  >
    {#each options as option}
      <div class="checkbox__container">
        <input
        id={formatOption(option, "value")}
        type="checkbox"
        name="tags"
        value={formatOption(option, "value")}
        bind:group={selectedValue}
        >
        <label for={formatOption(option, "value")}>
          <Icon
            name="icon {formatOption(option, "name")}"
            class="icon__select"
          />
          {formatOption(option, "name")}
        </label>
      </div>
    {/each}
  </div>
</div>


<!-- <select multiple name={selectName} bind:value={selectedValue}>
  <option value="">Select a {selectName}</option>
  {#each options as option}
    <option value={formatOption(option, "value")}>{formatOption(option, "name")}</option>
  {/each}
</select> -->

<style lang="scss">
  @use "../scss/components/select";
  @use "../scss/components/checkbox";
  @use "../scss/components/icon";
</style>
