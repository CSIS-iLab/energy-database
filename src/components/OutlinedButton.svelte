<script>
  import DefaultButton from "./DefaultButton.svelte"
</script>

<span class="outlined">
  <DefaultButton buttonAction={ () => console.log('Outlined Btn Clicked!')}> Outlined Btn </DefaultButton>
</span>

<style lang="scss">
  .outlined :global(button) {
    background-color: transparent;
    border: 2px solid rgb(22, 102, 6);
    color: #333;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
</style>