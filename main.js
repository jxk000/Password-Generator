const passText = document.querySelector('.pass__test')
const passInformation = document.querySelector('.box__result')
const passLenght = document.querySelector('#numberPass')
const btnGenerator = document.querySelector('#btnGenerator')
const copyBox = document.querySelector('.result-copyPassword')
const checkBox1 = document.querySelector('#bigCheck')
const checkBox2 = document.querySelector('#smallCheck')
const checkBox3 = document.querySelector('#otherCheck')
const checkBox4 = document.querySelector('#numberCheck')
const rangeValue = document.querySelector('#rangeValue')

const passGenerator = () => {
	if (passLenght.value <= 40) {
		let password = ''
		passText.style.color = 'black'
		// Symbols
		let alphabeta = [
			'q',
			'w',
			'e',
			'r',
			't',
			'y',
			'u',
			'i',
			'o',
			'p',
			'a',
			's',
			'd',
			'f',
			'g',
			'h',
			'j',
			'k',
			'l',
			'z',
			'x',
			'c',
			'v',
			'b',
			'n',
			'm',
		]
		let alphabetA = [
			'Q',
			'W',
			'E',
			'R',
			'T',
			'Y',
			'U',
			'I',
			'O',
			'P',
			'A',
			'S',
			'D',
			'F',
			'G',
			'H',
			'J',
			'K',
			'L',
			'Z',
			'X',
			'C',
			'V',
			'B',
			'N',
			'M',
		]
		let other = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
		let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

		let list

		if (checkBox1.checked == false) {
			alphabetA.length = 0
		}
		if (checkBox2.checked == false) {
			alphabeta.length = 0
		}
		if (checkBox3.checked == false) {
			other.length = 0
		}
		if (checkBox4.checked == false) {
			number.length = 0
		}

		list = [...alphabetA, ...alphabeta, ...other, ...number]

		for (i = 0; i < passLenght.value; i++) {
			password += list[Math.floor(Math.random() * list.length)]
		}
		passText.textContent = `${password}`
		navigator.clipboard.writeText(passText.textContent)
	} else {
		alert(`Password too long`)
	}
	if (
		checkBox1.checked == false &&
		checkBox2.checked == false &&
		checkBox3.checked == false &&
		checkBox4.checked == false
	) {
		passText.textContent = `Choose options`
		passText.style.color = '#eb4d4b'
	}
}

const copyPassword = () => {
	navigator.clipboard.writeText(passText.textContent)
	alert('Your password is copied!')
}

const rangeVal = () => {
	rangeValue.textContent = passLenght.value
}

btnGenerator.addEventListener('click', passGenerator)
copyBox.addEventListener('click', copyPassword)
