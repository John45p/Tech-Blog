const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
 
    if (username && password) {
  
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log(response)
      if (response.ok) {
    console.log("yes")
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert('Failed to log-in');
        console.log("error");
       
      }
    }

  };

    
 document.querySelector('.login-form ').addEventListener('submit', loginFormHandler);

  

