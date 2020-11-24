const Elements = document.querySelectorAll(".elements");
const Time12 = document.querySelector(".time12");
const Time24 = document.querySelector(".time24");
const NextBtn = document.querySelector(".next-content");
const PrevBtn = document.querySelector(".pre-content");
let count = 0;

function Clock() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let hours = today.getHours();
    let ampm = "AM";
    if (hour > 11) ampm = "PM";
    if (hour > 11) hour = hour - 12;
    if (hour == 0) hour = 12;
    if (hour < 10) hour = "0" + hour;
    if (second < 10) second = "0" + second;
    if (minute < 10) minute = "0" + minute;
    if (hours < 10) hours = "0" + hours;
    let TwelveTime = hour + ":" + minute + ":" + second + " " + ampm;
    let TwentyFourTime = hours + ":" + minute + ":" + second;
    Time12.innerText = TwelveTime;
    Time24.innerText = TwentyFourTime;
}
function AnalogClock() {
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");
    let today = new Date();
    let hh = today.getHours() * 30;
    let mm = today.getMinutes() * 6;
    let ss = today.getSeconds() * 6;
    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}
function Calendar() {
    let date = new Date();
    function CalendarDiv() {
        let monthDays = document.querySelector(".days");
        let lastDate = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();
        let prevLastDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();
        let nextLastDate = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();
        let firstDayIndex =
            new Date(date.getFullYear(), date.getMonth(), 0).getDay() + 1;
        let nextDays = 6 - nextLastDate;
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        document.querySelector(".date p").innerHTML = date.getFullYear(); // new Date().toDateString();
        document.querySelector(".date h1").innerHTML = months[date.getMonth()];
        let days = "";

        if (firstDayIndex == 7) firstDayIndex = 0;
        for (let x = firstDayIndex; x > 0; x--) {
            days += `<div class="prev-date">${prevLastDate - x + 1}</div>`;
        }
        for (let i = 1; i <= lastDate; i++) {
            if (
                i === new Date().getDate() &&
                date.getMonth() === new Date().getMonth() &&
                date.getFullYear() === new Date().getFullYear()
            ) {
                days += `<div class="today">${i}</div>`;
            } else {
                days += `<div>${i}</div>`;
            }
        }
        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="next-date">${j}</div>`;
        }
        monthDays.innerHTML = days;
        const AllDates = document.querySelectorAll(".days div");
        for (let z = 0; z < AllDates.length; z++) {
            if (z % 7 == 0) {
                AllDates[z].classList.add("sunday");
            }
        }
    }
    CalendarDiv();
    document.querySelector(".prev").addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        CalendarDiv();
    });
    document.querySelector(".next").addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        CalendarDiv();
    });
}
function SetProerty(a) {
    Elements.forEach((element) => {
        element.classList.add("hide");
    });
    Elements[a].classList.remove("hide");
}
for (let b = 1; b < Elements.length; b++) {
    Elements[b].classList.add("hide");
}
NextBtn.addEventListener("click", function () {
    count++;
    if (count > Elements.length - 1) count = 0;
    SetProerty(count);
});
PrevBtn.addEventListener("click", function () {
    count--;
    if (count < 0) count = Elements.length - 1;
    SetProerty(count);
});
setInterval(Clock, 1000);
setInterval(AnalogClock, 1000);
Calendar();
