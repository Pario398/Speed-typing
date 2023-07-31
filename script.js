const quotes = {
  easy: [
      "Be the change that you wish to see in the world.",
      "Believe you can and you’re halfway there.",
      "Where there is love there is life.",
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "The only way to do great work is to love what you do."
  ],
  medium: [
      "Happiness is not something ready made. It comes from your own actions.",
      "The only limit to our realization of tomorrow will be our doubts of today.",
      "Don’t watch the clock; do what it does. Keep going.",
      "Act as if what you do makes a difference. It does.",
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."
  ],
  hard: [
      "What lies behind us and what lies before us are tiny matters compared to what lies within us",
      "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.",
      "In three words I can sum up everything I’ve learned about life: it goes on.",
      "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
      "Success is not how high you have climbed, but how you make a positive difference to the world."
  ]
};

function setDifficulty(difficulty) {
  const randomQuoteIndex = Math.floor(Math.random() * quotes[difficulty].length);
  $('#quote').text(quotes[difficulty][randomQuoteIndex]);
  $('#type').val('');
  $('#type').prop('disabled', false);
  $('#speed').text('Typing speed: 0 WPM');
  startTime = new Date().getTime();
}

$('.difficulty-btn').on('click', function () {
  const difficulty = $(this).data('difficulty');
  setDifficulty(difficulty);
});

$('#type').on('input', function () {
  const inputText = $(this).val().trim();
  const quote = $('#quote').text().trim();
  const words = quote.split(' ');
  const wordsTyped = inputText.split(' ').length;
  const elapsedTimeInMinutes = (new Date().getTime() - startTime) / 60000;
  typingSpeed = Math.round(wordsTyped / elapsedTimeInMinutes);

  if (inputText === quote) {
      $(this).val('');
      $(this).prop('disabled', true);
      $('#speed').text(`Final Typing Speed: ${typingSpeed} WPM`);
  } else {
      $('#speed').text(`Typing speed: ${typingSpeed} WPM`);
  }
});
