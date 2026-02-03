/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("Length-el")
let volumeEl = document.getElementById("Volume-el")
let massEl = document.getElementById("Mass-el")
let btnconvertEl = document.getElementById("btnconvert")
const meter = 3.281
const liter = 0.264
const kilogram = 2.204




btnconvertEl.addEventListener("click", function(){
lengthEl.innerText = ""
volumeEl.innerText = ""
massEl.innerText = ""

lengthEl.innerText = ` ${inputEl.value} meters = ${(inputEl.value * meter).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value * 0.305).toFixed(3)} meters`
volumeEl.innerText = ` ${inputEl.value} liters = ${(inputEl.value * liter).toFixed(3)} gallons | ${inputEl.value} gallons  = ${(inputEl.value * 3.785).toFixed(3)} liters`
massEl.innerText = ` ${inputEl.value} kilos = ${(inputEl.value * kilogram).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value * 0.4536).toFixed(3)} kilos`

})
