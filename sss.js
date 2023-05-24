function inflationCalculator(){
	let inflation = document.querySelector('#inflationRate');
	let money = document.querySelector('#money');
	let godine = document.querySelector('#years');

	inflation = parseFloat(inflation.value);
	money = parseFloat(money.value);
	godine = parseFloat(godine.value);

	let worth = money + (money * (inflation / 100));

	for(let i; i < years; i++);
		worth = worth + (inflation / 100);

	console.log(worth);
}

let cena = document.createElement('div');
cena.className = 'cenaa';
cena.innerText = 
