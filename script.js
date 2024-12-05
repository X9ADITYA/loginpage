document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password) {
    alert(
      `Account has been created!\nEmail: ${email}\nPassword: ${"*".repeat(
        password.length
      )}`
    );
    // You can redirect the user or clear the form
    document.getElementById("loginForm").reset();
  } else {
    alert("Please fill out all fields.");
  }
});
