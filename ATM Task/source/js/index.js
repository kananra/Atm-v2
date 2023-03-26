const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const registerInputs = document.querySelectorAll(".register input");
const loginbtn = document.querySelector(".btn");
const loginName = document.querySelector(".name");
const loginPass = document.querySelector(".password");
const loginPage = document.querySelector("#login");
const aboutPage = document.querySelector(".balance");
const balance = document.querySelector(".money");
const deposit = document.querySelector(".deposit-btn");
const depositPage = document.querySelector(".deposit");
// const depositBtn = document.querySelector(".deposit-money");
const withdraw = document.querySelector(".withdraw-btn");
const withdrawPage = document.querySelector(".withdraw");
const send = document.querySelector(".send-btn");
const sendPage = document.querySelector(".send-money");
const time = document.querySelector(".time");
const submitBtn = document.querySelector(".submit-btn");
const sendMoney = document.querySelector(".send-money");
const inputAmount = document.querySelector(".card-amount-input");
const timeDiv = document.getElementById("time");
const newTime = document.createElement("li");
const transition=document.querySelector(".transition");
const historyBtn=document.querySelector(".history-btn");



registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

loginbtn.addEventListener("click", () => {
  if (loginName.value === "admin" && loginPass.value === "admin") {
    loginPage.style.display = "none";
    aboutPage.style.display = "block";
  }
});

deposit.addEventListener("click", () => {
  withdrawPage.style.display = "none";
  sendPage.style.display = "none";
  transition.style.display="none";
  if (depositPage.style.display === "none") {
    depositPage.style.display = "block";
  } else {
    depositPage.style.display = "none";
  }
});

// depositBtn.addEventListener("click",getValue());

// function getValue(){
//     const input = document.getElementById("input-money");
//     const value=Number(input.value);
//     console.log(value);
// }

let wallet = 0;

function getValue() {
  const input = document.getElementById("input-money");
  const value = Number(input.value);
  wallet += value;
  balance.innerHTML = wallet + "$";
  addHistory("+"+value);
}

function withdrawValue() {
  if (wallet > 0) {
    const input = document.getElementById("withdraw-money");
    const value = Number(input.value);

    if (wallet - value >= 0) {
      wallet -= value;
      balance.innerHTML = wallet + "$";
      addHistory(-value);
    } else {
      alert("You don't have enough money in your balance");
    }
  } else {
    alert("You don't have enough money in your balance");
  }
}

withdraw.addEventListener("click", () => {
  depositPage.style.display = "none";
  sendPage.style.display = "none";
  transition.style.display="none";
  if (withdrawPage.style.display === "none") {
    withdrawPage.style.display = "block";
  } else {
    withdrawPage.style.display = "none";
  }
});

send.addEventListener("click", () => {
  depositPage.style.display = "none";
  withdrawPage.style.display = "none";
  transition.style.display="none";
  if (sendPage.style.display === "none") {
    sendPage.style.display = "block";
  } else {
    sendPage.style.display = "none";
  }
});

historyBtn.addEventListener("click",()=>{
  depositPage.style.display = "none";
  withdrawPage.style.display = "none";
  sendPage.style.display = "none";
  if (transition.style.display === "none") {
    transition.style.display = "block";
  } else {
    transition.style.display = "none";
  }

});




document.querySelector(".card-number-input").oninput = () => {
  document.querySelector(".card-number-box").innerText =
    document.querySelector(".card-number-input").value;
};

document.querySelector(".card-holder-input").oninput = () => {
  document.querySelector(".card-holder-name").innerText =
    document.querySelector(".card-holder-input").value;
};

document.querySelector(".month-input").oninput = () => {
  document.querySelector(".exp-month").innerText =
    document.querySelector(".month-input").value;
};

document.querySelector(".year-input").oninput = () => {
  document.querySelector(".exp-year").innerText =
    document.querySelector(".year-input").value;
};

document.querySelector(".cvv-input").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};

document.querySelector(".cvv-input").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".cvv-input").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector(".cvv-input").value;
};

function updateTime() {
  if (sendMoney.style.display === "none") {
    sendMoney.style.display = "block";
  } else {
    sendMoney.style.display = "none";
  }
  if (wallet > 0) {
    const value = Number(inputAmount.value);

    if (wallet - value >= 0) {
      wallet -= value;
      balance.innerHTML = wallet + "$";
     addHistory(-inputAmount.value);
    } else {
      alert("You don't have enough money in your balance");
    }
  } else {
    alert("You don't have enough money in your balance");
  }
}

function addHistory(amount) {
  const date = new Date();
  const history = amount+"<br>" + date.toLocaleString()+"<br>";
  newTime.innerHTML += history;
  timeDiv.appendChild(newTime);
}

submitBtn.addEventListener("click", updateTime);



















