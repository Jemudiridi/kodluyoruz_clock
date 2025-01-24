const CLOCK_DOM = document.querySelector("#myClock")
const NAME_DOM = document.querySelector("#myName")
const ALPHABETHİC = /[a-zA-Z]/
const DATE = new Date() 

let name = prompt("Lütfen isminizi giriniz")


if (!ALPHABETHİC.test(name)){
    NAME_DOM.innerHTML = "İsimsiz Kahraman"
    showTime()
} else {
    name = name.replace(name.at(), name.at(0).toUpperCase())
    NAME_DOM.innerHTML = name
    showTime()
}


function showTime() {
    let day =DATE.toLocaleString('tr-TR', {weekday: 'long'})
    let time = DATE.toLocaleTimeString('tr-TR') 

    CLOCK_DOM.innerHTML = time + " "+day
}

setInterval(showTime, 1000)