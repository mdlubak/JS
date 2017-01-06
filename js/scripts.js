var list = document.getElementById("lista");
var add = document.getElementById("addElem");

add.addEventListener("click", function() {
	var listElemByTag = document.getElementsByTagName("li");
	list.innerHTML += "<li>Item " + listElemByTag.length + "</li>";
});
