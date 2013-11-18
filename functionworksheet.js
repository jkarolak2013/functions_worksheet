//function worksheet 11-18 james_karolak
//Example: Calculate area
var total = calcuArea(5, 6);
function calcuArea(w, h){
	var area = w * h;
	return area;
}

console.log("The area of a rectangle is "+total)

//Circumference of a circle
var circumf = cumArea(8, 3.14159265);//the argument area
function cumArea(a,p){//the storage bin area--the parameters
	var area = a * p;//the calculation
	return area;//this is the function that puts out the info
}
console.log("The circumference of the circle is "+circumf)

//Stung project
var Stings = BeeStings(185, 8.6666667);// two arguments are presented here
function BeeStings(w,s){//this is the storage bin are for the parameters
	var Stingers = w * s;//this is the calculation properties
	return Stingers;
 
}
console.log("It takes "+Stings+" bee stings to kill this animal.")