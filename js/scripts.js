//8.8
var
	text = ('Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.');
	textElephant = ('Zielone słonie');
	textElephantUpperCased = textElephant.toUpperCase();
	textReplaced = text.replace('Papugi', textElephantUpperCased);
	textReplacedHalf = textReplaced.substr(0, textReplaced.length/2);
	
console.log(textReplaced);
console.log(textReplacedHalf);

