function sendData() {
  event.preventDefault();
  slider1_current = document.getElementById("slider1").value;

  // Send data to server
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: slider1_current,
    }),
  })
    .then((response) => {
      console.log("Response:", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
