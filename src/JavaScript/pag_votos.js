let votos = {
    opcionA: 0,
    opcionB: 0
};

let chart;

function votar(opcion) {
    votos[opcion]++;
    actualizarGrafica();
}

function borrarVotos() {
    votos.opcionA = 0;
    votos.opcionB = 0;
    actualizarGrafica();
}

function actualizarGrafica() {
    if (!chart) {
        const ctx = document.getElementById('graficaVotos').getContext('2d');
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Opción A', 'Opción B'],
                datasets: [{
                    label: 'Ocultar Votos',
                    data: [votos.opcionA, votos.opcionB],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        chart.data.datasets[0].data = [votos.opcionA, votos.opcionB];
        chart.update();
    }
}

window.onload = () => {
    actualizarGrafica();
};