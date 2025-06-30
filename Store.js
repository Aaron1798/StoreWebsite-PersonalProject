//Code for Word Counter and Displaying it on Webpage

document.addEventListener('DOMContentLoaded', function () {
    const wordCountContainer = document.getElementById('wordCountContainer');
    const wordCountElement = document.getElementById('wordCount');
    const bodyText = document.body.innerText || document.body.textContent; 
    const words = bodyText.trim().split(/\s+/).filter(Boolean).length;
    wordCountElement.textContent = 'Word Count: ' + words;
    wordCountContainer.appendChild(wordCountElement);
});