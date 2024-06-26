const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');


let firstValue = "";
let isFirstValue = false;
let secondvalue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', (e) => {
		let atr = e.target.getAttribute('value');
		if(isFirstValue === false) {
			getFirstValue(atr)
		}
		if(isSecondValue === false) {
			getSecondValue(atr);
		}
	})
}

function getFirstValue(el) {
	result.innerHTML = "";
	firstValue += el;
	result.innerHTML = firstValue;
	firstValue = +firstValue;
}

function getSecondValue(el) {
	if(firstValue != "" && sign != "") {
		secondvalue += el;
		result.innerHTML = secondvalue;
		secondvalue = +secondvalue;
	}
}

function getSign() {
	for(let i = 0; i < signs.length; i++) {
		signs[i].addEventListener('click', (e) => {
			sign = e.target.getAttribute('value');
			isFirstValue = true;
		})
	}
}
getSign();

equals.addEventListener('click', () => {
	result.innerHTML = "";
	if(sign === "+") {
		resultValue = firstValue + secondvalue;
	}
	else if(sign === "-") {
		resultValue = firstValue - secondvalue;
	}
	else if(sign === "x") {
		resultValue = firstValue * secondvalue;
	}
	else if(sign === "/") {
		resultValue = firstValue / secondvalue;
	}
	result.innerHTML = resultValue;
	firstValue = resultValue;
	secondvalue = "";

	checkResultLength();
})

function checkResultLength() {
	resultValue = JSON.stringify(resultValue);

	if(resultValue.length >= 8) {
		resultValue = JSON.parse(resultValue);
		result.innerHTML = resultValue.toFixed(5);
	}
}

negative.addEventListener('click', () => {
	result.innerHTML = "";
	if (firstValue != "") {
		resultValue = -firstValue;
		firstValue = resultValue;
	}
	if (firstValue != "" && secondvalue != "" && sign != "") {
		resultValue = -resultValue;
	}

	result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
	result.innerHTML = 0;

	firstValue = "";
	isFirstValue = false;
	secondvalue = "";
	isSecondValue = false;
	sign = "";
	resultValue = 0;
})