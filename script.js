let selectedSquare = null;

// Función para seleccionar un cuadrado
function selectSquare(id) {
    selectedSquare = id;
    document.getElementById("square-id").value = id;
    document.getElementById("date").value = '';
    document.getElementById("disinfection").value = 'SIN DESINFECTAR';
    document.querySelector(".side-panel").style.display = 'block';
}

// Función para actualizar el estado del cuadrado
function updateSquareStatus() {
    if (!selectedSquare) {
        alert("Por favor, selecciona un cuadrado primero.");
        return;
    }

    const date = document.getElementById("date").value;
    const disinfection = document.getElementById("disinfection").value;

    // Guardar los datos en localStorage
    const squareData = { date, disinfection };
    localStorage.setItem(`square-${selectedSquare}`, JSON.stringify(squareData));

    // Actualizar visualmente el cuadrado
    const square = document.getElementById(`square-${selectedSquare}`) || document.getElementById(`square-batch1`) || document.getElementById(`square-batch5`);
    const statusElement = square.querySelector(".status");
    const disinfectedElement = square.querySelector(".disinfected");

    statusElement.textContent = `LAVADA - ${date}`;
    disinfectedElement.textContent = disinfection;
    disinfectedElement.style.backgroundColor = disinfection === "DESINFECTADA" ? "#4CAF50" : "#FF6347";
}

// Función para limpiar los datos del cuadrado
function clearData() {
    if (!selectedSquare) {
        alert("Por favor, selecciona un cuadrado primero.");
        return;
    }

    localStorage.removeItem(`square-${selectedSquare}`);
    const square = document.getElementById(`square-${selectedSquare}`) || document.getElementById(`square-batch1`) || document.getElementById(`square-batch5`);
    const statusElement = square.querySelector(".status");
    const disinfectedElement = square.querySelector(".disinfected");

    statusElement.textContent = "LAVADA";
    disinfectedElement.textContent = "SIN DESINFECTAR";
    disinfectedElement.style.backgroundColor = "#FF6347";

    // Limpiar la sección lateral
    document.getElementById("square-id").value = '';
    document.getElementById("date").value = '';
    document.getElementById("disinfection").value = 'SIN DESINFECTAR';
}
