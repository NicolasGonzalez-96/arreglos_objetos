const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },

    {
        nombre: 'Casa Acogedora',
        src: 'https://images.adsttc.com/media/images/622b/9c0b/6a2b/af01/6506/d38b/slideshow/004-ok.jpg?1647025197',
        descripcion: 'Bonita casa en zona tranquila',
        ubicacion: 'Atlanta 5608, new avenue',
        habitaciones: 2,
        baños: 1,
        costo: 900,
        smoke: false,
        pets: true
    },
];

document.addEventListener('DOMContentLoaded', function () {
    const propiedadesAlquilerContainer = document.getElementById('propiedades-alquiler');

    // Función para generar el contenido HTML de una propiedad
    function generarPropiedadHTML(propiedad) {
        // Función para obtener el ícono correspondiente a true o false
        function obtenerIcono(valor) {
            return valor ? '✅' : '❌';
        }

        // Función para obtener el mensaje correspondiente a true o false
        function obtenerMensaje(valor, afirmativo, negativo) {
            return valor ? afirmativo : negativo;
        }

        return `
        <div class="container mt-5">
        <section id="alquiler">
            <h2>${propiedad.nombre}</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${propiedad.src}" alt="${propiedad.nombre} class="card-img-top">
                        <div class="card-body">
                            <p class="card-title">${propiedad.descripcion}</p>
                            <p>Ubicación: <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                            <p>Habitaciones: <i class="fas fa-bed"></i> ${propiedad.habitaciones}</p>
                            <p>Baños:  <i class="fas fa-bath"></i> ${propiedad.baños}</p>
                            <p>Costo: <i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                            <p>Fumar: ${obtenerIcono(propiedad.smoke)} ${obtenerMensaje(propiedad.smoke, 'Permitido', 'Prohibido')}</p>
                            <p>Mascotas: ${obtenerIcono(propiedad.pets)} ${obtenerMensaje(propiedad.pets, 'Permitido', 'Prohibido')}</p>
                        </div>
                    </div>
                </div>
        </section>
    </div>
        `;
    }

    // Función para agregar propiedades al contenedor
    function agregarPropiedadesAlContenedor(container, propiedades) {
        propiedades.forEach(propiedad => {
            const propiedadHTML = generarPropiedadHTML(propiedad);
            container.innerHTML += propiedadHTML;
        });
    }

    // Agregar propiedades en alquiler
    agregarPropiedadesAlContenedor(propiedadesAlquilerContainer, propiedades_alquiler);

});

