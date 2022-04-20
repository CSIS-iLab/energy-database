<script>
  export let name;
  export let focusable = false;
</script>

<svg class={$$props.class} {focusable}>
  <use href={`assets/static/icons.svg#${name}`} />
</svg>

<style lang='scss'>
  @use '../scss/components/icon.scss';
</style>
