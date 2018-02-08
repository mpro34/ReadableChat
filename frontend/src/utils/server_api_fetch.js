export const fetchCategories = () => fetch('http://localhost:3001/categories', {
  headers: {
    Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
  }})
// }).then(res => res.json())
//   .then(data => console.log(`output = ${JSON.stringify(data)}`))
//   .catch(err => console.log(`error occ = ${err}`))
