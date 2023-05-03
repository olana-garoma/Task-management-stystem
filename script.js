javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  const xhr = new XMLHttpRequest();

  xhr.open('POST', '/login', true);
  xhr.setRequestHeader('Content-type', 'application/json');

  xhr.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      if (response.success) {
        window.location.href = '/tasks';
      }
    } else {
      console.error(this.statusText);
    }
  };

  xhr.onerror = function () {
    console.error(this.statusText);
  };

  xhr.send(JSON.stringify({ email, password }));
});

