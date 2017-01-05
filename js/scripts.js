//8.6
function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		return (a * h / 2 );
		}	
     console.log('Nieprawidłowe dane');
	}	

var triangle1Area = getTriangleArea(0, 15);
var triangle2Area = getTriangleArea(-2, 14); 
var triangle3Area = getTriangleArea(8, 13);

console.log (triangle1Area);
console.log (triangle2Area);
console.log (triangle3Area);