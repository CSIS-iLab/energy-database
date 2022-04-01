<script>
  export let buttonAction = () => console.log('default button clicked')
</script>

<button on:click={buttonAction}>
  <slot>default</slot>
</button>

<style lang="scss">
  button {
    background-color: rgb(22, 102, 6);
    color: #fff;
    padding: 10px;
    border: none;
    font-size: 1.2rem;
    
    &:active,
    &:focus {
      background-color: rgb(22, 102, 6);
    }

    &:hover {
      background-color: #ccc;
    }
  }
</style>