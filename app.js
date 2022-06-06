const user = document.querySelector("#userInput");
const functions = document.querySelector("#functions");
const convert = document.querySelector("#convert");
const newString = document.querySelector(".newStr");


convert.addEventListener("click", function (e) {
	e.preventDefault();

	let str = user.value;
    
		if (functions.value === "FizzBuzz") {
			fizzBuzz(str);
		} else if (functions.value === "Vowels") {
			vowels(str);
		} else if (functions.value === "Pangram") {
			user.placeholder = "Enter a string";
			isPangram(str);
		} else if (functions.value === "Expand") {
			user.placeholder = "Enter a string";
			strExpand(str);
		}
		else if (functions.value === "Reverse"){
			reverse(str);

		}
		else if (functions.value === "Palindrome"){
			palindrome(str);

		}
	

});


function fizzBuzz(str) {
	newString.classList.remove('text-danger')

	if (!isNaN(str)) {
		if (str % 3 === 0) {
			if (str % 5 === 0) {
				newString.innerText = "FizzBuzz";
			} else {
				newString.innerText = "Fizz";
			}
		} else if (str % 5 === 0) {
			if (str % 3 === 0) {
				newString.innerText = "FizzBuzz";
			} else {
				newString.innerText = "Buzz";
			}
		} else {
			newString.innerText = `${str} isn't FizzBuzzable sorry`;
		}
	} else {
		newString.innerText = `Please enter a valid number`;
	}
}

//A quick brown fox jumps over the lazy dog
// function vowels(str) {
// 	if (!parseInt(str)) {
// 		let strNew = [];
// 		for (let i = 0; i < [...str].length; i++) {
// 			if ([...str][i].toLowerCase() === "a") {
// 				strNew.push([...str][i]);
// 			} else if ([...str][i].toLowerCase() === "e") {
// 				strNew.push([...str][i]);
// 			} else if ([...str][i].toLowerCase() === "i") {
// 				strNew.push([...str][i]);
// 			} else if ([...str][i].toLowerCase() === "o") {
// 				strNew.push([...str][i]);
// 			} else if ([...str][i].toLowerCase() === "u") {
// 				strNew.push([...str][i]);
// 			}
// 		}
// 		newString.innerText = strNew.join("");
// 		return console.log(strNew.join(""));
// 	} else {
// 		alert(`C'mon enter a valid String`);
// 	}
// }
//Better way


function vowels(str){
	newString.classList.remove('text-danger')

	if (!parseInt(str)) {
    const vowelsFormat = /[aeiou]/gi;
    const res = str.match(vowelsFormat);
	if(str.match(vowelsFormat)){
		
		return newString.innerText=res.join('');
	}
	   newString.classList.add('text-danger');
		return newString.innerText=`There are no vowels in ${str}`
	}
    else {
		return newString.innerText='Enter a valid string';
	}
}

//A quick brown fox jumps over the lazy dog
function isPangram(str) {
	if (!parseInt(str)) {
		const alphabet = [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		];
		const arr = [...str];
		let isPangram = 0;
		newString.classList.remove('text-danger')

		for (let i = 0; i < alphabet.length; i++) {
			if (arr.includes(alphabet[i])) {
				isPangram += 1;
				if (isPangram === 26) {
					newString.innerText = `You're right That's a pangram`;
					return console.log(true);
				}
			} else {
				newString.innerText = `That's definitely not a pangram  `;
				return console.log(false);
			}
		}
	}
	alert(`you're really gonna do this again?`);
}

//New Pangram

//strExpand
function strExpand(str) {
	if (!parseInt(str)) {
		let newStr = [];
		const strNo = [...str].reduce(function (acc, curr) {
			return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
		}, {});

		for (let el in strNo) {
			newStr.push(`${el}${strNo[el]}`);
		}
		newString.classList.remove('text-danger')
		return newString.innerText = `expanded string => "${newStr.join("")}" `;
		
	}
	alert(`For God's sake will you just enter a valid string?`);
}


//Reverse string
function reverse(s) {
	let result ='';
	let newStr = s.toLowerCase().trim().replace(/[^a-zA-Z0-9 ]/g, "");
	let strN = [...newStr];
	let str = strN.filter(e => String(e).trim());
	for (let i = str.length-1; i >= 0; i--) {
	 result += str[i]
	}
	newString.classList.remove('text-danger')
	return newString.innerText = result;
}

function palindrome(s) {
		let newStr = s.toLowerCase().trim().replace(/[^a-zA-Z0-9 ]/g, "");
	let strN = [...newStr];
		let str = strN.filter(e => String(e).trim());
	if (reverse(s) == str.join('')) {
		newString.classList.remove('text-danger')
		return newString.innerText = 'This is a palindrome';
	} else {
		newString.classList.add('text-danger')
		return newString.innerText = 'Not a palindrome!!'
	}
}
