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
