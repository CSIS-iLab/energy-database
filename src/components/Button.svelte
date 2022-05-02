<script>
  import Icon from "./Icons.svelte";

  export let id
  export let text = "";
  export let ariaLabel
  export let classes
  // export let iconName = "";
</script>

<button id={id} class={classes} aria-label={ariaLabel} on:click>
  {#if text}
  {text}
  {/if}
</button>

<style lang="scss">
  @use "../scss/components/button";
</style>
