<script>
  import { onMount } from 'svelte'
  import { fetchData, getData } from './data'
  import Table from './components/Table.svelte'

  const dataset =  {}

  async function loadData() {
    let res = await getData()
    return res
  }

  onMount( () => {
    getData().then( res => {
      console.log(res.data)
      dataset["data"] = [...res.data]
      dataset["titles"] = [...res.data.titles]
    })
  })

</script>

<main>
	<div>
    <h1>Hello World!</h1>

    <Table dataset={dataset}/>
  </div>  
</main>

<style lang='scss' global>
  // @import './scss/layout/_base.scss';
  @use './scss/main.scss';
</style>
