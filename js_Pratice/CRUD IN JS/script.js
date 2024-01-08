document.title = "CRUD Operation";

const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const genderInput = document.getElementById("gender");
const domainInput = document.getElementById("domain");
const tbody = document.getElementById("tbody");
console.log(tbody);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  listData();
  nameInput.value = "";
  genderInput.value = "";
  domainInput.value = "";
});
function listData() {
  const nameValue = nameInput.value;
  const genderValue = genderInput.value;
  const domainValue = domainInput.value;
  const Data = `<tr>
  <td>${nameValue}</td>
  <td>${genderValue}</td>
  <td>${domainValue}</td>
  <td><button class="delete-btn"> Delete</button>   </td>
  <td><button class="update-btn"> Update</button>   </td>
  
  
  
  </tr>`;
  tbody.innerHTML += Data;
  deleteEvent();
  upDateEvent();
}

function deleteEvent() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.remove();
    });
  });
}
deleteEvent();

function upDateEvent() {
  const updateButtons = document.querySelectorAll(".update-btn");
  updateButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const Row = btn.parentElement.parentNode;
      console.log(Row);
      const Rowvalue = Row.querySelectorAll("td");
      console.log(Rowvalue);
      Name = Rowvalue[0].textContent;
      Gender = Rowvalue[1].textContent;
      Domain = Rowvalue[2].textContent;
      nameInput.value = Name;
      genderInput.value = Gender;
      domainInput.value = Domain;

      Row.remove();
    });
  });
}
upDateEvent();
