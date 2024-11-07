// script.js

function calcularCosto(event) {
    event.preventDefault();

    // Obtener valores de los campos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const origen = document.getElementById("origen").value.trim();
    const destino = document.getElementById("destino").value.trim();
    const fecha = document.getElementById("fecha").value;
    const cantidadCajas = parseInt(document.getElementById("cantidadCajas").value) || 0;
    const cantidadMuebles = parseInt(document.getElementById("cantidadMuebles").value) || 0;

    // Validación de campos obligatorios
    if (!nombre || !telefono || !email || !origen || !destino || !fecha) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    // Parámetros de cálculo
    const distanciaBase = 450; // distancia estimada en kilómetros
    const tarifaPorKm = 200; // tarifa en pesos por kilómetro
    const costoBase = 20000; // costo base por servicio
    const costoPorCaja = 50; // costo adicional por cada caja
    const costoPorMueble = 300; // costo adicional por cada mueble/electrodoméstico

    // Cálculo del costo total
    const costoPorDistancia = distanciaBase * tarifaPorKm;
    const costoCajas = cantidadCajas * costoPorCaja;
    const costoMuebles = cantidadMuebles * costoPorMueble;
    const costoEstimado = costoBase + costoPorDistancia + costoCajas + costoMuebles;

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = `
        <div class="alert alert-success mt-3">
            <h5>Cotización Estimada</h5>
            <p>Para la mudanza de ${origen} a ${destino}, el costo estimado es de: <strong>$${costoEstimado.toFixed(2)}</strong></p>
            <p>Detalles:</p>
            <ul>
                <li>Distancia: ${distanciaBase} km x $${tarifaPorKm}/km = $${costoPorDistancia}</li>
                <li>Cajas: ${cantidadCajas} x $${costoPorCaja} = $${costoCajas}</li>
                <li>Muebles/Electrodomésticos: ${cantidadMuebles} x $${costoPorMueble} = $${costoMuebles}</li>
            </ul>
        </div>
    `;
}



/*function calculateCost() {
    const distance = parseFloat(document.getElementById('distance').value);
    const boxes = parseInt(document.getElementById('boxes').value);
    const costPerKm = 10; // Precio por kilómetro
    const costPerBox = 5; // Precio por caja

    if (!isNaN(distance) && !isNaN(boxes)) {
        const totalCost = (distance * costPerKm) + (boxes * costPerBox);
        document.getElementById('result').textContent = `El costo estimado es: $${totalCost.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Por favor, ingresa valores válidos.';
    }
}

// Validación del formulario y envío (simulado)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert('Formulario enviado correctamente');
    } else {
        alert('Por favor, completa todos los campos');
    }
});*/
// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Animación de desvanecimiento para las secciones
    let sections = document.querySelectorAll(".container, .jumbotron, .card");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = "opacity 1s";
        setTimeout(() => {
            section.style.opacity = 1;
        }, 300);
    });
});

