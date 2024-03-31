const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

//For INDIA currancy code is INR & country code is IN

window.addEventListener("load", () => {
    updateExchangeRate();
})


for(let select of dropdowns){
    //select ke andar aapn ek ek country code ke liye apan option add karenge
    //currCode = currancy code
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        //default options select rahnyasathi
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    //evt ha object aahe eventListener cha
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target); // target is kuthe change kelay he updateFlag la samjnyasathi
    });
}

//Currancy code sobat Flag pn change zhala pahije mhanun
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

};

btn.addEventListener("click",  (evt) => {
    evt.preventDefault();
    updateExchangeRate();
    
});

let updateExchangeRate = async() => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal == "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }

    // console.log(fromCurr.value.toLowerCase());
    // console.log(toCurr.value.toLowerCase());
    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase()


    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    let rate = data[from][to];
    // console.log(rate);
    // let rate = response.fromCurr.value.toLowerCase()[toCurr.value.toLowerCase()];
    // console.log(rate);

    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value.toUpperCase()} = ${finalAmount} ${toCurr.value.toUpperCase()}`;

}



