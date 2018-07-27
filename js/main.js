function myApp(name) {
	
	alert("Hey, I best programmer in all world! My name is " + name + " this and some beautiful program :D");
	let friendName = prompt('А как зовут тебя?');
	function mySkills() {
		alert('Хочешь увидеть мои скилы?)(отрицательного ответа нет, ахах :D');
		let skills = ["html5", 'css3', "photoshop", 'adobePremiere', "cinema4D", 'adobeAfterAffects', "adobeAudition"];

		for (let i = 0; i < skills.length; i++) {
			let test = 'i can work with ' + skills[i] + '<br>';
			document.write(test);
		}
	}

	function checkAge() {
		age = prompt('Уважаемый ' + friendName + ', сколько тебе лет?', '')
		if (age < 99) {
			alert("У тебя еще все впереди! Just Do It!")
		} else {
			alert('Ой, а если честно?')
			age = prompt('Повторим пожалуй ' + friendName + ', сколько тебе лет?', '')
		if (age < 99) {
			alert("Другое дело! У тебя еще все впереди! Just Do It!")
		} else {
			alert('Ой, ну и не говори!! :(')
		}
		}
	}
	checkAge();

	function calcPow() {
		let number = prompt("Напиши любое число и получи его квадрат!(Халява)");
		let numberCheck = number * number;
		alert(numberCheck);
	}
	calcPow();
	mySkills();
}

myApp('Sergey');