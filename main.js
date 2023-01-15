//Capturo los elementos con los que voy a interactuar
const input = document.querySelector("input");       //Capturo el input y lo almaceno en una constante
const addBtn = document.querySelector(".btn-add");   //Capturo el btn-add y lo almaceno en una constante
const ul = document.querySelector("ul");             //Capturo el ul y lo almaceno en una constante 
const empty = document.querySelector(".empty");      //Capturo el .empty y lo almaceno en una constante
const eliminarAll = document.querySelector(".btn-eliminar-all"); // <--- codigo adicional para el reto

eliminarAll.style.display = "none";  // <--- codigo adicional para el reto

eliminarAll.addEventListener("click", () => { // <--- codigo adicional para el reto
  ul.innerHTML = "";                          // <--- codigo adicional para el reto
  eliminarAll.style.display = "none";         // <--- codigo adicional para el reto
});


addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
    eliminarAll.style.display = "block";  // <--- codigo adicional para el reto
  }
});


function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";


  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
      eliminarAll.style.display = "none";  // <--- codigo adicional para el reto
    }
  });

  return deleteBtn;
}
