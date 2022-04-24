/**
 * Actividad 2 - Eventos y DOM
 * Do Hyun Nam A01025276
 */

//DOM Elements
const body = document.body;
const nameForm = document.getElementById("form1");
const table = document.getElementById("sampleTable");

// Mouse position
const mouseMove = (event) => {
  var mouseElement = document.getElementById("mouse-pos");
  var position =
    "X Coordinate: " + event.clientX + " Y Coordinate: " + event.clientY;
  mouseElement.innerHTML = position;
};

// Nombre completo
const getFormvalue = (event) => {
  event.preventDefault();
  const fullName = document.getElementById("full-name");
  // Checar que ambos esten llenos
  if (nameForm["fname"].value && nameForm["lname"].value) {
    fullName.innerHTML = nameForm.fname.value + " " + nameForm.lname.value;
  } else {
    fullName.innerHTML = "Please fill out both fields";
  }
};

// Agregar tablas
const insertRow = () => {
  const rows = table.querySelectorAll("tr").length;
  table.innerHTML += `<tr></tr>`;
  for (let i = 0; i < cols; i++) {
    table.querySelectorAll("tr")[rows].innerHTML += `<td>Row ${
      rows + 1
    } column ${i+1}</td>`;
  }

  console.log("works");
};

const insertColumn = () => {
  const rows = table.querySelectorAll("tr").length;
  const cols = table.querySelector("tr").childElementCount;
  

  
}

function main() {
  body.addEventListener("mousemove", mouseMove);
  nameForm.addEventListener("submit", getFormvalue);
}
