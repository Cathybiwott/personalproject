fetch('https://dummyjson.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


const form = document.getElementById('complaint-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const complaint = document.getElementById('complaint').value;
  const anonymous = document.getElementById('anonymous').checked;

  if (!anonymous && (!name || !email)) {
    message.innerHTML = 'Please enter your name and email.';
    message.style.backgroundColor = '#f44336';
    return;
  }

  if (!complaint) {
    message.innerHTML = 'Please enter your complaint.';
    message.style.backgroundColor = '#f44336';
    return;
  }

  message.innerHTML = 'Complaint registered successfully.';
  message.style.backgroundColor = '#4CAF50';
});


