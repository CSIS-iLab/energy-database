<script>
  import Icon from './Icons.svelte';
  export let dataset

  function handleClick(e) {
    console.log('clicked', e )
    const extraContent = e.target.parentNode.lastElementChild
    console.log('currentRow', extraContent)
    extraContent.classList.toggle('hide')
    // const description = document.querySelector('#description')
    // e.target.classList.toggle('hide')
    // e.target.classList.toggle('description')
    // e.target.classList.add('description')
  }
</script>

<table class="table">
  <thead>
    <tr>
      {#if (dataset.titles)}
        <th scope="col">{dataset.titles[6]}</th>  <!-- activity -->
        <th scope="col">{dataset.titles[0]}</th>  <!--- state -->
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
          <div class="extra-content hide">
            <div class="description">{rows.activity.description}</div>
            <div class="link"><a href="{rows.activity.link}" target="_blank" rel="noopener noreferrer">{rows.activity.link}</a></div>
            <div class="policy-goals"><span class="policy-goals__title">Policy Goals:</span> {rows.policy_goals}</div>
          </div>
        </tr>
      {/each}
    </tbody>
  {/if}
</table>

<style lang='scss'>
  @use '../scss/components/table.scss';
</style>
