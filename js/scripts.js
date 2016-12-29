//8.7
var 
	womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
	mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
	allNames = womensNames.concat(mensNames);
	newName = prompt('Wpisz imię: ');
	indexNewName = allNames.indexOf(newName);

console.log(allNames);

if (indexNewName == -1) {
	console.log('Imię może zostać dodane')
	allNames.push(newName)
}
else {
	console.log('Imię już występuje w tabeli')
}

console.log(allNames);
