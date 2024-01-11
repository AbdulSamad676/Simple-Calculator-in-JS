let displayScreen = document.querySelector('.display');
console.log(displayScreen);

// let result = eval('24*6');
// console.log(result);

let btns = document.querySelectorAll('.Btn');

console.log(btns);
btns.forEach(btn => {
	btn.addEventListener('click', function (e) {
		console.log(e.target.innerHTML);
		if (e.target.innerHTML === 'x') {
			e.target.innerHTML = '*';
			displayScreen.innerHTML += e.target.innerHTML;
		} else if (e.target.innerHTML === '÷') {
			e.target.innerHTML = '/';
			displayScreen.innerHTML += e.target.innerHTML;
		} else {
			displayScreen.innerHTML += e.target.innerHTML;
			// displayScreen.innerHTML = displayScreen.value;
		}
	});
});

function calculateResult() {
	let displayData = eval(displayScreen.innerHTML);
	displayScreen.innerHTML = displayData;
}
function clearScreen() {
	displayScreen.innerHTML = '';
}
