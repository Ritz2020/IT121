word = prompt("Let's start the Pig Latin words game! Please Enter a word.");
if (word) { // Check if the word is not empty
    let firstChar = word.charAt(0).toLowerCase(); // Get the first character in lower case
    

    if ('aeiou'.includes(firstChar)) {
        // Rule 1: Word begins with a vowel
       document.write ( word + 'way');
    } else if (word.length > 1 && !'aeiou'.includes(firstChar) && !'aeiou'.includes(word.charAt(1).toLowerCase())) {
        // Rule 3: Word begins with two consonants
       document.write( word.slice(2) + word.slice(0, 2) + 'ay');
    } else {
        // Rule 2: Word begins with one consonant
      document.write( word.slice(1) + firstChar + 'ay');
    }
}