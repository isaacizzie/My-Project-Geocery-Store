
// <!-- JavaScript to handle input and deletion -->

    function appendNumber(number) {
        const phoneNumberInput = document.getElementById('phoneNumber');
        let currentValue = phoneNumberInput.value;

        // Check if the length is less than the allowed number of digits
        if (phoneNumberInput.value.length < 11) {
            phoneNumberInput.value += number; // Append clicked number
        } else {
            alert(`You can only enter up to 11 digits.`);
        }
    }

    function deleteNumber() {
        const phoneNumberInput = document.getElementById('phoneNumber');
        phoneNumberInput.value = phoneNumberInput.value.slice(0, -1); // Remove the last digit
    }

    // Prevent form submission if the phone number does not meet the rules
    document.getElementById('phoneNumberForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const phoneNumberInput = document.getElementById('phoneNumber');
        const value = phoneNumberInput.value;

        // If the number starts with 0, it must be 11 digits
        if (value.charAt(0) === '0') {
            if (value.length !== 11) {
                alert('Phone number must be 11 digits if it starts with 0.');
                return;
            }
        }

        // If the number starts with 7, 8, or 9, it must be 10 digits
        if (['7', '8', '9'].includes(value.charAt(0))) {
            if (value.length !== 10) {
                alert('Invalid Phone Number');
                return;
            }
        }

        // If the number doesn't start with 0, 7, 8, or 9, block submission
        if (!['0', '7', '8', '9'].includes(value.charAt(0))) {
            alert('Invalid Phone Number');
            return;
        }

        // Save phone number in localStorage and redirect to shop page
        localStorage.setItem('phoneNumber', value);
        window.location.href = 'home.html';
    });
