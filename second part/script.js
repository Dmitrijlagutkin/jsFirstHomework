//1. User number.even or odd number

let userNumber = +(prompt("Введите число"))
console.log(userNumber, typeof userNumber)


if (isNaN(userNumber)) {
	alert("Вы ввели не число")
} else {
	if (userNumber % 2 == 0) {
		alert("Вы ввели четное число")
	} else {
		alert("Вы ввели не четное число")
	}
}


//-----------------------------------------------------------------


// 2. User number. Different variants


// let userNumber = +(prompt("Введите число"))
// console.log(userNumber, typeof userNumber)


// if (isNaN(userNumber)) {
// 	alert("Вы ввели не число")
// } else {
// 	if (userNumber < 0) {
// 		if (userNumber % 3 == 0) {
// 			console.log("Число кратно трем (умноженное само на себя)", userNumber * userNumber)
// 		} else {
// 			console.log("Остаток от деления на 8 ", userNumber % 8)
// 		}
// 	} else if (userNumber > 0) {
// 		let squareRoot = Math.sqrt(userNumber)
// 		if (Math.ceil(squareRoot) > 1) {
// 			squareRoot = squareRoot * squareRoot
// 			console.log("Квадратный корень числа умноженый сам на себя ", squareRoot)
// 		} else {
// 			squareRoot = squareRoot - 0.5
// 			console.log("Квадратный корень числа - 0.5 ", squareRoot)
// 		}
// 	} else {
// 		userNumber = String(userNumber)
// 		console.log("Преобразование числа в строку ", userNumber, typeof userNumber)
// 	}
// }



//-----------------------------------------------------------------


// 2. Game

// let isUserAge = confirm("Вам есть 18 лет?")

// if (isUserAge) {
// 	alert("Ваша задача - угадать число. Поехали!!!")

// 	let userNumber = +(prompt("Введите число от 0 до 10"))
// 	console.log(userNumber, typeof userNumber)
// 	if (isNaN(userNumber)) {
// 		alert("Вы ввели не число")
// 	} else if (userNumber > 9) {
// 		alert(`Вы ввели не правельное число - ${userNumber}. Введите число от 0 до 9!!!`)
// 	} else {
// 		let randomNumber = Math.random()
// 		randomNumber *= 10
// 		randomNumber = parseInt(randomNumber)

// 		if (randomNumber === userNumber) {
// 			alert(`${randomNumber} равно ${userNumber} Поздравляю! Вы выиграли!!!`)
// 		} else {
// 			alert(`${randomNumber} не равно ${userNumber} Вы проиграли, попробуйте еще раз`)
// 		}
// 	}

// } else {
// 	alert("Вы не можете играть в эту игру!!!")
// }