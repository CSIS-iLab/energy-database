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
    // const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAWqEOfyQi5rqdsQ-ssGUe08fdB8AczK6_sUwf-deKITfbLlqSTYpOzO4yG5u_B5O68_tB595NjPDU/pub?output=csv"
    // const dataPromise = d3Fetch.csv( URL ).then( res => {
    //   dataset.data = [...res]
    //   console.log(dataset.data);
    // })
    getData()

    // temporary load the current table
    fetchData().then(res => {
      dataset.data = [...res]
      // remove '_' and add space and capitalize columns names
      let formattedColumns = res.columns.map(col => col.replaceAll('_',' ') )
      // dataset.columns = [...formattedColumns.map(col => capitalizeWord(col))]
      dataset.columns = [...res.columns]
      // console.log('Length:', res.length)
      // console.log('original:', res)
      // console.log('columns:', res.columns)
      // console.log(dataset.data[dataset.columns])
      // console.log(dataset)
    })
  })

</script>

<main>
	<div>
    Hello World!
    <!-- {#each dataset.data as data}
      <h1>{data.state}</h1>
    {/each} -->
    <Table dataset={dataset} />
</main>

<style lang='scss' global>
  @import './scss/layout/_base.scss';
</style>