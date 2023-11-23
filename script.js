//your JS code here. If required.
let squares = document.querySelectorAll(".square");
for ( let i = 0; i < squares.length; i++ ){
	squares[i].addEventListener("mouseenter", onMouseEnter);
	squares[i].addEventListener("mouseleave", onMouseLeave);
}

function onMouseEnter(event){
	for ( let i = 0; i < squares.length; i++ ){
	if(squares[i] != event.target){
		squares[i].style.backgroundColor = "rgb(111, 78, 55)";
	}
}
}

function onMouseLeave() {
	for ( let i = 0; i < squares.length; i++ ){
		squares[i].style.backgroundColor = "#E6E6FA";
}
}