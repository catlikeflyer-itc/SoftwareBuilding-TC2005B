/**
 * Actividad 2 - Eventos y DOM
 * Do Hyun Nam A01025276
 */

//DOM Elements
const body = document.body;
const nameForm = document.getElementById("form1");
const rowsColsForm = document.getElementById("rows-cols");
const table = document.getElementById("sampleTable");
const table2 = document.getElementById("myTable");
const image = document.querySelector("img");

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
  const cols = table.querySelector("tr").childElementCount;
  const rows = table.querySelectorAll("tr").length;
  table.innerHTML += `<tr></tr>`;
  for (let i = 0; i < cols; i++) {
    table.querySelectorAll("tr")[rows].innerHTML += `<td>Row ${
      rows + 1
    } column ${i + 1}</td>`;
  }
};

const insertColumn = () => {
  const cols = table.querySelector("tr").childElementCount;
  table.querySelectorAll("tr").forEach((row) => {
    row.innerHTML += `<td>Row ${row.rowIndex + 1} column ${cols + 1}</td>`;
  });
};

// Modificar datos en tabla
const changeContent = (event) => {
  event.preventDefault();

  const maxRows = table2.querySelectorAll("tr").length;
  const maxCols = table2.querySelector("tr").childElementCount;
  const inputRow = rowsColsForm.rowPos.value;
  const inputCol = rowsColsForm.colPos.value;

  if (inputRow && inputCol) {
    if (inputRow <= maxRows && inputCol <= maxCols) {
      table2.querySelectorAll("tr")[inputRow - 1].querySelectorAll("td")[
        inputCol - 1
      ].innerHTML = rowsColsForm.content.value;
    } else {
      rowsColsForm.innerHTML += `<p>Please enter valid information</p>`;
    }
  }
};

// Agregar y quitar colores
const addColor = () => {
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Black",
    "White",
  ];
  function randomColor(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  document.getElementById("colorSelect").innerHTML += `<option>${randomColor(
    colors
  )}</option>`;
};

const removeColor = () => {
  const parent = document.getElementById("colorSelect");
  const lastChild = document.getElementById("colorSelect").lastElementChild;
  parent.removeChild(lastChild);
};

// Tamano de imagen
const imageSize = (event) => {
  event.preventDefault()

  function randInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  image.style.width = randInt(100, 300) + "px";
  image.style.height = randInt(100, 300) + "px";
}

function main() {
  body.addEventListener("mousemove", mouseMove);
  nameForm.addEventListener("submit", getFormvalue);
  rowsColsForm.addEventListener("submit", changeContent);
  image.addEventListener("mouseenter", imageSize);

}
