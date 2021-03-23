// Run async-await.html file in live server

const getTodos = async () => {

  const usersResponse = await fetch('JSONS/users.json');
  if(usersResponse.status !== 200) {
    throw new Error('Could not fetch data!');
  }
  const userData = await usersResponse.json();
  const githubResponse = await fetch(`https://api.github.com/users/${userData[0].username}`)
  if(githubResponse.status !== 200) {
    throw new Error('Could not fetch data!');
  }
  const data = await githubResponse.json();
  return data;
};

getTodos()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));