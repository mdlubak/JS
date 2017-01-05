//8.8
var text = ('Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.');
var textElephant = ('Zielone słonie');
var textElephantUpperCased = textElephant.toUpperCase();
var textFirstWord = text.split(" ", 1);
var textReplaced = text.replace(textFirstWord, textElephantUpperCased);
var textReplacedHalf = textReplaced.substr(0, textReplaced.length / 2);

console.log(textFirstWord);	
console.log(textReplaced);
console.log(textReplacedHalf);

