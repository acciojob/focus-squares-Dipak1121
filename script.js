//your JS code here. If required.


let squares = document.querySelectorAll(".square");
for ( let i = 0; i < squares.length; i++ ){
	squares[i].addEventListener("mouseover", onMouseEnter);
	squares[i].addEventListener("mouseout", onMouseLeave);
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

// const squares = document.querySelectorAll('.square');

//   squares.forEach(square => {
//     square.addEventListener('mouseover', () => {
//       squares.forEach(otherSquare => {
//         if (otherSquare !== square) {
//           otherSquare.classList.add('coffee');
//         }
//       });
//     });

//     square.addEventListener('mouseout', () => {
//       squares.forEach(otherSquare => {
//         if (otherSquare !== square) {
//           otherSquare.classList.remove('coffee');
//         }
//       });
//     });
//   });