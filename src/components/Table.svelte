<script>
  export let dataset;
</script>

<table class="table">
  <thead>
    <tr>
      {#each dataset.columns as column }
        <td>{column}</td>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each dataset.data as rows}
      <tr>
        {#each Object.entries(rows) as [key, value]}
          <!-- <td>{`${key} : ${value}`}</td> -->
          <td>{value}</td>
        {/each}
      </tr>
    {/each}  
  </tbody>
</table>

<style lang='scss'>
  @use '../scss/components/table.scss';
</style>