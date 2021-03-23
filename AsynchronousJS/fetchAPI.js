// Run fetch-api.html file in live server

fetch('todos/vimarsh.json', {
  method: 'GET',
  headers: {'Content-type': 'application/json'}
})
.then((response) => {
  console.log('Resolved: ', response);
  return response.json();
})
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log('Rejected: ', err);
});