<script>
  import {clickOutside} from "../js/clickOutside.js";
  import Icon from "./Icons.svelte";

  export let selectName = "name";
  export let options = [];
  export let selectedValue = [];
  
  let isListOpen = false;
  let optionsList
  let selectLabel
  let selectedCounter = 0
  let selectedTagCounterText
  let tagsHTML
  let isTagSelected = false
  let spanElement

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
    const firstSelected = selectedValue[0]
    tagsHTML.innerHTML = firstSelected + '<span id="whatever" style="color: #0054A4" class="select__select-tag__counter"></span>'
    selectedCounter = selectedValue.length
    selectLabel = firstSelected
    isTagSelected = !isTagSelected
    spanElement = document.querySelector('#whatever')
    if (selectedCounter > 1) {
      selectedTagCounterText = '<span class="select__select-tag__counter>+' + selectedCounter + '</span>'
      spanElement.innerHTML = '+' +selectedCounter
    }
  } else {
    (selectedCounter > 1) ? selectedCounter-- : selectedCounter
    selectLabel = `Select ${selectName}`
    if (isTagSelected) {
      tagsHTML.innerHTML = selectLabel
      spanElement.innerHTML = ''
      isTagSelected = !isTagSelected
    }
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
    contenteditable="false"
    on:click={showOptions}
    bind:this={tagsHTML}
  > Select {selectName}
  </div>
  <div class="select__tags-options hide" bind:this={optionsList}
    use:clickOutside on:click_outside={handleClickOutside}
  >
    {#each options as option}
      <div class="checkbox__container">
        <input
        class="checkbox__check"
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

<style lang="scss">
  @use "../scss/components/select";
  @use "../scss/components/checkbox";
  @use "../scss/components/icon";
</style>
