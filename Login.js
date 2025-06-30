//LOGIN FORM
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredPassword = document.getElementById('password').value;
    //Sets password to "Shopping"
    if (enteredPassword === 'Shopping') {
        window.location.href = 'Home.html';
    } else {
        alert('Incorrect password. Please try again.'); //If incorrect then will tell user try again and make them do it correctly to continue
    }
});



//Code for Word Counter and Displaying it on Webpage

document.addEventListener('DOMContentLoaded', function () {
    const wordCountContainer = document.getElementById('wordCountContainer');
    const wordCountElement = document.getElementById('wordCount');
    const bodyText = document.body.innerText || document.body.textContent; 
    const words = bodyText.trim().split(/\s+/).filter(Boolean).length;
    wordCountElement.textContent = 'Word Count: ' + words;
    wordCountContainer.appendChild(wordCountElement);
});

