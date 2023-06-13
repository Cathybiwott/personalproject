// Define the base URL of the API
const BASE_URL = "https://example.com/api";

// Define the function to register a complaint
function registerComplaint(event) {
  event.preventDefault();

  // Get the complaint data from the form
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  // Make a POST request to the API
  fetch(`${BASE_URL}/complaints`, {
    method: "POST",
    headers: {
      "Authorization": "Bearer <access_token>",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  })
    .then(response => {
      if (response.ok) {
        // The complaint was registered successfully
        document.getElementById("response").innerHTML = "Complaint registered successfully.";
      } else {
        // An error occurred
        throw new Error(response.status);
      }
    })
    .catch(error => {
      document.getElementById("response").innerHTML = `Error registering complaint: ${error.message}`;
    });
}

// Add an event listener to the form
document.getElementById("complaint-form").addEventListener("submit", registerComplaint);

