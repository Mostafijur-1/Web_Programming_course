const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const passwordStrength = document.getElementById("password-strength");
const countrySelect = document.getElementById("country");
const regionSelect = document.getElementById("region");

// Country and Region Data
const countries = {
  Bangladesh: ["Dhaka", "Sylhet", "Chattagram"],
  Malyasia: ["Kualalampur", "Malacca", "Kucchi"],
  India: ["Delhi", "Mumbai", "Bangalore"],
};

// Populate Countries
for (let country in countries) {
  let option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countrySelect.appendChild(option);
}

// Populate Regions Based on Selected Country
countrySelect.addEventListener("change", function () {
  regionSelect.innerHTML = '<option value="">Select Region</option>';
  if (this.value) {
    countries[this.value].forEach((region) => {
      let option = document.createElement("option");
      option.value = region;
      option.textContent = region;
      regionSelect.appendChild(option);
    });
  }
});

// Form Validation Functions
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  formControl.querySelector("small").innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
  formControl.querySelector("small").innerText = "";
}

// Username Validation
username.addEventListener("input", function () {
  if (username.value.length < 8 || username.value.includes(" ")) {
    showError(
      username,
      "Username must be at least 8 characters and contain no spaces"
    );
  } else {
    showSuccess(username);
  }
});

// Email Validation
email.addEventListener("input", function () {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    showError(email, "Enter a valid email address");
  } else {
    showSuccess(email);
  }
});

// Password Strength Checker
password.addEventListener("input", function () {
  let score = 0;
  if (password.value.length >= 8) score++; // Minimum 8 characters
  if (password.value.match(/[a-z]/)) score++; // Lowercase letter
  if (password.value.match(/[A-Z]/)) score++; // Uppercase letter
  if (password.value.match(/[0-9]/)) score++; // Number
  if (password.value.match(/[^a-zA-Z0-9]/)) score++; // Special character

  // Show the strength indicator
  passwordStrength.style.visibility = "visible";

  if (score === 5) {
    passwordStrength.textContent = "Strong";
    passwordStrength.style.color = "green";
    password.style.border = "2px solid green";
  } else if (score >= 3) {
    passwordStrength.textContent = "Medium";
    passwordStrength.style.color = "orange";
    password.style.border = "2px solid orange";
  } else {
    passwordStrength.textContent = "Weak";
    passwordStrength.style.color = "red";
    password.style.border = "2px solid red";
  }
});

// Password Match Checker
password2.addEventListener("input", function () {
  if (password.value === password2.value && password.value !== "") {
    showSuccess(password2);
  } else {
    showError(password2, "Passwords do not match");
  }
});
