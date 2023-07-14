function ver_cálculo() {
  var figura_elegida = document.getElementById("figura").value;
  var calculoDiv = document.getElementById("calculo");
  calculoDiv.innerHTML = "";

  if (figura_elegida === "triangulo") {
      calculoDiv.innerHTML = generarFormularioTriangulo();
      document.getElementById("calcularPerimetro").onclick = PerimetroTriangulo;
      document.getElementById("calcularArea").onclick = AreaTriangulo;
  } else if (figura_elegida === "circulo") {
      calculoDiv.innerHTML = generarFormularioCirculo();
      document.getElementById("calcularPerimetro").onclick = PerimetroCirculo;
      document.getElementById("calcularArea").onclick = AreaCirculo;
  } else if (figura_elegida === "esfera") {
      calculoDiv.innerHTML = generarFormularioEsfera();
      document.getElementById("calcularVolumen").onclick = VolumenEsfera;
      document.getElementById("calcularArea").onclick = AreaEsfera;
  }
}

function generarFormularioTriangulo() {
  return `
      <h3>Triángulo</h3>
      <p>Ingrese los valores de los tres lados:</p>
      <label for="lado1">Lado 1:</label>
      <input type="number" id="lado 1">
      <br>
      <label for="lado2">Lado 2:</label>
      <input type="number" id="lado 2">
      <br>
      <label for="lado3">Lado 3:</label>
      <input type="number" id="lado 3">
      <br>
      <button id="calcularPerimetro">Calcular Perímetro</button>
      <br>
      <p>Ingrese los valores de la base y la altura:</p>
      <label for="base">Base:</label>
      <input type="number" id="base">
      <br>
      <label for="altura">Altura:</label>
      <input type="number" id="altura">
      <br>
      <button id="calcularArea">Calcular Área</button>
  `;
}

function generarFormularioCirculo() {
  return `
      <h3>Círculo</h3>
      <p>Ingrese el radio del círculo:</p>
      <label for="radio">Radio:</label>
      <input type="number" id="radio">
      <br>
      <button id="calcularPerimetro">Calcular Perímetro</button>
      <br>
      <button id="calcularArea">Calcular Área</button>
  `;
}

function generarFormularioEsfera() {
  return `
      <h3>Esfera</h3>
      <p>Ingrese el radio de la esfera:</p>
      <label for="radio">Radio:</label>
      <input type="number" id="radio">
      <br>
      <button id="calcularVolumen">Calcular Volumen</button>
      <br>
      <button id="calcularArea">Calcular Área</button>
  `;
}

function PerimetroTriangulo() {
  var lado1 = parseFloat(document.getElementById("lado 1").value);
  var lado2 = parseFloat(document.getElementById("lado 2").value);
  var lado3 = parseFloat(document.getElementById("lado 3").value);
  var perimetro = lado1 + lado2 + lado3;
  alert("El perímetro del triángulo es: " + perimetro);
}

function AreaTriangulo() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var area = (base * altura) / 2;
  alert("El área del triángulo es: " + area);
}

function PerimetroCirculo() {
  var radio = parseFloat(document.getElementById("radio").value);
  var perimetro = 2 * Math.PI * radio;
  alert("El perímetro del círculo es: " + perimetro);
}

function AreaCirculo() {
  var radio = parseFloat(document.getElementById("radio").value);
  var area = Math.PI * radio * radio;
  alert("El área del círculo es: " + area);
}

function VolumenEsfera() {
  var radio = parseFloat(document.getElementById("radio").value);
  var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
  alert("El volumen de la esfera es: " + volumen);
}

function AreaEsfera() {
  var radio = parseFloat(document.getElementById("radio").value);
  var area = 4 * Math.PI * radio * radio;
  alert("El área de la esfera es: " + area);
}
