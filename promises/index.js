//promises example

function calc(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("You are not underage anymore");
      } else {
        reject("Underage");
      }
    }, 3000);
  });
}

calc(19)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise has been executed");
  });

//simple promise

//Api request (also see async-await for similar example)

function apiRequest(api) {
  return new Promise((resolve, reject) => {
    const axios = require("axios");
    axios
      .get(api)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

apiRequest("https://www.boredapi.com/api/activity").then((res) => {
  console.log(res.data);
});
