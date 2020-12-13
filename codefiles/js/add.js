import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/storage.js";

const form = document.querySelector("form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");

const button = document.querySelector(".createBtn");

form.addEventListener("submit", createProduct);

async function createProduct(event) {
  event.preventDefault();
  const url = baseUrl + "products";

  const data = JSON.stringify({
    title: name.value.trim(),
    price: price.value.trim(),
    description: description.value.trim(),
  });

  const token = getToken();
  console.log(token);

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);

    if (json.error) {
      displayMessage("warning", "Invalid credentials", ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}

/* import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";

const form = document.querySelector("form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const nameValue = name.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();

  console.log("priceValue", priceValue);

  if (
    nameValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0
  ) {
    return displayMessage(
      "warning",
      "Please supply proper values",
      ".message-container"
    );
  }

  addProduct(nameValue, priceValue, descriptionValue);
}

async function addProduct(name, price, description) {
  const url = baseUrl + "products";

  const data = JSON.stringify({
    title: name,
    price: price,
    description: description,
  });

  const token = getToken();

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      form.reset();
    }

    if (json.error) {
    }

    console.log(json);
  } catch (error) {
    console.log(error);
  }
} */
