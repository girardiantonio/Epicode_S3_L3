let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

// Aggiungi evento al pulsante "Aggiungi"
addButton.onclick = addElement;

// Funzione per aggiungere un compito alla lista
function addElement() {
  let taskText = taskInput.value.trim();
  if (taskText !== "") {
    let taskItem = document.createElement("li");
    taskItem.innerText = taskText;
    taskItem.onclick = compElement;
    taskItem.ondblclick = removeElement;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

// Funzione per rimuovere un compito dalla lista
function removeElement() {
  this.parentNode.removeChild(this);
}

// Funzione per segnare un compito come completato
function compElement() {
  this.classList.toggle("completed");
}

