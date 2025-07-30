// get references from tag ids in HTML
let rawDate = document.getElementById('raw-date')
let today = document.getElementById('today')
let formattedDate = document.getElementById('formatted-date')
let formattedTime = document.getElementById('formatted-time')



// Arrow Funcitons - Shortcut for functions declarations
// if 1 digit format to e.g: 01, 02. 09, else retain e.g: 10, 11, 12
const formatNum = (num) => num < 10 ? `0${num}` : num;


const changeName = () => {
    let guest = document.getElementById('guest')
    let nameInput = document.getElementById('name')
    const guestName = nameInput.value

    guest.innerText = `Hi ${guestName}! The time is:`
}
// Shortcut string concatenation
// let a = "a" + "a" = "aa"
// let b = "b"
// let c = `String 1: ${a}, String 2: ${b}`
// output: String 1: aa, String 2: b

const now = new Date()
// dd/mm/yyyy
const dd = now.getDate() + 1
const mm = now.getMonth()
const yyyy = now.getFullYear()
// h:m:s
const h = now.getHours()
const m = now.getMinutes()
const s = now.getSeconds()
// am or pm
const prepand = h <= 12 ? "AM" : "PM"

const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

// set all content 
rawDate.innerText = `Raw Date: ${now}`
today.innerText = `Today is ${DAYS[mm]}, ${mm}/${dd}/${yyyy}, `
formattedDate.innerText = `Formatted Date (dd/mm/yyyy): ${dd}/${mm}/${yyyy}`
formattedTime.innerText = `Formatted Time (h:m:s am/pm): ${formatNum(h)}:${formatNum(m)}:${formatNum(s)} ${prepand}`
