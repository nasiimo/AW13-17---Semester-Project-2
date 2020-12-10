export default function displayMessage(messageType, message, targetElement) {
  const element = document.querySelector(targetElement);

  element.innerHTML = `<div class = "message, ${messageType}">${message}</div>`;
}

/* NEED TO DEFINE CSS CLASSES BEFORE USING THIS FUNCTION */
