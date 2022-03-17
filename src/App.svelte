<script>
  import { onMount } from 'svelte'
  import getData from './data'
  import Table from './components/Table.svelte'

  const dataset =  {}

  onMount( async () => {
    const res = await getData()
    dataset["data"] = [...res.data]
    dataset["originalData"] = [...res.data]
    dataset["titles"] = [...res.data.titles]
    dataset["states"] = [...res.data.states]
    dataset["resourceType"] = [...res.data.resourceType]
    dataset["authority"] = [...res.data.authority]
    // console.log(dataset)
  })

  const filterBy = (e) => {
    // console.log(e.target)
    const filter = e.target.value
    const key = e.target.attributes.key.value
    // console.log(filter)
    // console.log(key)
    const result = dataset.originalData.filter( el => el[key].includes( filter ) )
    // console.log(result)
    dataset.data = [...result]
  }
</script>

<main>
	<div>
    <h1>Energy Database | SPA</h1>

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
