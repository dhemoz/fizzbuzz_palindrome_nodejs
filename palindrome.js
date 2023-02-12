function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i].toLowerCase() !== string[len - 1 - i].toLowerCase()) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Input Text = ', string => {
  console.log(checkPalindrome(string));
  readline.close();
});
// // program to check if the string is palindrome or not



