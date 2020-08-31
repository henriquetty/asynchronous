// function as argument aso known as, callback.

function func(callback) {
  const value = 10;

  callback(value);
}

func((number) => {
  console.log(number);
});
