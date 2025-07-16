document.addEventListener('DOMContentLoaded', function () {
    const calcularBtn = document.getElementById('calcularBtn');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', function() {
        // Obtener valores de los inputs
        const edad = parseInt(document.getElementById('edad').value);
        const estaturaCm = parseFloat(document.getElementById('estatura').value);
        const peso = parseFloat(document.getElementById('peso').value);

        // Validar que los campos no estén vacíos y sean números válidos
        if (isNaN(edad) || isNaN(estaturaCm) || isNaN(peso) || edad <= 0 || estaturaCm <= 0 || peso <= 0) {
            mostrarError("Por favor, ingresa valores válidos en todos los campos.");
            return;
        }

        // Calcular el IMC
        const estaturaM = estaturaCm / 100; // Convertir cm a metros
        const imc = peso / (estaturaM * estaturaM);
        const imcRedondeado = imc.toFixed(1); // Redondear a 1 decimal

        // Determinar el estado y el color
        let estado = '';
        let claseColor = '';

        if (imc < 18.5) {
            estado = 'Bajo Peso';
            claseColor = 'amarillo'; // Riesgo
        } else if (imc >= 18.5 && imc < 24.9) {
            estado = 'Peso Normal';
            claseColor = 'verde'; // Normal
        } else if (imc >= 25 && imc < 29.9) {
            estado = 'Sobrepeso';
            claseColor = 'amarillo'; // Riesgo
        } else {
            estado = 'Obesidad';
            claseColor = 'rojo'; // Peligro
        }

        mostrarResultado(imcRedondeado, estado, claseColor);
    });

    function mostrarResultado(imc, estado, clase) {
        resultadoDiv.innerHTML = `
            <div class="resultado-box ${clase}">
                <h3>Tu Índice de Masa Corporal (IMC) es:</h3>
                <h2 class="display-4 fw-bold">${imc}</h2>
                <p class="lead">Estado: <strong>${estado}</strong></p>
            </div>
        `;
        // Añadir la clase 'visible' para activar la animación de aparición
        resultadoDiv.classList.add('visible');
    }

    function mostrarError(mensaje) {
        resultadoDiv.innerHTML = `
            <div class="alert alert-danger mt-4">${mensaje}</div>
        `;
        resultadoDiv.classList.add('visible');
    }
});