const input = document.querySelector("cityInput");
const card = document.querySelector("foodFire_card");
const resturantForm = document.querySelector("foodFire-form");
let currentrestaurantIndex = 0;
let restaurants = [];
const apiKey =
  "YMfe72e_D7fFhKHS-Bvuc4FHHcbcp8nJSba9Uu7KpKOb8pxMrdM2elqfXgfbk-xF_Y24YsMlgyUiwST2vkaNep_tvzKOPJnqPTa_tGi7-48mcN-OlXqm3bnFYJWJZ3Yx";

async function getRestaurantData(city) {
  const apiUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  try {
    // trying api call
    const response = await fetch(apiUrl, {
      //fetching response
      method: "get",
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    console.log(response); //logging response

    if (!response.ok) {
      //if response not okay we will throw new error
      throw new Error("Could not retrieve data.");
    }

    const data = await response.json(); // return response in json format

    restaurants = data.businesses;

    displayRestauant(restaurants[0]);
  } catch (error) {
    displayError(error);
  }
}

function displayRestauant() {}
function displayError(message) {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = message;
  card.appendChild(errorMessage);
}

function approved() {}
