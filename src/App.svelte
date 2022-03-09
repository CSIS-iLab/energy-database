<script>
  import { onMount } from 'svelte'
  import { fetchData, getData } from './data'
  import Table from './components/Table.svelte'

  const dataset =  {
    data: [],
    columns: []
  }

  function capitalizeWord(str) {
    return str.toLowerCase()
      .split(' ')
      .map(
        string => string[0]
        .toUpperCase() + string.slice(1)
      )
      .join(' ')
  }

  onMount( () => {
    getData()

    // temporary code to help me visualize: load the current table
    fetchData().then(res => {
      dataset.data = [...res]
      // remove '_' and add space and capitalize columns names
      let formattedColumns = res.columns.map(col => col.replaceAll('_',' ') )
      // dataset.columns = [...formattedColumns.map(col => capitalizeWord(col))]
      dataset.columns = [...res.columns]
    })
  })

</script>

<main>
	<div>
    Hello World!
    <Table dataset={dataset} />
</main>

<style lang='scss' global>
  @import './scss/layout/_base.scss';
</style>
