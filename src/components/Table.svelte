<script>
  import { onMount } from "svelte";
  import Icon from "./Icons.svelte";

  // export let dataset
  export let filteredData

  // export let states
  function handleClick(e) {
    const extraContent = e.target.parentNode.nextElementSibling
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

  let sortBy = {col: 'activity', ascending: false}

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
		
    // Sort by activity title
    if (column == 'activity') {
      return filteredData = filteredData.sort((a, b) => {
        if (a.activity.title < b.activity.title) {
          return -1 * sortModifier
        } else if (a.activity.title > b.activity.title) {
          return 1 * sortModifier
        } else {
          return 0
        }
      })
    }

    let sort = (a, b) => 
        (a[column] < b[column]) 
        ? -1 * sortModifier 
        : (a[column] > b[column]) 
        ? 1 * sortModifier 
        : 0;
		
    console.log(filteredData)
    filteredData = filteredData.sort(sort);
	}

  onMount(() => {
    sort('activity')
  })

</script>

<div>
  <div class="table__container table__container--sticky">
    <table class="table">
      <thead>
        <tr class="table__header-row">
          {#each headerNames as name}
            <th class="table__cell--header" scope="col" on:click={ sort( name ) }>{name}</th>
          {/each}
        </tr>
      </thead>
    </table>
  </div>
  <div class="table__container">
    <table class="table__body">
      <tbody>
        {#each filteredData as rows}
          <tr on:click={(e) => handleClick(e)}>
            <td class="table__body__cell"
              ><Icon
                name="Icon-down"
                width={"1rem"}
                height={"1rem"}
                class="icon"
              />{rows.activity.title}</td
            >
            <td class="table__body__cell">{rows.state}</td>
            <td class="table__body__cell">{rows.policy_goals}</td>
            <td class="table__body__cell">{rows.authority}</td>
            <td class="table__body__cell">{rows.type_of_resource}</td>
            <td class="table__body__cell">
              {#each rows.tags as tag}
                <Icon
                  name="icon {tag}"
                  class="icon__tags"
                />
              {/each}
            </td>
          </tr>
          <tr class="extra-content hide">
            <td class="table__body__cell" colspan="6">
              <div class="extra-content__container">
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
  </div>
</div>


<style lang="scss">
  @use "../scss/components/table";
</style>
