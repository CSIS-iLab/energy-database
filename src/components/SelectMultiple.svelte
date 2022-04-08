<script>
  export let selectName = "name";
  export let options = [];
  export let selectedValue = [];
  
  const formatOption = (opt, type) => {
    if (selectName !== "State") {
      return opt;
    } else if (type === "name") {
      return opt.name;
    } else if (type === "value") {
      return opt.value;
    }
  };

  $: console.log(selectedValue)
</script>

<label for="{selectName}-select">{selectName}</label>
<select multiple name={selectName} bind:value={selectedValue}>
  <option value="">Select a {selectName}</option>
  {#each options as option}
    <option value={formatOption(option, "value")}>{formatOption(option, "name")}</option>
  {/each}
</select>

<style lang="scss">
  select {
    border: 0;
    background-color: transparent;
    border-bottom: 1px solid #D3D4D6;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover {
      border-bottom: 1px solid #1475DC;
      -webkit-appearance: #1475DC;
      -moz-appearance: #1475DC;
    }
  }
</style>
