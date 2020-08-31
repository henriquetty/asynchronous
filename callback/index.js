// function as argument aso known as, callback.

//simple example
function func(callback) {
  const value = 10;

  callback(value);
}

func((number) => {
  console.log(number);
});

//setTimeout

function timeout(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

timeout(5, 2, (sumCallback) => {
  console.log(sumCallback);
});
