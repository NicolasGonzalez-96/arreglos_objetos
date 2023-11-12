// propiedades.js
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
        ubicacion: 'Ciudad A',
        habitaciones: 3,
        baños: 2,
        costo: 1000,
        smoke: false,
        pets: true
    },
];

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
    const propiedadesAlquilerContainer = document.getElementById('propiedades-alquiler');
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

    // Agregar solo 3 propiedades en alquiler
    agregarPropiedadesAlContenedor(propiedadesAlquilerContainer, propiedades_alquiler, 3);

    // Agregar solo 3 propiedades en venta
    agregarPropiedadesAlContenedor(propiedadesVentaContainer, propiedades_venta, 3);
});
