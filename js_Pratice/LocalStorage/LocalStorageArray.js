document.title = "LocalStorageArray";
document.addEventListener("DOMContentLoaded", function () {
  const dataForm = document.getElementById("data-from");
  const dataInput = document.getElementById("dataInput");
  const dataList = document.getElementById("dataList");
  loadStoredData();

  dataForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = dataInput.value.trim();
    if (data !== "") {
      addLocalStorage(data);
      loadStoredData();
      dataInput.value = "";
    } else {
      alert("Please Enter The Data");
      dataInput.focus();
    }
  });
  //Add New Data To LocalStorage
  function addLocalStorage(data) {
    const storedData = JSON.parse(localStorage.getItem("mydata")) || [];
    storedData.push(data);
    localStorage.setItem("mydata", JSON.stringify(storedData));
  }

  // Loda all Data in LocalStorage
  function loadStoredData() {
    const storedData = JSON.parse(localStorage.getItem("mydata")) || [];
    dataList.innerHTML = "";
    storedData.forEach((data, index) => {
      // const li=document.createElement("li")
      // li.textContent=data;
      // dataList.appendChild(li)
      let outPut = `

<li>
${data}
<div class="edit-delete-button">
  <button class="btnEdit" data-index="${index}">Edit</button>
  <button class="btn-delete"  data-index="${index}">Delete</button>
</div>
</li>

`;
      dataList.innerHTML += outPut;
    });

    const delButton = document.querySelectorAll(".btn-delete");
    delButton.forEach((btn) => {
      btn.addEventListener("click", deleteData);
    });
    const editButton = document.querySelectorAll(".btnEdit");
    editButton.forEach((btn) => {
      btn.addEventListener("click", editData);
    });

    ///To Delete A User From LocalStorage

    function deleteData() {
      const index = this.dataset.index;
      console.log(index);
      const storedData = JSON.parse(localStorage.getItem("mydata")) || [];
      storedData.splice(index, 1);
      localStorage.setItem("mydata", JSON.stringify(storedData));
      loadStoredData();
    }

    //To modfiy user data

    function editData() {
      const index = this.dataset.index;
      console.log(index);

      const storedData = JSON.parse(localStorage.getItem("mydata")) || [];
      const newData = prompt("Edit user Name", storedData[index]);

      if (newData !== null) {
        storedData[index] = newData.trim();
        localStorage.setItem("mydata", JSON.stringify(storedData));
        loadStoredData();
      }
    }
  }
});
