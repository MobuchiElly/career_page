const UTCcurrentTime = document.querySelectorAll(".UTC-current-time");
const currentDay = document.querySelectorAll(".current-day");

const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]
const date = new Date(); 
currentDay.forEach((value) => {
    value.innerText = days[date.getDay()];
});
UTCcurrentTime.forEach(value => {
    value.innerText = date.toUTCString();
})



//Check to ensure the naturalWidth and naturalHeight are not altered
const image = document.getElementById("image");
const {naturalWidth, naturalHeight, width, height} = image;
naturalWidth === 0 || naturalHeight === 0 ? window.alert("The natural dimension of the image property has been altered") : null;

