const form = document.getElementById('contact-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  fetch('/contact', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        alert('Error sending message. Please try again later.');
      }
    });
});