import * as d3Fetch from 'd3-fetch'

const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAWqEOfyQi5rqdsQ-ssGUe08fdB8AczK6_sUwf-deKITfbLlqSTYpOzO4yG5u_B5O68_tB595NjPDU/pub?output=csv"

const dataset = {
  columns: [],
  data: []
}
export function fetchData() {
  const dataPromise = d3Fetch.csv( URL )
  return dataPromise
}


function formatData (array) {
  // format policy_goals into an array of strings
  array = formatPolicyGoals(array)
  // format tags into an array of strings
  array = formatTags(array)
  // format activity with title, description and link
  array = formatActivity(array)
  return array
}

export function getData() {
  console.log('getdata')
  const dataPromise = d3Fetch.csv( URL )
  .then( data => {
    console.log(data)
    const newData = formatData(data)
    dataset.columns = data.columns
    dataset.data = newData
  })
}

// export default fetchData

function formatPolicyGoals(array) {
  const policy_goals = ['emissions_reduction', 'economic_development', 'resilience']
  array.forEach( el => {
    // console.log('title: ',el.title)
    const formattedPolicyGoals = []
    policy_goals.forEach( (policy, i) => {
      // console.log(policy)
      if (el[policy_goals[i]])
        formattedPolicyGoals.push(policy_goals[i])
        // console.log('is policy is: ',policy_goals[j])
    })
    el['policy_goals'] = formattedPolicyGoals
  })
  
  // clean array
  array.forEach(row => {
    policy_goals.forEach(policy => {
      delete row[policy]
    })
  })
  // const newArray = array.filter((item, i) => {
  //   if(i == 0) console.log(item)
  //   if (!item.emissions_reduction || !item.economic_development || !item.resilience) {
  //     // console.log('item: ',item)
  //     return true
  //   }
  //   delete
  // })
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
      if (el[tags[i]])
        formattedTags.push(tags[i])
    })
    el['tags'] = formattedTags
  })

  // clean array
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
      link: el.link
    }
    el['activity'] = formattedActivity
  })
  // clean array
  array.forEach(row => {
    delete row.title
    delete row.description
    delete row.link
  })
  return array
}
