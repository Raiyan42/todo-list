function displayDate() {
    let date = new Date();
  
    // console.log(date)
  
    let dt = date.toString().split(" ");
  
    // console.log(dt)
  
    document.getElementById("date").innerHTML = dt[1] + " " + dt[2] + " " + dt[3];
  }
  
  window.onload = function () {
    displayDate();
  
    displayItem();
  };
  
  let todoArray = localStorage.getItem("todoClassDemo")
    ? JSON.parse(localStorage.getItem("todoClassDemo"))
    : [];
  
  console.log(todoArray);
  
  let enter = document.getElementById("enter");
  
  enter.addEventListener("click", () => {
    let item = document.getElementById("item").value;
  
    todoArray.push(item);
  
    console.log(item);
  
    console.log(todoArray);
  
    localStorage.setItem("todoClassDemo", JSON.stringify(todoArray));
  
    location.reload();
  });
  
  function displayItem() {
    let item = "";
  
    for (let i = 0; i < todoArray.length; i++) {
      item += `<div>
  
  
  
      <div class="input-controller">
  
  
  
      <textarea disabled>${todoArray[i]}</textarea>
  
  
  
      <div class="edit-controller">
  
  
  
      <button class="delBtn"><i class="fa-solid fa-check"></i></button>
  
  
  
      <button class="editBtn"><i class="fa-solid fa-pencil"></i></i></button>
  
  
  
      </div>
  
  
  
      </div>
  
  
  
      <div class="update-controller">
  
  
  
      <button class="saveBtn">Save</button>
  
  
  
      <button class="cancelBtn">Cancel</button>
  
  
  
      </div>
  
  
  
      </div>`;
    }
  
    document.getElementById("to-do-list").innerHTML = item;
  
    DeleteItem();
  
    activateEditListeners();
  
    activateSaveListeners();
  
    activateCancelListeners();
  }
  
  function DeleteItem() {
    let deleteBtn = document.querySelectorAll(".delBtn");
  
    deleteBtn.forEach((db, i) => {
      db.addEventListener("click", () => {
        todoArray.splice(i, 1);
  
        localStorage.setItem("todoClassDemo", JSON.stringify(todoArray));
  
        location.reload();
      });
    });
  }
  
  function activateEditListeners() {
    const editBtn = document.querySelectorAll(".editBtn");
  
    const updateController = document.querySelectorAll(".update-controller");
  
    const inputs = document.querySelectorAll(".input-controller textarea");
  
    editBtn.forEach((eb, i) => {
      eb.addEventListener("click", () => {
        updateController[i].style.display = "block";
  
        inputs[i].disabled = false;
      });
    });
  }
  
  function activateSaveListeners() {
    const saveBtn = document.querySelectorAll(".saveBtn");
  
    const inputs = document.querySelectorAll(".input-controller textarea");
  
    saveBtn.forEach((sb, i) => {
      sb.addEventListener("click", () => {
        todoArray[i] = inputs[i].value;
  
        localStorage.setItem("todoClassDemo", JSON.stringify(todoArray));
  
        location.reload();
      });
    });
  }
  
  function activateCancelListeners() {
    const cancelBtn = document.querySelectorAll(".cancelBtn");
  
    const updateController = document.querySelectorAll(".update-controller");
  
    const inputs = document.querySelectorAll(".input-controller textarea");
  
    cancelBtn.forEach((cb, i) => {
      cb.addEventListener("click", () => {
        updateController[i].style.display = "none";
  
        inputs[i].disabled = true;
  
        location.reload();
      });
    });
  }
  