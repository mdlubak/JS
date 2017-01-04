var list = document.getElementById("lista");
var add = document.getElementById("addElem");

add.addEventListener("click", function() {
  var n = document.getElementsByTagName("li").length;
  list.innerHTML += "<li>Item " + n + "</li>" 
});