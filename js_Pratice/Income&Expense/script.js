const balance = document.querySelector("#balance");
const inc_amt = document.querySelector("#inc-amt");
const exp_amt = document.querySelector("#exp-amt");
const trans = document.querySelector("#trans");
const form = document.querySelector("#form");
const description = document.querySelector("#desc");
const amount = document.querySelector("#amount");

// const dummyData = [
//   { id: 1, description: "Flower", amount: -20 },
//   { id: 2, description: "Salary", amount: +300 },
//   { id: 3, description: "Book", amount: -10 },
//   { id: 4, description: "Camera", amount: +150 },
//   { id: 5, description: "Petrol", amount: -250 },
// ];

const localStorageTrans = JSON.parse(localStorage.getItem("exp_inc"));
let transactions =
  localStorage.getItem("exp_inc") !== null ? localStorageTrans : [];

function loadTransactions(transactions) {
  const Sign = transactions.amount < 0 ? "+" : "-";
  const item = document.createElement("li");
  item.classList.add(transactions.amount < 0 ? "exp" : "inc");
  item.innerHTML = `${transactions.description}
<span>${Sign} ${Math.abs(transactions.amount)}</span>
<button class="btn-del" onclick="removeTrans(${transactions.id})">x</button>
  
  
  `;
  trans.appendChild(item);
}
function removeTrans(id) {
  if (confirm("Are You Sure Delete The Transaction ?")) {
    transactions = transactions.filter((transaction) => transaction.id != id);
    //after delete Record Reload remaing Records
    config();
    updateLocalStorage();
  } else {
    return;
  }
}

function updateAount() {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //toFixed(2) it print decimal value
  balance.innerText = `₹ ${total}`;
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  inc_amt.innerHTML = `₹ ${income}`;
  //convert Positive method  (amounts
  // .filter((item) => item < 0)
  // .reduce((acc, item) => (acc += item), 0)*-1)
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  exp_amt.innerHTML = `₹ ${expense}`;
}
function config() {
  trans.innerHTML = "";
  transactions.forEach(loadTransactions);
  updateAount();
  updateLocalStorage();
}

function addTransactions(e) {
  e.preventDefault();
  if (description.value == "" || amount.value == "") {
    alert("Please Enter The Description And Amount");
  } else {
    const transaction = {
      id: idGengerate(),
      description: description.value,
      amount: +amount.value,
    };
    //  amount:+amount.value,=>String convert Into Number
    transactions.push(transaction);
    loadTransactions(transaction);
    description.value = "";
    amount.value = "";
    updateAount();
  }
}
function idGengerate() {
  return Math.floor(Math.random() * 10000);
}

form.addEventListener("submit", addTransactions);

window.addEventListener("load", function () {
  config();
});

function updateLocalStorage() {
  localStorage.setItem("exp_inc", JSON.stringify(transactions));
}
