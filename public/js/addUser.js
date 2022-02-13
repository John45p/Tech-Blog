const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/addUser', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          console.log(response)
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }
      }
    };

    document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
