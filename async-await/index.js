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
