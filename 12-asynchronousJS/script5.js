const countryContainer = document.querySelector('.countries');
const request = new XMLHttpRequest();
const getCountry = (country) => {
    request.open('GET',`https://restcountries.com/v2/name/${country}`);
    request.send();
    request.addEventListener('load',function(){
        const [data] = JSON.parse(this.responseText);
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

    })
}
getCountry('bharat')