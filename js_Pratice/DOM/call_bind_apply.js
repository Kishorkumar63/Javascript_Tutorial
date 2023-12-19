const Name = document.querySelector("#name");
const Age = document.querySelector("#age");
const btn = document.getElementById("btn");
loadStoredData()
document.addEventListener("DOMContentLoaded", function () {
  const dataForm = document.getElementById("dataForm");
  const dataInput = document.getElementById("dataInput");
  const dataList = document.getElementById("dataList");
  dataForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const data=dataInput.value.trim();
    if(data)
    {
addToLocalStorage(data)
    }
    else{
  
  dataInput.focus();
    }
  });
});
function addToLocalStorage(data) {
  const storeData=JSON.parse(localStorage.getItem("myData"))||[]
  storeData.push(data)
  localStorage.setItem("myData",JSON.stringify(storeData))

  }
  function loadStoredData() {
    const storedData = JSON.parse(localStorage.getItem("myData")) || [];
    dataList.innerHTML = "";
    storedData.forEach((data, index) => {
      /*
      const li = document.createElement("li");
      li.textContent = data;
      dataList.appendChild(li);
      */
      let output = `
          <li>
          ${data}
          <div>
            <button class='btnEdit' data-index='${index}' >Edit</button>
            <button class='btnDelete'data-index='${index}' >Delete</button>
          </div>
           <li>
     `;
      dataList.innerHTML += output;
    });
}


const delButtons = document.querySelectorAll(".btnDelete");
delButtons.forEach((btn) => {
  btn.addEventListener("click", deleteData);
});
const editButtons = document.querySelectorAll(".btnEdit");
editButtons.forEach((btn) => {
  btn.addEventListener("click", editData);
});


//To Delete A User from LocalStorage
function deleteData() {
if (confirm("Are Your Sure to Delete")) {
  const index = this.dataset.index;
  const storedData = JSON.parse(localStorage.getItem("myData")) || [];
  storedData.splice(index, 1);
  localStorage.setItem("myData", JSON.stringify(storedData));
  loadStoredData();
}
}

//To Modify User Data
function editData() {
const index = this.dataset.index;
const storedData = JSON.parse(localStorage.getItem("myData")) || [];
const newData = prompt("Edit Username", storedData[index]);
if (newData !== null) {
  storedData[index] = newData.trim();
  localStorage.setItem("myData", JSON.stringify(storedData));
  loadStoredData();
}
}
