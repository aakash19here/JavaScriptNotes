//countryContainer
//render country function 
//AJAX for country one 
//AJAX for country two 

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
    const request = new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v2/name/${country}`);
    request.send();
    request.addEventListener('load',function(){
        const [data] = JSON.parse(request.responseText)
        console.log(data);
        renderCountry(data);
        
        const [neighbor] = data.borders;
        console.log(neighbor);
        const request2 = new XMLHttpRequest();
        request2.open('GET',`https://restcountries.com/v2/alpha/${neighbor}`)
        request2.send();
        request2.addEventListener('load',function(){
            const data2 = JSON.parse(this.responseText);
            console.log(data2);
            renderCountry(data2);
        })

    })
    
}
getCountryAndNeighbor('bharat');