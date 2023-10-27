// ============================================================================
// Take a sentence as an input and reverse every word in that sentence.
// Example - This is a sunny day > shiT si a ynnus yad.
// ============================================================================

const prompt = require("prompt-sync")();

function reverseWord() {
  let sentence = prompt("Enter a sentence: ");

  let words = sentence.split(" ");

  let newSentence = "";

  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    newSentence += element.split("").reverse().join("") + " ";
  }

  console.log(newSentence);
}

reverseWord();
