import * as json from './user.json'

// console.log(typeof json)

const table = document.querySelector('#table')

const table_user = Object.keys(json).map(item => {
  if(!json[item].id) return 
  // console.log(json[item])
  return `
    <tr>
      <td>${json[item].id}</td>
      <td>${json[item].first_name}</td>
      <td>${json[item].last_name}</td>
      <td>${json[item].email}</td>
      <td><img src="${json[item].avatar}" alt=""></td>
    </tr>
  `
}).join('')

table.insertAdjacentHTML('beforeend', table_user)
// console.log(table_user)