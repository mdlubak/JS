//8.6
function getTriangleArea(a, h) {
  if (a, h <= 0) {
    console.log('Nieprawidłowe dane') 
  } else {
    return (a*h/2) 
  }
}

var 
  triangle1Area = getTriangleArea(10, 15);
  triangle2Area = getTriangleArea(9, 14); 
  triangle3Area = getTriangleArea(8, 13);

console.log (triangle1Area);
console.log (triangle2Area);
console.log (triangle3Area);