<script>

export let id
export let text
export let ariaLabel
export let classes

</script>

<button id={id} class={classes} aria-label={ariaLabel} on:click>
  {text}
</button>

<style lang="scss">
  @use "../scss/components/button";
</style>
