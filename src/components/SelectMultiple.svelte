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
  let spanHTML
  let isTagSelected = false
  let spanElement

  // handle the icon
  const chevronUp = '<svg class="iconUp" width="16" height="10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 15 14 0 0 15h28z" fill="#000"/></svg>';
  const chevronDown = '<svg class="iconDown" width="16" height="10" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m0 0 14 15L28 0H0z" fill="#000"/></svg>';
  let chevron = chevronDown;
  // let isListOpen = false;
  
  $: chevron = isListOpen ? chevronUp : chevronDown;

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
    selectedCounter = selectedValue.length - 1
    selectLabel = firstSelected
    isTagSelected = !isTagSelected
    spanElement = document.querySelector('#whatever')
    if (selectedCounter > 1) {
      selectedTagCounterText = '<span class="select__select-tag__counter>+' + selectedCounter + '</span>'
      spanElement = '+' +selectedCounter
    }
  } else {
    (selectedCounter > 1) ? selectedCounter-- : selectedCounter = 0
    selectLabel = `Select ${selectName}`
    if (isTagSelected) {
      tagsHTML.innerHTML = selectLabel
      spanElement = ''
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

<div class="select__select-wrapper" bind:this={spanHTML}>
  <div class="select__select-tags-container">
    <div
      class="select__select-tag"
      contenteditable="false"
      on:click={showOptions}
      bind:this={tagsHTML}
    ><span>Select {selectName}</span>
    </div>
    <span class="select__select-tag__counter">{(selectedCounter > 0) ? '+' + selectedCounter : ''}</span>
    <!-- <span><Icon /></span> -->
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
        <label class="checkbox__label" for={formatOption(option, "value")}>
          <span class="icon-container"><Icon
            name="icon {formatOption(option, "name")}"
            class="icon__select"
          /></span>
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
