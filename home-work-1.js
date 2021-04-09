const questions = [
 {
   question: 'Кто виноват в том  что вся планета болеет коронавирусом',
   answer: 'Китайцы',
 },
 {
   question: 'Назовите фамилию создателя периодической системы химических элементов',
   answer: 'Менделеев',
 },
 {
   question: 'Назовите фамилию одного из авторов теории относительности',
   answer: 'Эйнштейн',
 },
 {
   question: 'Назовите столицу Германии',
   answer: 'Берлин',
 },
 {
   question: 'Сколько президентов было у Республики Беларусь',
   answer: '1',
 },
 {
   question: 'Назовите единственный спутник планеты Земля',
   answer: 'Луна',
 },
 {
   question: 'Сколько дней в високосном году',
   answer: '366',
 },
 {
   question: 'Фамилия автора картины "Утро в сосновом лесу"',
   answer: 'Шишкин',
 },
 {
   question: 'Как зовут знаменитого португальского футболиста Роналду',
   answer: 'Криштиану',
 },
 {
   question: 'Фамилия первого человека побывавшего на Луне',
   answer: 'Армстронг',
 },
]

let correctAnswers = 0;
let wrongAnswers = 0;
let answer = '';
let answersList = "";

questions.forEach((element, index) => {
	const question = prompt(element.question);

	if (question === element.answer) {
		correctAnswers++;
		answer = `вопрос ${++index}: верно`;
	} else {
		wrongAnswers++;
		answer = `вопрос ${++index}: неверно`;
	}
	answersList += answer + "\n";
});
alert(`${answersList}\n Итого ${correctAnswers} правильных ответов из ${questions.length}`);