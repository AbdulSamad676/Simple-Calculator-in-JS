let displayScreen = document.querySelector('.display');
console.log(displayScreen);

let btns = document.querySelectorAll('.Btn');

console.log(btns);
btns.forEach(btn => {
	btn.addEventListener('click', function (e) {
		console.log(e.target.innerHTML);
		if (e.target.innerHTML === 'x') {
			// e.target.innerHTML = '*';
			displayScreen.innerHTML += '*';
		} else if (e.target.innerHTML === '÷') {
			// e.target.innerHTML = '/';
			displayScreen.innerHTML += '/';
		} else {
			displayScreen.innerHTML += e.target.innerHTML;
			// displayScreen.innerHTML = displayScreen.value;
		}
	});
});

function calculateResult() {
	try {
		let displayData = eval(displayScreen.innerHTML);
		displayScreen.innerHTML = displayData;
	} catch (error) {
		displayScreen.innerHTML = 'Error';
		setTimeout(function () {
			displayScreen.innerHTML = '';
		}, 3000);
	}
}
function removeScreen() {
	let displayScreen = document.getElementById('display');
	let data = displayScreen.innerHTML.toString();

	let modifiedData = removeLast(data);
	// Updating the screen data with the modified string data
	displayScreen.innerHTML = modifiedData;
}

function removeLast(str) {
	// taking new string and copy all the data without last chatector to it then returned
	let newStr = '';
	for (let i = 0; i < str.length - 1; i++) {
		newStr += str[i];
	}
	return newStr;
}

function clearScreen() {
	displayScreen.innerHTML = '';
}
