// function squareNumber() {
//   const input = document.getElementById('numberInput').value;
//   const number = parseFloat(input);

//   if (isNaN(number)) {
//     document.getElementById('result').innerText = "Please enter a valid number.";
//     return;
//   }

//   const result = number * number;
//   document.getElementById('result').innerText = `The square is: ${result}`;
// }

// function splitSentence() {
//   const input = document.getElementById('textInput').value.trim();

//   if (!input) {
//     document.getElementById('result').innerText = "Please enter a sentence.";
//     return;
//   }

//   const words = input.split(/\s+/); // splits by one or more spaces
//   document.getElementById('result').innerText = `Words: ${words.join(', ')}`;
// }

function getTwoRandomWords(sentence) {
  const words = sentence.trim().split(/\s+/);

  if (words.length < 2) return "Not enough words.";

  // Shuffle array using Fisher-Yates
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }

  return [words[0], words[1]];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function evaluateSentence() {
  const sentence_in = document.getElementById('textInput').value;
  const [word1, word2] = getTwoRandomWords(sentence_in);
  const result = 50.0 + getRandomInt(0, 5000) / 100.0;
  const sentence = "The score for the headline is " + result.toFixed(2) + "%.\nThe words '" + word1 + "' and '" + word2 + "' are great!";
  document.getElementById('result').innerText = `${sentence}`;
}
