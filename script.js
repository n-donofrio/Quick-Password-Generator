// Function to generate a random password
function generatePassword(length) 
{
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) 
  {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Get user input for password length
const desiredLength = parseInt(prompt("Enter desired password length:"));

// Generate and display the password
const newPassword = generatePassword(desiredLength);
console.log("Generated Password:", newPassword);
