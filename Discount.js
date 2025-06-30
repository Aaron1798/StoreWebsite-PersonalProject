//DISCOUNT GAME

// Selects DOM elements

const cards = document.querySelectorAll(".card"); // Selects all element class "card"
const modal = document.querySelector(".modal"); // Selects element class "modal"
const closeButton = document.querySelector(".close-button"); // Selects element class "close-button"
const claimDiscountButton = document.querySelector(".claim-discount"); // Selects element class "claim-discount"

// Variables to keep track of flipped cards and game state

let cardOne, cardTwo; // Variables to store the currently flipped cards
let disableDeck = false; // Flag to disable card flipping during certain conditions

// Event handler when user clicks on the card
function flipCard({ target: clickedCard }) {
  // this sees if current deck is working and if clicked card hasn't been flipped
  if (!disableDeck && !clickedCard.classList.contains("flip")) {
    clickedCard.classList.add("flip"); // Flips the card user clicked

    // If cardOne isn't set then will set it to the clicked card; otherwise, set cardTwo
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true; // Disable the deck to stop any further user interactions with deck or cards
    let cardOneText = cardOne.querySelector(".back-view span").textContent,
      cardTwoText = cardTwo.querySelector(".back-view span").textContent;
    matchCards(cardOneText, cardTwoText); // this checks to see if the 2 flipped cards match
  }
}

// This is the Function that checks to see if the two flipped cards are a match
function matchCards(text1, text2) {
  if (text1 === text2) {
    // If the cards are a match then congrats message with the discount
    setTimeout(() => {
      showMatchPopup(text1);
      resetGame(); // Reset the game
    }, 500);
  } else {
    // If cards don't match, flip them back after a delay
    setTimeout(() => {
      cardOne.classList.remove("flip");
      cardTwo.classList.remove("flip");
      cardOne = cardTwo = "";
      disableDeck = false; // Removes the disable and allows deck to fully function again
    }, 1000);
  }
}

// Function to show the congrats message to user when cards match
function showMatchPopup(matchedText) {
  modal.classList.add("show-modal");
  document.querySelector(".modal-heading").textContent = `Congratulations! You get: ${matchedText} OFF`;
  document.querySelector(".stats").textContent = "Claim your discount now!";
}

// Function to reset the game
function resetGame() {
  cardOne = cardTwo = "";
  disableDeck = false;
  cards.forEach((card) => {
    card.classList.remove("flip");
  });
  shuffleCard(); // Shuffles the cards for when the game is played again
}

// Function for shuffling the cards
function shuffleCard() {
  let arr = ["5%", "5%", "10%", "10%", "15%", "15%", "20%", "20%", "25%", "25%", "50%", "50%"];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

  cards.forEach((card, i) => {
    let textElement = card.querySelector(".back-view span");
    textElement.textContent = arr[i];
  });
}

// Initial card shuffle
shuffleCard();

// Event listeners for user card clicks, modal close button, and claim discount button
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

claimDiscountButton.addEventListener("click", () => {
  // Redirect button for user to the "Store.html" page when claiming the discount
  window.location.href = "Store.html";
});


//WORD COUNTER
//Code for Word Counter and Displaying it on Webpage

document.addEventListener('DOMContentLoaded', function () {
  const wordCountContainer = document.getElementById('wordCountContainer');
  const wordCountElement = document.getElementById('wordCount');
  const bodyText = document.body.innerText || document.body.textContent; 
  const words = bodyText.trim().split(/\s+/).filter(Boolean).length;
  wordCountElement.textContent = 'Word Count: ' + words;
  wordCountContainer.appendChild(wordCountElement);
});