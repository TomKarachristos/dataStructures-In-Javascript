
// ---split method
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(' ');
for (var i = 0; i < words.length; ++i) {
	console.log('word ' + i + ': ' + words[i]);
}
/*
  word 0: the
  word 1: quick
  word 2: brown
  word 3: fox
  word 4: jumped
  word 5: over
  word 6: the
  word 7: lazy
  word 8: dog
*/
// ---indexOf
var foundTheWord = "quick";
// ~ => -(n+1)
var position = words.indexOf(foundTheWord);
if (~position) {
	console.log("word is found");
}
/*
  word is found
*/

// ---lastindex
var foundTheLastWord = "the";
console.log('the world ' + foundTheLastWord + ' is found in last position : ' + words.lastIndexOf(foundTheLastWord));

/*
  the world the is found in last position : 6
*/

// ---join
console.log(words.join());
// the,quick,brown,fox,jumped,over,the,lazy,dog

console.log(words.join('-'));
// the-quick-brown-fox-jumped-over-the-lazy-dog

// ---toString()
console.log(words.toString());
// the,quick,brown,fox,jumped,over,the,lazy,dog

console.log(words.toString('-')); // not working
// the,quick,brown,fox,jumped,over,the,lazy,dog

// ---concat
var newSentence = ['new', 'sentece'];
console.log(words.concat(newSentence));

/*
	[ 'the',
	'quick',
	'brown',
	'fox',
	'jumped',
	'over',
	'the',
	'lazy',
	'dog',
	'new',
	'sentece' ]
*/

// ---splice
console.log(words.splice(4, 2));
/*
	[ 'jumped', 'over' ]
*/

// ---Mutators
var test = [1,2,3];
test.push(4);
console.log(test);
test.pop();
console.log(test);
/*
	[ 1, 2, 3, 4 ]
	[ 1, 2, 3 ]
*/

test.unshift(0);
console.log(test);
test.shift();
console.log(test);
/*
	[ 0, 1, 2, 3 ]
	[ 1, 2, 3 ]
*/

test.splice(1,0,2.2);
console.log(test);
test.splice(1,2,2);
console.log(test);
/*
	test.splice(1,0,2.2);
	console.log(test);
*/

var num = [1,2,3,4,5];
nums.reverse();
print(nums); // 5,4,3,2,1

// TODO