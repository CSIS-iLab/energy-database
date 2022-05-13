<script>
  import { onMount } from "svelte";
  import tooltip from "../js/tooltip.js";
  import Icon from "./Icons.svelte";

  // export let dataset
  export let filteredData;
  export let row;
  let hide = 'hide'

  function handleClick(e) {
    let extraContent = undefined
    if (e.target.parentNode.classList.contains('uniqueClass')){
      extraContent = e.target.parentNode.nextElementSibling;
    } else {
      extraContent = e.target.parentNode.parentNode.nextElementSibling;
    }
    extraContent.classList.add('active');
    extraContent.classList.toggle("hide");
    (row.isOpen) ? row.isOpen = true : row.isOpen = !row.isOpen
  }

  const headerNames = [
    "Activity",
    "State",
    "Policy Goals",
    "Authority",
    "Type of Resource",
    "Tags",
  ];

  let sortBy = { col: "activity", ascending: false };

  $: sort = (column) => {
    column = column.toLowerCase().replace(/\s/g, "_"); // replace spaces using regex with undesrscore
    if (sortBy.col == column) {
      sortBy.ascending = !sortBy.ascending;
    } else {
      sortBy.col = column;
      sortBy.ascending = true;
    }

    // Modifier to sorting function for ascending or descending
    let sortModifier = sortBy.ascending ? 1 : -1;

    // Sort by activity title
    if (column == "activity") {
      return (filteredData = filteredData.sort((a, b) => {
        if (a.activity.title < b.activity.title) {
          return -1 * sortModifier;
        } else if (a.activity.title > b.activity.title) {
          return 1 * sortModifier;
        } else {
          return 0;
        }
      }));
    }

    let sort = (a, b) =>
      a[column] < b[column]
        ? -1 * sortModifier
        : a[column] > b[column]
        ? 1 * sortModifier
        : 0;

    console.log(filteredData);
    filteredData = filteredData.sort(sort);
  };

  onMount(() => {
    sort("activity");
    // Sync horizontal scroll of table header and table body
    // Inspired by https://codepen.io/Goweb/pen/rgrjWx
    const scrollSync = () => {
      const tableHeader = document.querySelector("#table-header");
      const tableBody = document.querySelector("#table-body");

      const bindSyncScrolling = (one, two) => {
        let echo = false;
        const sync = (elOne, elTwo) => () =>
          (echo = !echo) &&
          ((elOne.scrollTop = elTwo.scrollTop),
          (elOne.scrollLeft = elTwo.scrollLeft));
        two.onscroll = sync(one, two);
        one.onscroll = sync(two, one);
      };
      bindSyncScrolling(tableHeader, tableBody);
    };

    scrollSync();
  });

  function formatTooltip(text) {
    const test = `<span class='tooltip'>${text}</span>`
    return text
    return {
      content: test,
      allowHTML: true,
      placement: "top",
      theme: 'light',
    }
  }
</script>

<div class="table__wrapper">
  <div class="table__container table__container--sticky" id="table-header">
    <table class="table">
      <thead>
        <tr class="table__header-row">
          {#each headerNames as name}
            <th class="table__cell--header" scope="col">
              <div class="table__cell--header__container">
                <span>{name}</span>
                <div class="sort-icons-container" on:click={sort(name)}>
                  <button class="sort-icon sort-icon--inactive">▲</button>
                  <button class="sort-icon sort-icon--active">▼</button>
                </div>
              </div>
            </th>
          {/each}
        </tr>
      </thead>
    </table>
  </div>
  <div class="table__container" id="table-body">
    <table class="table table__body">
      <tbody>
        {#each filteredData as rows}
          <tr on:click={(e) => handleClick(e)} class="uniqueClass">
            <td class="table__body__cell"><span class="icon-container"><Icon
              name="Icon-down"
              class="icon"
              /></span>{rows.activity.title}</td>
            <td class="table__body__cell">{rows.state}</td>
            <td class="table__body__cell">
              <div class="table__body__cell__policy-goal-container">
                {#each rows.policy_goals as policyGoal}
                  <span class="table__body__cell__policy-goal table__body__cell__policy-goal--{policyGoal.toLowerCase()}">{policyGoal.split('_').join(' ')}</span>
                {/each}
              </div>
            </td>
            <td class="table__body__cell">{rows.authority}</td>
            <td class="table__body__cell">{rows.type_of_resource}</td>
            <td class="table__body__cell">
              {#each rows.tags as tag}
                <span class="icon-tag-container" use:tooltip={{theme: 'energy'}} aria-label={formatTooltip(tag)}><Icon name="icon {tag}" class="icon__tags"/></span>
              {/each}
            </td>
          </tr>
          <!-- <tr class="extra-content" class:hide class:unHide={!hide}> -->
          <tr class="extra-content hide">
            <td class="table__body__cell" colspan="6">
              <div class="extra-content__container">
                <div class="description">{rows.activity.description}</div>
                <div class="link">
                  <a
                    href={rows.activity.link}
                    target="_blank"
                    rel="noopener noreferrer">{rows.activity.link} <span class="icon-container"><Icon name="Icon-open-blank" class="icon"/></span></a
                  >
                </div>
                <!-- <div class="policy-goals">
                  <span class="policy-goals__title">Policy Goals:</span>
                  {rows.policy_goals}
                </div> -->
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
  @use '../scss/abstracts/' as *;
  @use "../scss/components/table";
  :global(.tippy-box[data-theme~='energy']) {
    @extend %text-style-ui-4;
    color: $color-text-gray-500;
    background-color: $color-background-white;
    padding: rem(6) rem(6) rem(8) rem(6);
    filter: drop-shadow(0px 1px 9px rgba(0, 0, 0, 0.06)) drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  }

  :global(
    .tippy-box[data-theme~='energy'][data-placement^='top'] > .tippy-arrow::before,
    .tippy-box[data-theme~='energy'][data-placement^='bottom'] > .tippy-arrow::before,
    .tippy-box[data-theme~='energy'][data-placement^='left'] > .tippy-arrow::before,
    .tippy-box[data-theme~='energy'][data-placement^='right'] > .tippy-arrow::before
  ){
    border-top-color: $color-background-white;
  }
</style>
