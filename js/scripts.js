//8.5
var
	a = 2;
 	b = 3;
  	value = (a*a) + (2 * a * b) - (b*b);

console.log(value);

if (value > 0) {
  	console.log('Wynik dodatni')
}
else if (value < 0) { 
  	console.log('Wynik ujemny')
}
else if (value == 0) {
  	console.log('Zero')
}