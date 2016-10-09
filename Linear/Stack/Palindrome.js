/*
    A palindrome is a word, phrase, or number that is spelled the same forward and back‐
    ward. For example, “dad” is a palindrome; “racecar” is a palindrome; “A man, a plan, a
    canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
    and 1,001 is a numeric palindrome
*/
function isPalindrome(word) {
	var s = new Stack();
	for (var i = 0; i < word.length; ++i) {
		s.push(word[i]);
	}
	
	var rword = "";
	while (s.length() > 0) {
		rword += s.pop();
	}

	return word == rword; 
}

var word = "hello";
if (isPalindrome(word)) {
 print(word + " is a palindrome.");
}
else {
 print(word + " is not a palindrome.");
}
word = "racecar"
if (isPalindrome(word)) {
 print(word + " is a palindrome.");
}
else {
 print(word + " is not a palindrome.");
}