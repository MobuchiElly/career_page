// const UTCcurrentTime = document.querySelectorAll(".UTC-current-time");
// const currentDay = document.querySelectorAll(".current-day");

// const days = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// ]
// const date = new Date(); 
// currentDay.forEach((value) => {
//     value.innerText = days[date.getDay()];
// });
// UTCcurrentTime.forEach(value => {
//     value.innerText = date.toUTCString();
// })


const image = document.getElementById("image")
console.log(image.naturalWidth, image.naturalHeight)
console.log(image.clientWidth, image.clientHeight);