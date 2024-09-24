const ratingBtn = document.querySelectorAll('.rating-btn');
const submitBtn = document.getElementById('submit-btn');
const resultText = document.getElementById('result-text');
const ratingDiv = document.getElementsByClassName('rating-div')[0];
const resultDiv = document.getElementsByClassName('result-div')[0];

// variable to store the rating value
let selectedRating = null;

// function to access all rating buttons and their value
ratingBtn.forEach((button) => {
  button.addEventListener('click', () => {
    selectedRating = button.value;
  });
});

// function to submit and get the result page
submitBtn.addEventListener('click', () => {
  if (selectedRating) {
    ratingDiv.style.display = 'none';
    resultDiv.style.display = 'flex';
    resultText.textContent = `You selected ${selectedRating} out of 5`;
  } else {
    ratingDiv.style.display = 'none';
    resultDiv.style.display = 'flex';
    resultText.textContent = `You selected 0 out of 5`;
  }
});
