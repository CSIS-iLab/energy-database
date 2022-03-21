import * as d3Fetch from 'd3-fetch'

const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAWqEOfyQi5rqdsQ-ssGUe08fdB8AczK6_sUwf-deKITfbLlqSTYpOzO4yG5u_B5O68_tB595NjPDU/pub?output=csv"

const dataset = {}
const US_states = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FL": "Florida",
  "GA": "Georgia",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PA": "Pennsylvania",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
}

function formatData (array) {
  // console.log(array)
  const formattedData = array.map( (row, index) => {
    return {
      id: index,
      policy_goals: formatPolicyGoals(row),
      tags: formatTags(row),
      activity: formatActivity(row),
      state: row.state,
      authority: row.authority,
      type_of_resource: row.type_of_resource,
    }
  })
  // console.log(formattedData)
  return formattedData
}

export default function getData() {
  console.log('getdata')
  const dataPromise = d3Fetch.csv( URL )
    .then( res => {
      // console.log(res)
      const newData = formatData(res)
      newData['titles'] = ['Activity', 'Policy Goals', 'Tags', 'State', 'Authority', 'Type of Resource']
      dataset["data"] = newData
      return {...dataset}
    })
  return dataPromise
}

function formatPolicyGoals( row ) {
  const policy_goals = ['emissions_reduction', 'economic_development', 'resilience']
  const formattedPolicyGoals = []
  for ( const prop in row)
    if ( policy_goals.includes( prop ) && row[prop] )
      formattedPolicyGoals.push( prop )
  return formattedPolicyGoals
}

function formatTags( row ) {
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
  const formattedTags = []
  for ( const prop in row)
    if ( tags.includes( prop ) && row[prop] )
      formattedTags.push( prop )
  return formattedTags
}

function formatActivity( row ) {
  return {
    title: row.title,
    description: row.description,
    link: row.URL
  }
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
