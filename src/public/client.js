function sendData() {
  event.preventDefault();

  // Get the value of the slider
  const data = document.getElementById("slider").value;

  // Update the value of the slider
  document.getElementById("sliderLabel").innerHTML = data;

  // Send data to server
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  })
    .then((response) => {
      console.log("Response:", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
