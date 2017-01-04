//8.5
var a = 2;
var b = 3;	
var value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value > 0) {
	console.log('Wynik dodatni');
} else if (value < 0) { 
  	console.log('Wynik ujemny');
} else {
  	console.log('Liczba jest równa zero');
}
