<script>
  import Icon from './Icons.svelte'
  import Select from './Select.svelte'
  export let dataset
  export let selected

  function handleClick(e) {
    // console.log('clicked', e )
    const extraContent = e.target.parentNode.lastElementChild
    // console.log('currentRow', extraContent)
    extraContent.classList.toggle('hide')
  }

</script>

<Select
  selectOptions={dataset.states}
  selected={selected}
  selectName="State"
  filterKey="state"
/>

<Select
  selectOptions={dataset.resourceType}
  selected={selected}
  selectName="Resource Type"
  filterKey="type_of_resource"
/>

<Select
  selectOptions={dataset.authority}
  selected={selected}
  selectName="Authority"
  filterKey="authority"
/>

<!-- TODO: Tags select must allow selecting multiple options -->
<!-- <Select
  selectOptions={dataset.states}
  selected={selected}
  selectName="Tags"
/> -->


{#if dataset}
  <table class="table">
    <thead>
      <tr>
        {#if (dataset.titles)}  
          <th scope="col">{dataset.titles[6]}</th>  <!-- activity -->
          <th scope="col">{dataset.titles[0]}</th>  <!-- state -->
          <th scope="col">{dataset.titles[4]}</th>  <!-- policy goals -->
          <th scope="col">{dataset.titles[1]}</th>  <!-- authority -->
          <th scope="col">{dataset.titles[2]}</th>  <!-- type of resource -->
          <th scope="col">{dataset.titles[5]}</th>  <!-- tags -->
        {/if}
      </tr>
    </thead>
    {#if dataset.data}
      <tbody>
        {#each dataset.data as rows (rows.id)}
          <tr on:click={(e)=>handleClick(e)}>
            <td><Icon name="icon-plus" width={'1rem'} height={'1rem'} class="icon"/>{rows.activity.title}</td>
            <td>{rows.state}</td>
            <td>{rows.policy_goals}</td>
            <td>{rows.authority}</td>
            <td>{rows.type_of_resource}</td>
            <td>{rows.tags}</td>
            <td colspan="6" class="extra-content hide">
              <div>
                <div class="description">{rows.activity.description}</div>
                <div class="link"><a href="{rows.activity.link}" target="_blank" rel="noopener noreferrer">{rows.activity.link}</a></div>
                <div class="policy-goals"><span class="policy-goals__title">Policy Goals:</span> {rows.policy_goals}</div>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    {/if}
  </table>
{:else}
  <p>loading...</p>
{/if}
<style lang='scss'>
  @use '../scss/components/table.scss';
</style>
