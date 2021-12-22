const countryContainer = document.querySelector('.countries');
const request = new XMLHttpRequest;
request.open('GET','https://restcountries.com/v2/name/china');
request.send();
request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    <article class="country">
        <img class="country__image" src="${data.flags.svg}"/>
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👬</span>${data.population} people</p>
            <p class="country__row"><span>🗣</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article> `;
    countryContainer.insertAdjacentHTML('beforeend',html);
    countryContainer.style.opacity = 1;
})  