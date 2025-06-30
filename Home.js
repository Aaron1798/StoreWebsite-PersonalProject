//This is the clickable buttons that redirect to pages

function Table_Buttons(url) {
    window.location.href = url;
}

document.getElementById('button1').addEventListener('click', function() {
    Table_Buttons('Discount.html');
});

document.getElementById('button2').addEventListener('click', function() {
    Table_Buttons('Store.html');
});

document.getElementById('button3').addEventListener('click', function() {
    Table_Buttons('History.html');
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