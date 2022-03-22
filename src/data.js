import * as d3Fetch from 'd3-fetch'

// const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAWqEOfyQi5rqdsQ-ssGUe08fdB8AczK6_sUwf-deKITfbLlqSTYpOzO4yG5u_B5O68_tB595NjPDU/pub?output=csv"

const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAWqEOfyQi5rqdsQ-ssGUe08fdB8AczK6_sUwf-deKITfbLlqSTYpOzO4yG5u_B5O68_tB595NjPDU/pub?gid=415333773&single=true&output=csv"
const dataset = {}
let tags = []
let policy_goals = []

export default function getData() {
  console.log( 'getdata' )
  const dataPromise = d3Fetch.csv( URL )
    .then( res => {
      // console.log( res )
      const newData = formatData( res )
      newData["titles"] = formatColumnTitles( res[0] )
      newData["states"] = formatStates( res )
      newData["resourceType"] = formatResourceType(res)
      newData["authority"] = formatAuthority(res)
      dataset["data"] = newData
      // console.log( dataset )
      return {...dataset}
    })
  return dataPromise
}

function formatData ( array ) {
  // console.log( array )
  const formattedData = array.map( ( row, index ) => {
    return {
      id: index,
      policy_goals: formatPolicyGoals( row, index ),
      tags: formatTags( row, index ),
      activity: formatActivity( row ),
      state: row.state_abbr,
      state_name: row.state_name,
      authority: row.authority,
      type_of_resource: row.type_of_resource,
    }
  })
  // console.log( formattedData )
  return formattedData
}

function formatPolicyGoals( row, i ) {
  // const policy_goals = ['emissions_reduction', 'economic_development', 'resilience']
  if ( i == 0 ) {
    policy_goals = row.policy_goals.split(', ')
  }
  
  const formattedPolicyGoals = []
  for ( const prop in row)
    if ( policy_goals.includes( prop ) && row[prop] )
      formattedPolicyGoals.push( prop )
  return formattedPolicyGoals
}

function formatTags( row, i ) {
  if (i == 0) {
    tags = row.tags.split(', ')
  }
  
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

function formatStates( row ) {
  return [...new Set(row.map( r => r.state_abbr))]
    .map( state => {
      return {
        name: row.find( r => r.state_abbr === state ).state_name,
        abbreviation: row.find( r => r.state_abbr === state ).state_abbr,
      }
    })
}

function formatColumnTitles( row ) {
  return row.column_titles.split(', ')
}

function formatResourceType(array) {
  return [...new Set (array.map(el => el.type_of_resource))]
}

function formatAuthority(array) {
  return [...new Set(array.map(el => el.authority))]

}
