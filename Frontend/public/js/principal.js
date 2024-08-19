$(document).ready(function() {
    fetchEmpresas();

    // Función para obtener empresas y renderizarlas en caja1
    function fetchEmpresas() {
        $.get("http://localhost:4000/empresas/get", function(data) {
            let content = "";
            data.forEach(empresa => {
                content += `
                    <div class="inner-box" data-toggle="modal" data-target="#myModal1">
                        <div id="titulo-cajas"><i class="fa-solid fa-building"></i> <h5>${empresa.nombre}</h5></div>
                        <p style="color: #B2B2B2;">${empresa.direccion}</p>
                        <p style="color: #B2B2B2;">${empresa.descripcion}</p>
                    </div>
                `;
            });
            $("#caja1").html(content);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    fetchPuestos();

    // Función para obtener puestos
    function fetchPuestos() {
        fetch("http://localhost:4000/puestos/get")
            .then(response => response.json())
            .then(data => {
                let content = "";
                data.forEach(puesto => {
                    content += `
                        <div class="inner-box" data-toggle="modal" data-target="#myModal2" onclick="renderContrato(${puesto.id_puesto}, ${puesto.id_tipo_contrato}, ${puesto.id_solicitud})">
                            <div id="titulo-cajas"><i class="fa-solid fa-briefcase"></i><h5>${puesto.Tipo_Puesto}</h5></div>
                            <p style="color: #B2B2B2;">${puesto.tipo_contrato}</p>
                            <p style="color: #B2B2B2;">Sueldo: ${puesto.Sueldo}</p>
                        </div>
                    `;
                });
                document.getElementById("caja2").innerHTML = content;
            })
            .catch(error => console.error('Error al obtener los puestos:', error));
    }
});

function renderContrato(id_puesto, id_tipo_contrato, id_solicitud) {
    // Guardar id_solicitud en localStorage
    localStorage.setItem('id_solicitud', id_solicitud);

    //solicitud para obtener los detalles del contrato
    fetch(`http://localhost:4000/contrato/${id_puesto}/${id_tipo_contrato}`)
        .then(response => response.json())
        .then(data => {
            const modalBody = `
                <div id="ventana2" class="modal-body">
                    <h5>${data.nombre_puesto}</h5>
                    <h6>${data.tipo_puesto}</h6>
                    <h6>${data.empresa}</h6>
                    <p>Sueldo: ${data.sueldo}</p>
                    <h6>Requisitos:</h6>
                    <div id="requisitosMod">
                        ${data.requisitos.map(req => `<p>${req}</p>`).join('')}
                    </div>
                    <h6>${data.tipo_contrato}</h6>
                </div>
            `;

            // Renderizar los datos en el modal
            document.querySelector('.modal-body').innerHTML = modalBody;
        })
        .catch(error => console.error('Error al obtener los detalles del contrato:', error));
}
function postularPuesto() {
    // IDs del localStorage
    const id_solicitud = localStorage.getItem('id_solicitud');
    const id_solicitante = localStorage.getItem('personaID');

    const body = {
        id_solicitud: id_solicitud,
        id_solicitante: id_solicitante
    };

    fetch('http://localhost:4000/personas/apliTrabajo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Solicitud enviada exitosamente:', data);
        
    })
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
    });
}