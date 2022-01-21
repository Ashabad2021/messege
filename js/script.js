const m0801 = document.querySelector("#m0801");
const m0804 = document.querySelector("#m0804");
const popup__0801 = document.querySelector(".popup__0801");
const popup__0804 = document.querySelector(".popup__0804");
const back = document.querySelectorAll(".back");
const input0804 = document.querySelector(".input0804");
const pf0804 = document.querySelector(".pf0804");
const send = document.querySelector(".send");
const pop__main0804 = document.querySelector('.pop__main0804');
const pop__main0801 = document.querySelector('.pop__main0801');
const pop__body = document.querySelector('.pop__body');





pf0804.addEventListener("click", () => {
  pf0804.style.height = "100px";
  input0804.style.height = "90px";
  send.style.display = "block";
});

send.addEventListener('click',()=>{
  const myMessege = input0804.value
  console.log(myMessege);
  pop__main0801.insertAdjacentHTML('beforeend',` <div class="pop__body">
              <h1 class="pop__date">- ${date}/${month+1}/${year} -</h1>
              <div class="pop__block">
                <div class="pop__avatar">
                  <img src="./img/contact.png" alt="" />
                </div>
                <div class="pop__info">
                  <p>
                    ${date}/${month+1}/${year} ${hour+1}:${min}:${sec} ${myMessege} gecirelen 50.00 manat
                    Saklanan 0.10 manat
                  </p>
                </div>
              </div>
              <p class="time">${hour+1}:${min}</p>
            </div>`)
  // const myMessege = input0804.value
  // console.log(myMessege);
})

send.addEventListener('click',()=>{
  const myMessege = input0804.value
  console.log(myMessege);
  pop__main0804.insertAdjacentHTML('beforeend',` <div class="pop__body">
              <h1 class="pop__date">- ${date}/${month+1}/${year} -</h1>
              <div class="pop__block">
                <div class="pop__avatar">
                  <img src="./img/contact.png" alt="" />
                </div>
                <div class="pop__info">
                  <p>
                  Gecirim 50,00 manat bellenen belga ${myMessege} nobata goyulan
                  </p>
                </div>
              </div>
              <p class="time">${hour+1}:${min}</p>
            </div>`)
  // const myMessege = input0804.value
  // console.log(myMessege);
})


input0804.addEventListener("onchange", () => {
  send.style.opacity = "1";
});

m0801.addEventListener("click", () => {
  popup__0801.style.display = "block";
});

m0804.addEventListener("click", () => {
  popup__0804.style.display = "block";
});

back[0].addEventListener("click", () => {
  popup__0801.style.display = "none";
});
back[1].addEventListener("click", () => {
  popup__0804.style.display = "none";
});

const time = new Date();
const year = time.getFullYear();
const month = time.getMonth();
const date = time.getDate();
const hour = time.getHours();
const min = time.getMinutes();
const sec = time.getMinutes();
console.log(year, month + 1, date, hour, min, sec);

function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = "" + (hour > 12 ? hour - 12 : hour);
  if (hour == 0) temp = "12";
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}

// const myTime = JSClock()
// console.log(myTime);