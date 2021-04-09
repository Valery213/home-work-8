let Uppercase = 0;
let LowerCase = 0;
function func () {
	const answer = prompt('Ведите букву "а" в верхнем либо нижнем регистрах');
	if (answer === null) {
		alert (`Количество символов в верхнем регистре: ${Uppercase}`);
		alert (`Количество символов в нижнем регистре: ${LowerCase}`);
		return
	} else {
		if (answer === answer.toUpperCase()) {
			Uppercase++;
		} else {
			LowerCase++;
		}
		func();
	}
}
func();