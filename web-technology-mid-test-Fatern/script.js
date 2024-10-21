// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
let characterSet = "";
if (options.uppercase) characterSet += uppercase;
if (options.lowercase) characterSet += lowercase;
if (options.numbers) characterSet += numbers;
if (options.specialChars) characterSet += specialChars;

if (!characterSet) {
    alert("Masukan setidaknya 1 tipe entitas.");
    return;
    }

let password = "";
for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
password += characterSet[randomIndex];
    }

// TODO: Generate the password based on the selected criteria
    return password;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { generatePassword };
}
// TODO: Add event listener to the button to call generatePassword and display the output

// Enable "Copy to Clipboard" button only after password is generated

// BONUS: Implement the copy to clipboard functionality
