var initialView = map.getCenter();  // Guarda las coordenadas del centro del mapa
var fixedZoom = 5;  // Ajusta el nivel de zoom para Home (puedes poner el valor que desees)

L.Control.HomeButton = L.Control.extend({
    onAdd: function(map) {
        var btn = L.DomUtil.create('button', 'leaflet-bar btns-control');  // Clase personalizada para el botón
        btn.innerHTML = '<i class="fa fa-home"></i>';  // Ícono FontAwesome
        btn.title = 'Volver a vista inicial';

         // Estilo para asegurar que el botón y el ícono se ajusten correctamente
        btn.style.width = '32px';  // Ajustar el tamaño del botón
        btn.style.height = '32px';  // Ajustar el tamaño del botón
        btn.style.display = 'flex';  // Asegura que el ícono esté centrado
        btn.style.alignItems = 'center';  // Centra el ícono verticalmente
        btn.style.justifyContent = 'center';  // Centra el ícono horizontalmente
        btn.style.borderRadius = '0%';  // Hacer el botón circular si lo deseas
        btn.style.backgroundColor = '#fff';  // Color de fondo del botón
        btn.style.border = '1px solid #ccc';  // Borde del botón

        btn.onclick = function() {
            map.setView(initialView, fixedZoom);  // Vuelve a la vista inicial
        };
        return btn;
    },
    onRemove: function(map) {}
});

// Añadir el control al mapa
map.addControl(new L.Control.HomeButton({ position: 'topleft' }));
