'use strict';
const btn = document.querySelector('.btn-country');
const countryContainer = document.querySelector('.countries');

//First step
const getCountry = (country) => {
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v2/name/${country}`);
request.send();
request.addEventListener('load',function(){
	// console.log(this.responseText);  //we get the result of our first AJAX call 
	const [data] = JSON.parse(this.responseText);
	console.log(data);
	const html = `
		<article class="country">
			<img class="country__image" src="${data.flags.png}"/>
			<div class="country__data">
				<h3 class="country__name">${data.name}</h3>
				<h4 class="country__region">${data.region}</h4>
				<p class="country__row"><span>👬</span>${(+data.population)}</p>
				<p class="country__row"><span>🗣</span>${data.languages[0].name}</p>
				<p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
				<p class="country__row"><span>💵</span>${data.currencies[0].symbol}</p>
				<p class="country__row"><span>🏢</span>${data.capital}</p>
				
			</div>
		</article> 
		
		
	`
	countryContainer.insertAdjacentHTML('beforeend',html);
	
});
}

getCountry('portugal');