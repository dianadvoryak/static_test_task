import * as json from './user.json'

const table = document.querySelector('#table')

const table_user = Object.keys(json).map(item => {
  if(!json[item].id) return 
  
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


