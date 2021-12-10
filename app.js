window.addEventListener("DOMContentLoaded", function(){
    let bankAPi = "https://nbu.uz/en/exchange-rates/json/";

    let usd = document.querySelector("#usd");
    let eur = document.querySelector("#eur");
    let rub = document.querySelector("#rub");
    let funt = document.querySelector("#funt");
    let won = document.querySelector("#won");
    let time = document.querySelector("#time");

    let date = new Date();
    let days = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    time.textContent = `${days}.${month}.${year}`;
    function getResults(api) {
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                funt.textContent = data[8].cb_price;
                eur.textContent = data[7].cb_price;
                usd.textContent = data[23].cb_price;
                rub.textContent = data[18].cb_price;
                won.textContent = data[10].cb_price;
            })
    }
    getResults(bankAPi);
})