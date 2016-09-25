"use strict";

// split method
const sentence = "the quick brown fox jumped over the lazy dog";
const words = sentence.split(' ');
for(let i=0;i < words.length; ++i){
	console.log('word ' + i + ': ' + words[i]);
}

// indexOf
const foundTheWord = "quick";
// ~ => -(n+1)
const position = words.indexOf(foundTheWord)
if(~position){
	console.log("word is found");
}

// lastindex
const foundTheLastWord = "the"
console.log('the world ' + foundTheLastWord + ' is found in last position : ' + words.lastIndexOf(foundTheLastWord));

// join
console.log(words.join());
console.log(words.join('-'));
// toString()
console.log(words.toString());
console.log(words.toString('-')); // not working

// concat
const newSentence = ['new','sentece'];
console.log(words.concat(newSentence));

// splice
console.log(words.splice(4,2));