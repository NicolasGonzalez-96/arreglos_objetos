const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Casa de lujo',
        src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/slideshow/_FI.jpg?1563747560',
        descripcion: 'casa lujosa ubicada en las afueras de la ciudad',
        ubicacion: '785 Kalisto Avenue, Misisipi',
        habitaciones: 4,
        baños: 3,
        costo: 2000,
        smoke: true,
        pets: true
    },
    
];

document.addEventListener('DOMContentLoaded', function () {
    const propiedadesVentaContainer = document.getElementById('propiedades-venta');

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
        <section id="ventas">
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

    // Agregar propiedades en venta
    agregarPropiedadesAlContenedor(propiedadesVentaContainer, propiedades_venta);

});