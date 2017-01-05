//8.7
var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);
var newName = prompt('Wpisz imię: ');

console.log(allNames);

if (allNames.indexOf(newName) === -1) {
	console.log('Imię może zostać dodane');
	allNames.push(newName);
  	console.log(allNames);
}
else {
	console.log('Imię już występuje w tabeli');
}
