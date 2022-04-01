<script>
  export let selectName = 'name'
  export let options = []
  export let name
  export let value
  export let selectedValue
</script>

<label for="{selectName}-select">{selectName}</label>
<select
  name="{selectName}"
  bind:value="{selectedValue}"
>
  <option value="">Select a {selectName}</option>
  {#each options as option}
    <option value="{value}">{name}</option>
  {/each}
</select>

<style lang="scss">

</style>