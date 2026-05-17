function trivia(respuesta){

    if(respuesta === 'correcto'){
        document.getElementById("resultadoTrivia").innerHTML =
        "<span class='correcto'>✅ Correcto. La percepción interpreta los estímulos.</span>";
    } else {
        document.getElementById("resultadoTrivia").innerHTML =
        "<span class='incorrecto'>❌ Incorrecto. Intenta otra vez.</span>";
    }
}

function rompecabezas(respuesta){

    if(respuesta === 'correcto'){
        document.getElementById("resultadoRompecabezas").innerHTML =
        "<span class='correcto'>✅ Correcto. El patrón alterna entre sumar 3 y multiplicar por 2.</span>";
    } else {
        document.getElementById("resultadoRompecabezas").innerHTML =
        "<span class='incorrecto'>❌ Incorrecto. Observa si el patrón alterna operaciones.</span>";
    }
}
function verificarHistoria() {
  const respuesta = document.getElementById("respuestaHistoria").value.toLowerCase().trim();
  const resultado = document.getElementById("resultadoHistoria");

  const respuestasValidas = [
    "percepción",
    "la percepción",
    "proceso de percepción",
    "percepción visual",
    "interpretación",
    "interpretación perceptiva"
  ];

  const esCorrecto = respuestasValidas.some(r => respuesta.includes(r));

  if (esCorrecto) {
    resultado.style.color = "green";
    resultado.innerText = "✔ Correcto: identificaste el proceso de percepción y la interpretación del estímulo.";
  } else {
    resultado.style.color = "red";
    resultado.innerText = "❌ No es correcto. Recuerda: no es lo que ve, sino cómo lo interpreta.";
  }
}
let seleccionActual = null;

function seleccionar(concepto) {
  seleccionActual = concepto;
}

function responder(opcion, tipo) {
  const resultado = document.getElementById("resultadoMatch");

  if (!seleccionActual) {
    resultado.style.color = "orange";
    resultado.innerText = "⚠️ Primero selecciona un concepto.";
    return;
  }

  if (seleccionActual === opcion) {
    resultado.style.color = "green";
    resultado.innerText = "✔ Correcto";
  } else {
    resultado.style.color = "red";
    resultado.innerText = "❌ Incorrecto, intenta de nuevo.";
  }

  seleccionActual = null;
}