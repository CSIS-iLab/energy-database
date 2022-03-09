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
  console.log(array)
  // format policy_goals into an array of strings
  array = formatPolicyGoals(array)
  // format tags into an array of strings
  formatTags(array)
  // format activity with title, description and link
  
  return array
}

export function getData() {
  console.log('getdata')
  const dataPromise = d3Fetch.csv( URL )
  .then( data => {
    dataset.columns = data.columns
    data = formatData(data)
    dataset.data = data
    console.log(dataset)
  })
  // console.log(dataPromisse)
  // console.log(dataset)
}

// export default fetchData

function formatPolicyGoals(array) {
  const policy_goals = ['emissions_reduction', 'economic_development', 'resilience']
  array.forEach( el => {
    // console.log('title: ',el.title)
    const formattedPolicyGoals = []
    policy_goals.forEach( (policy, j) => {
      // console.log(policy)
      if (el[policy_goals[j]])
        formattedPolicyGoals.push(policy_goals[j])
        // console.log('is policy is: ',policy_goals[j])
    })
    el['policy_goals'] = formattedPolicyGoals
  })
  return array
}

function formatTags(array) {
  console.log(array)
}