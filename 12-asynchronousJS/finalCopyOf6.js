const countryContainer = document.querySelector('.countries');
const renderCountry = (data) => {
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
    </article> `;
	countryContainer.insertAdjacentHTML('beforeend',html);
}
const getCountryAndNeighbor = (country) => {
    const requestForCountry = new XMLHttpRequest();
    requestForCountry.open('GET',`https://restcountries.com/v2/name/${country}`);
    requestForCountry.send();
    requestForCountry.addEventListener('load',function(){
        const [data] = JSON.parse(requestForCountry.responseText);
        console.log(data);
        renderCountry(data);
        const [neighbor] = data.borders;
        const requestForNeighbor = new XMLHttpRequest();
        requestForNeighbor.open('GET',`https://restcountries.com/v2/alpha/${neighbor}`);
        requestForNeighbor.send();
        if(!neighbor) return;
        requestForNeighbor.addEventListener('load',function(){
            const dataOfNeighbor = JSON.parse(this.responseText);
            console.log(dataOfNeighbor);
            renderCountry(dataOfNeighbor);
        })
    })
}
getCountryAndNeighbor('chile') 