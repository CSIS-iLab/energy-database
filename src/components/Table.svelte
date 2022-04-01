<script>
import { element } from "svelte/internal";

  import Icon from "./Icons.svelte";

  // export let dataset
  export let filteredData

  // export let states
  function handleClick(e) {
    const extraContent = e.target.parentNode.nextElementSibling
    // console.log('currentRow',extraContent)
    extraContent.classList.toggle("hide")
  }

  const headerNames = [
    "Activity",
    "State",
    "Policy Goals",
    "Authority",
    "Type of Resource",
    "Tags",
  ]

  let sortBy = {col: 'activity', ascending: true}

	$: sort = (column) => {
    column = column.toLowerCase().replace(/\s/g, '_') // replace spaces using regex with undesrscore
		if (sortBy.col == column) {
			sortBy.ascending = !sortBy.ascending
		} else {
			sortBy.col = column
			sortBy.ascending = true
		}
		
		// Modifier to sorting function for ascending or descending
		let sortModifier = (sortBy.ascending) ? 1 : -1;
		
		let sort = (a, b) => 
			(a[column] < b[column]) 
			? -1 * sortModifier 
			: (a[column] > b[column]) 
			? 1 * sortModifier 
			: 0;
		
      filteredData = filteredData.sort(sort);
	}

</script>

<table class="table">
  <thead>
    <tr>
      {#each headerNames as name}
        <th scope="col" on:click={ sort( name ) }>{name}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each filteredData as rows}
      <tr on:click={(e) => handleClick(e)}>
        <td
          ><Icon
            name="icon-plus"
            width={"1rem"}
            height={"1rem"}
            class="icon"
          />{rows.activity.title}</td
        >
        <td>{rows.state}</td>
        <td>{rows.policy_goals}</td>
        <td>{rows.authority}</td>
        <td>{rows.type_of_resource}</td>
        <td>{rows.tags}</td>
      </tr>
      <tr class="extra-content hide">
        <td colspan="6">
          <div>
            <div class="description">{rows.activity.description}</div>
            <div class="link">
              <a
                href={rows.activity.link}
                target="_blank"
                rel="noopener noreferrer">{rows.activity.link}</a
              >
            </div>
            <div class="policy-goals">
              <span class="policy-goals__title">Policy Goals:</span>
              {rows.policy_goals}
            </div>
          </div>
        </td>
      </tr>
    {:else}
      <tr>
        <td colspan="6">No data found</td>
      </tr>
    {/each}
  </tbody>
</table>

<style lang="scss">
  @use "../scss/components/table.scss";
</style>
