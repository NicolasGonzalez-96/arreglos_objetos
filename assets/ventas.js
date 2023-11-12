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

    function obtenerIconoYMensaje(valor, mensajeAfirmativo, mensajeNegativo, iconoAfirmativo, iconoNegativo) {
        if (valor) {
            return {
                mensaje: `<p class="text-success"><i class="${iconoAfirmativo}"></i> ${mensajeAfirmativo}</p>`,
                icono: `<i class="${iconoAfirmativo}"></i>`
            };
        } else {
            return {
                mensaje: `<p class="text-danger"><i class="${iconoNegativo}"></i> ${mensajeNegativo}</p>`,
                icono: `<i class="${iconoNegativo}"></i>`
            };
        }
    }

    function generarPropiedadHTML(propiedad) {
        const fumar = obtenerIconoYMensaje(
            propiedad.smoke,
            'Permitido fumar',
            'No se permite fumar',
            'fas fa-smoking',
            'fas fa-smoking-ban'
        );

        const mascotas = obtenerIconoYMensaje(
            propiedad.pets,
            'Mascotas permitidas',
            'No se permiten mascotas',
            'fas fa-paw',
            'fas fa-paw'
        );

        return `
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${propiedad.src}" alt="${propiedad.nombre}" class="card-img-top">
                        <div class="card-body">
                            <h2 class="card-title">${propiedad.nombre}</h2>
                            <p class="card-text">${propiedad.descripcion}</p>
                            <p>Ubicación: <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                            <p>Habitaciones: <i class="fas fa-bed"></i> ${propiedad.habitaciones}</p>
                            <p>Baños:  <i class="fas fa-bath"></i> ${propiedad.baños}</p>
                            <p>Costo: <i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                            ${fumar.mensaje}
                            ${mascotas.mensaje}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function agregarPropiedadesAlContenedor(container, propiedades, cantidad) {
        // Agregar solo la cantidad especificada de propiedades
        for (let i = 0; i < cantidad; i++) {
            const propiedadHTML = generarPropiedadHTML(propiedades[i]);
            container.innerHTML += propiedadHTML;
        }
    }

    agregarPropiedadesAlContenedor(propiedadesVentaContainer, propiedades_venta, 4);
});