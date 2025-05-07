function validateLogin() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    // Basic input validation
    if (usernameInput.value === "" || passwordInput.value === "") {
      alert("Please enter both username and password.");
      return false;
    }
  
    // Additional validation (e.g., length, format) can be added here
  
    // Send login request to server using AJAX or Fetch API
    const formData = new FormData();
    formData.append("username", usernameInput.value);
    formData.append("password", passwordInput.value);
  
    fetch("/login", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Successful login, redirect to dashboard or other protected area
        window.location.href = "/dashboard";
      } else {
        // Login failed, display error message
        response.json().then(data => {
          alert(data.error);
        });
      }
    })
    .catch(error => {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    });
  
    return false; // Prevent form submission
  }