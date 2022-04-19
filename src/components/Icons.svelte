<script>
  export let name;
  // export let width = "2rem";
  // export let height = "2rem";
  export let focusable = false;
</script>

<svg class={$$props.class} {focusable}>
  <use href={`assets/static/icons.svg#${name}`} />
</svg>

<style lang='scss'>
  @use '../scss/components/icon.scss';
</style>
