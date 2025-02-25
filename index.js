
function analyseSentence(sentence) {
  // Initialize counters for the length of the sentence, number of words, and number of vowels.
  let length = 0;
  let words = 1;
  let vowels = 0;

  // List of vowels to check against
  const vowelList = "aeiouAEIOU";

  // Loop through the sentence
  for (let x = 0; x < sentence.length; x++) {
    length++;

    // Check if the character is a vowel
    if (vowelList.includes(sentence[x])) {
      vowels++;
    }

    // Check if the character is a space, indicating a word separation
    if (
      sentence[x] === " " &&
      sentence[x + 1] !== " " &&
      sentence[x + 1] !== undefined
    ) {
      words++;
    }
  }

  // Output the results
  document.write("<h1>Length of the sentence: " + length + "<br></h1>");
  document.write("<h1>Number of words: " + words + "<br></h1>");
  document.write("<h1>Number of vowels: " + vowels + "</h1>");

}

let sentence = "How is your learning experience going at GOMYCODE?.";
