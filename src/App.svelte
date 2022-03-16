<script>
  import { onMount } from 'svelte'
  import { fetchData, getData } from './data'
  import Table from './components/Table.svelte'

  const dataset =  {}
  async function loadData() {
    let res = await getData()
    return res
  }

  onMount( async () => {
    const res = await getData()
    dataset["data"] = [...res.data]
    dataset["originalData"] = [...res.data]
    dataset["titles"] = [...res.data.titles]
    dataset["states"] = [...res.data.states]
    // console.log(res)
  })

  const filterBy = (e) => {
    let filter = e.target.value
    console.log(filter)
    console.log(dataset.originalData)
    const result = dataset.originalData.filter( el => el.state.includes( filter ) )
    console.log(result)
    dataset.data = [...result]
  }
</script>

<main>
	<div>
    <h1>Hello World!</h1>

    <Table
      dataset={dataset}
      selected={filterBy}
    />
  </div>  
</main>

<style lang='scss' global>
  // @import './scss/layout/_base.scss';
  @use './scss/main.scss';
</style>
