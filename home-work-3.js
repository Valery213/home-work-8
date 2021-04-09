const dataTypes = [
	false,
	's',
	0,
	null,
	undefined,
	{},
	[],
	10n,
	Symbol(),
	() => {},
]
dataTypes.forEach(element => {
	let string;
	let number;
	let boolean;

	if (typeof element === 'symbol') {
		string = element.toString();
	} else {
		string = String(element);
		number = Number(element);
		boolean = Boolean(element);
	}
	console.log(`Значение ${string}\n тип: ${typeof element}\n преобразование к числу: ${number}\n преобразование к строке: ${string}\n преобразование к булеву: ${boolean}`);
})