import * as d3Fetch from 'd3-fetch'
import { object_without_properties } from 'svelte/internal'

const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAWqEOfyQi5rqdsQ-ssGUe08fdB8AczK6_sUwf-deKITfbLlqSTYpOzO4yG5u_B5O68_tB595NjPDU/pub?output=csv"

const dataset = {
  // columns: [],
  // data: []
}

export function fetchData() {
  const dataPromise = d3Fetch.csv( URL )
  return dataPromise
}

function formatData (array) {
  // console.log(array)
  // add id
  array = addID(array)  
  // format policy_goals into an array of strings
  array = formatPolicyGoals(array)
  // format tags into an array of strings
  array = formatTags(array)
  // format activity with title, description and link
  array = formatActivity(array)
  // format columns titles
  array['titles'] = formatColumnsTitle(array)

  return array
}

export function getData() {
  console.log('getdata')
  const dataPromise = d3Fetch.csv( URL )
  // const data = Promise.all([dataPromise])
    .then( res => {
      // console.log(res)
      const newData = formatData(res)
      // dataset["columnsTitles"] = newData.titles
      dataset["data"] = newData
      return {...dataset}
    })
  return dataPromise
}

function addID(array) {
  array.forEach( (el, i) => el['id'] = i  )
  // console.log(array)
  return array
}

function formatPolicyGoals(array) {
  const policy_goals = ['emissions_reduction', 'economic_development', 'resilience']
  array.forEach( el => {
    const formattedPolicyGoals = []
    policy_goals.forEach( (policy, i) => {
      if (el[policy_goals[i]])
        formattedPolicyGoals.push(policy_goals[i])
    })
    el['policy_goals'] = formattedPolicyGoals
  })
  
  // clean array: it deletes the unnecessary keys because they are now under the policy_goals key
  array.forEach(row => {
    policy_goals.forEach(policy => {
      delete row[policy]
    })
  })
  return array
}

function formatTags(array) {
  const tags = [
    'anticipating_climate_impacts',
    'comprehensive_planning_grid_modernization',
    'data_transparency_or_visualization',
    'electric_vehicles',
    'energy_storage',
    'environmental_justice',
    'innovation_and_clusters',
    'local-level_planning_or_support',
    'microgrids',
    'distributed_energy_resources_(DERs)',
    'technology_or_system_standards',
    'workforce_development'
  ]
  array.forEach( el => {
    const formattedTags = []
    tags.forEach( (tag, i) => {
      if ( el[tags[i]] )
        formattedTags.push(tags[i])
    })
    el['tags'] = formattedTags
  })

  // clean array: it deletes the unnecessary keys because they are now under the tags key
  array.forEach(row => {
    tags.forEach(tag => {
      delete row[tag]
    })
  })
  return array
}

function formatActivity(array) {
  array.forEach( el => {
    const formattedActivity = {
      title: el.title,
      description: el.description,
      link: el.URL
    }
    el['activity'] = formattedActivity
  })
  // clean array: it deletes the unnecessary keys because they are now under the activity key
  array.forEach(row => {
    delete row.title
    delete row.description
    delete row.URL
  })
  return array
}

function formatColumnsTitle(array) {
  return Object.keys(array[0]).map( title => title.replaceAll('_', ' '))
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
