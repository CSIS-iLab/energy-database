<script>
  import {clickOutside} from "../js/clickOutside.js";
  import Icon from "./Icons.svelte";

  export let selectName = "name";
  export let options = [];
  export let selectedValue = [];
  
  let isListOpen = false;
  let optionsList
  let selectLabel = `Select a ${selectName}`
  let selectTagCounter
  let selectedCounter = 0
  let selectedTagCounterText
  let testHTML
  // const testHTML = ''

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
    console.log(testHTML)
    const firstSelected = selectedValue[0]
    testHTML.innerHTML = firstSelected + '<span id="whatever" style="color: #0054A4" class="select__select-tag__counter"></span>'
    selectedCounter = selectedValue.length
    selectLabel = firstSelected
    if (selectedCounter > 1) {
      const spanElement = document.querySelector('#whatever')
      console.log('more than one')
      selectedTagCounterText = '<span class="select__select-tag__counter>+' + selectedCounter + '</span>'
      spanElement.innerHTML = '+' +selectedCounter
    }
  } else {
    (selectedCounter > 1) ? selectedCounter-- : selectedCounter
    selectLabel = `Select ${selectName}`
  }

	let handleClickOutside = () => {
    if (isListOpen) {
      optionsList.classList.toggle("hide");
      isListOpen = !isListOpen
    }
	}

</script>

<div class="select__select-wrapper">
  <div
    class="select__select-tag"
    contenteditable="true"
    on:click={showOptions}
    bind:this={testHTML}
  > Select {selectName}
  </div>
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
