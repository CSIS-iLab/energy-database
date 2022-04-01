import * as d3Fetch from 'd3-fetch'

const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAWqEOfyQi5rqdsQ-ssGUe08fdB8AczK6_sUwf-deKITfbLlqSTYpOzO4yG5u_B5O68_tB595NjPDU/pub?output=csv"

const policyGoals = ['emissions_reduction', 'economic_development', 'resilience']
const tags = ['anticipating_climate_impacts', 'comprehensive_planning_grid_modernization', 'data_transparency_or_visualization', 'electric_vehicles', 'energy_storage', 'environmental_justice', 'innovation_and_clusters', 'local-level_planning_or_support', 'microgrids', 'distributed_energy_resources_(DERs)', 'technology_or_system_standards', 'workforce_development']

export default function getData() {
  const dataPromise = d3Fetch.csv(URL).then(res => {
    // console.log(res)
    const data = res.map((row, index) => {
      return {
        id: index,
        policy_goals: policyGoals.filter((goalName) => row[goalName]),
        tags: tags.filter((tagName) => row[tagName]),
        activity: {
          title: row.title,
          description: row.description,
          link: row.URL
        },
        state: row.state,
        // state: row.state_abbr,
        state_name: row.state_name,
        authority: row.authority,
        type_of_resource: row.type_of_resource,
      }
    })

    const authority = formatAuthority(data)

    const resourceTypes = formatResourceType(data)

    const states = formatStates(data)

    return {
      data: data,
      states: states,
      tags: tags,
      authority: authority,
      resourceTypes: resourceTypes,
    }
  })
  return dataPromise
}

function formatAuthority(array) {
  return [...new Set(array.map(el => el.authority))]
}

function formatResourceType(array) {
  return [...new Set(array.map(el => el.type_of_resource))]
}

function formatStates(row) {
  // console.log(row)
  // console.log([...new Set(row.map(r => r.state))])
  return [...new Set(row.map(r => r.state))]
    .map(state => {
      return {
        name: row.find(r => r.state === state).state_name,
        value: row.find(r => r.state === state).state,
      }
    })
}

// const dataset = {}
// let tags = []
// let policy_goals = []

// export default function getData() {
//   console.log('getdata')
//   const dataPromise = d3Fetch.csv(URL)
//     .then(res => {
//       console.log(res)
//       const newData = formatData(res)
//       console.log(newData)
//       newData["titles"] = formatColumnTitles(res[0])
//       newData["states"] = formatStates(res)
//       newData["resourceType"] = formatResourceType(res)
//       newData["authority"] = formatAuthority(res)
//       dataset["data"] = newData
//       return { ...dataset }
//     })
// return dataPromise
// }

// function formatData(array) {
//   const formattedData = array.map((row, index) => {
//     return {
//       id: index,
//       policy_goals: formatPolicyGoals(row, index),
//       tags: formatTags(row, index),
//       activity: formatActivity(row),
//       state: row.state_abbr,
//       state_name: row.state_name,
//       authority: row.authority,
//       type_of_resource: row.type_of_resource,
//     }
//   })
//   // console.log( formattedData )
//   return formattedData
// }

// function formatPolicyGoals(row, i) {
//   // const policy_goals = ['emissions_reduction', 'economic_development', 'resilience']
//   if (i == 0) {
//     policy_goals = row.policy_goals.split(', ')
//   }

//   const formattedPolicyGoals = []
//   for (const prop in row)
//     if (policy_goals.includes(prop) && row[prop])
//       formattedPolicyGoals.push(prop)
//   return formattedPolicyGoals
// }

// function formatTags(row, i) {
//   if (i == 0) {
//     tags = row.tags.split(', ')
//   }

//   const formattedTags = []
//   for (const prop in row)
//     if (tags.includes(prop) && row[prop])
//       formattedTags.push(prop)
//   return formattedTags
// }

// function formatActivity(row) {
//   return {
//     title: row.title,
//     description: row.description,
//     link: row.URL
//   }
// }

// function formatColumnTitles(row) {
//   return row.column_titles.split(', ')
// }

// function formatResourceType(array) {
//   return [...new Set(array.map(el => el.type_of_resource))]
// }

// function formatAuthority(array) {
//   return [...new Set(array.map(el => el.authority))]
// }
