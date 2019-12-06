const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "~", "`", "?", ".", ";", ":", ">", "<", "/", ",",];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let user = [];
    let specialCharactersArray;
    let numbersArray;
    let upperCaseArray;
    let lowercaseArray;
    let randomNumber = 0;
    let passwordLength = 0;
    let endpassword = "";


    const generatePasswordStart = document.getElementById("genStart");
    generatePasswordStart.addEventListener("click", password);

    function password() {
        let passwordLength = prompt("How long would you like your password? Choose a number between 8 and 128.");

        if (passwordLength <= 7 || passwordLength >= 129) {
            passwordLength = prompt("Error! Try again. Choose a number for your password between 8 and 128 characters.");
        }

        const upperConfirm = confirm("Do you need any uppercase letters?");
        let lowerConfirm;
        if (upperConfirm) {
            lowerConfirm = confirm("Got it! Would you like any lowercase letters?");
    
        } else if (!upperConfirm) {
            lowerConfirm = confirm("Okay, would you like any lowercase characters?");
        }

        SpecialConfirm = confirm ("Would you like any special characters?");
        const numbersConfrim = confirm("Got it! Would you like any numbers in your password?");

        if (numbersConfrim || SpecialConfirm || upperConfirm || lowerConfirm) {
            alert("Magically creating your custom password now");
        } else {
            alert("You need to select at least one option to make the magic happen! Please ask for an uppercase, lowercase, special character, or number.");
            password();
        }
        
        finalpassword();

        function finalpassword() {
        if (SpecialConfirm) {
            specialCharactersArray = user.concat(specialCharacters)
            user = specialCharactersArray;
        };
        if (upperConfirm) {
            upperCaseArray = user.concat(uppercase);
            user = upperCaseArray;
        };
        if (lowerConfirm) {
            lowercaseArray = user.concat(lowercase);
            user = lowercaseArray;
        };
        if (numbersConfrim) {
            numbersArray = user.concat(numbers);
            user = numbersArray;
        };

        for (let i = 0; i < passwordLength; i++) {
            randomNumber = Math.floor(Math.random()*user.length);
            endpassword += user[randomNumber];
            document.getElementById("pass").value = endpassword;
        }

        document.getElementById("genStart").onclick = function() {password()};
    }
}

document.getElementById("copyToClipboard").addEventListener("click", ()=> {
    document.getElementById("pass").select();
    document.execCommand("copy");
})