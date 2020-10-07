const axios = require("axios");

const apiUrl = "https://www.boredapi.com/api/activity";

async function requestApi() {
  try {
    let response = await axios.get(apiUrl);

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

requestApi();

const apiUrl2 = "https://nekos.life/api/v2/img/hug";

async function nekos() {
  try {
    return (response = await axios.get(apiUrl2));
  } catch (error) {
    return error;
  }
}

nekos().then((res) => {
  console.log(res.data);
});
