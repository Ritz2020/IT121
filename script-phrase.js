let sentence = "apple pig grade latin"; // Input sentence
let words = sentence.split(' '); // Split the sentence into words
let pigLatinWords = []; // Array to hold the Pig Latin words

// Process the first word
let word = words[0];
for (let i=0; i < words.length; i++) {
if (word) { // Check if the word is not empty
    let firstChar = word.charAt(0).toLowerCase(); // Get the first character in lower case
    let pigLatinWord = '';

    if ('aeiou'.includes(firstChar)) {
        // Rule 1: Word begins with a vowel
        pigLatinWord = word + 'way';
    } else if (word.length > 1 && !'aeiou'.includes(firstChar) && !'aeiou'.includes(word.charAt(1).toLowerCase())) {
        // Rule 3: Word begins with two consonants
        pigLatinWord = word.slice(2) + word.slice(0, 2) + 'ay';
    } else {
        // Rule 2: Word begins with one consonant
        pigLatinWord = word.slice(1) + firstChar + 'ay';
    }

    pigLatinWords.push(pigLatinWord); // Add the converted word to the array
}
let outputSentence = pigLatinWords.join(' ')
}
document.write(outputSentence);

