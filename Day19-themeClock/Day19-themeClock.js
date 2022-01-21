const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (e) => {
    const html = document.querySelector("html")
    if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        e.target.innerHTML = "Dark mode"
    } else {
        html.classList.add("dark")
        e.target.innerHTML = "Light mode"
    }
})


const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setInterval(() => {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours>=13 ? hours%12 : hours
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours>=13 ? "PM" : "AM"

    timeEl.innerHTML = `${hoursForClock}:${minutes<10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]}, <span class="circle">${date}</span>`

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursForClock*30}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes*6}deg)`
    console.log(seconds)
    secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds*6}deg)`
    if (seconds == 0) {
        secondEl.style.transition = `all 0s 0.5s`
    } else {
        secondEl.style.transition = `all 0.5s ease-in`
    }

}, 1000);