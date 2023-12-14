"use strict";

// Part 1

function calculateCircleArea(radius) {
  return (Math.PI*radius*radius).toFixed(2)
}

console.log(calculateCircleArea(5)); // 78.54

// ****************************************************
// Part 2

// use API: https://api.github.com/users/{username}

function getGitHubUser(username) {
  const response = fetch(`https://api.github.com/users/${username}`);
  response.then(res =>
    res.json()).then(data => {
        console.log(data)
    })

}

getGitHubUser("Mervat567");
// output: object contains user data

// using async/await

async function getGitHubUser2(username) {
  const response =await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  console.log(data.avatar_url);
}

getGitHubUser2("Mervat567");
// https://avatars.githubusercontent.com/u/105017866?v=4
