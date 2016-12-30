function drawTree(height) {
  for (var k=1; k <= height; k++) {
    var star = "";
    for (var x=1; x <= height-k; x++) {
     star += " "
    }
    for (var n=1 ; n <= k*2-1; n++) {
     star += "*";
    }
    console.log(star);
  }  
}

drawTree(3);
drawTree(5);
drawTree(7);
