document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Read form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const dob = document.getElementById('dob').value.trim();
  
    const output = document.getElementById('output');
  
    // Validation
    if (!firstName || !lastName || !email || !password || !dob) {
      output.innerHTML = `<div class="alert alert-danger">❌ Registration failed: All fields are required.</div>`;
      return;
    }
  
    if (!(password.includes('!') || password.includes('?'))) {
      output.innerHTML = `<div class="alert alert-danger">❌ Registration failed: Password must contain "!" or "?".</div>`;
      return;
    }
  
    // Create user object
    const user = {
      firstName,
      lastName,
      email,
      password: '*'.repeat(password.length),
      dob
    };
  
    // Success output
    output.innerHTML = `
      <div class="alert alert-success">
        Registration Successful! <br><br>
        <strong>First Name:</strong> ${user.firstName} <br>
        <strong>Last Name:</strong> ${user.lastName} <br>
        <strong>Email:</strong> ${user.email} <br>
        <strong>Password:</strong> ${user.password} <br>
        <strong>Date of Birth:</strong> ${user.dob}
      </div>
    `;
  });
  