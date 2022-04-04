<script>
  export let selectName = "name";
  export let options = [];
  export let selectedValue;

  const formatOption = (opt, type) => {
    if (selectName !== "State") {
      return opt;
    } else if (type === "name") {
      return opt.name;
    } else if (type === "value") {
      return opt.value;
    }
  };
</script>

<label for="{selectName}-select">{selectName}</label>
<select name={selectName} bind:value={selectedValue}>
  <option value="">Select a {selectName}</option>
  {#each options as option}
    <option value={formatOption(option, "value")}
      >{formatOption(option, "name")}</option
    >
  {/each}
</select>

<style lang="scss">
</style>
