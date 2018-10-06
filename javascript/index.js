var map = null;
var customIcon = {};
var currentInfoWindow = null;
var currentMarker = null;

placesOfInterest = [
    { name: 'Charme da paulista', lat: -23.562172, lng: -46.655794 },
    { name: 'The Blue Pub', lat: -23.563112, lng: -46.650338 },
    { name: 'Veloso', lat: -23.585107, lng: -46.635219 },
    { name: 'Let\'s Beer', lat: -23.586508, lng: -46.641739 },
    { name: 'O\'Malley\'s', lat: -23.558296, lng: -46.665923 },
    { name: 'Finnegan\'s', lat: -23.559547, lng: -46.676794 },
    { name: 'Partisans', lat: -23.561049, lng: -46.682555 },
    { name: 'Morrison', lat: -23.555106, lng: -46.690883 },
    { name: 'Cão Véio', lat: -23.558130, lng: -46.679508 },
    { name: 'Cervejaria Nacional', lat: -23.564740, lng: -46.690641 },
    { name: 'Brewdog', lat: -23.561309, lng: -46.693935 },
    { name: 'Rei das Batidas', lat: -23.570613, lng: -46.705977 }
];

//Cria um marcador customizado
function setColorIcon(color) {
    return customIcon = {
        path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
        fillColor: color,
        fillOpacity: 0.98,
        scale: 0.98,
        strokeColor: '#666666',
        strokeWeight: 3
    };
}


//Função que adiciona marcadores ao mapa
function addMarker(marker) {
    //Objeto que exibe o nome do lugar no mapa
    var infoWindow = new google.maps.InfoWindow({
        content: marker.name
    });
    //Objeto utilizado para criar o marcador no mapa
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(marker.lat, marker.lng),
        icon: setColorIcon('#F7B217'),
        title: marker.name
    });
    //Adiciona eventos ao mapa para exibir a informação do nome do local que o marcador aponta
    google.maps.event.addListener(marker, 'click', function () {
        //Verifica se existe um marcador clicaco, se existir fecha o marcador
        if (currentInfoWindow != null) {
            currentInfoWindow.close();
            currentInfoWindow = null;
            currentMarker.setIcon(setColorIcon('#F7B217'));
        }
        //Se o marcador clicado for o mesmo ativo fecha o marcador
        if (currentMarker === marker) {
            currentMarker.setIcon(setColorIcon('#F7B217'));
            currentMarker = null;
        }
        //Senão abre a informação
        else {
            infoWindow.open(map, marker);
            currentInfoWindow = infoWindow;
            marker.setIcon(setColorIcon('#ffffff'));
            currentMarker = marker;
        }
    });
    
//Quando o infoWindow é fechado por click a cor do marcador é atualizada
    google.maps.event.addListener(infoWindow, 'closeclick', function () {
        currentMarker.setIcon(setColorIcon('#F7B217'));
    });

    marker.setMap(map);
}

/* Desafio */
function CenterControl(controlDiv, map) {

    //Estilizando o botão de centralizar o mapa na posição do usuário
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Clique para centralizar o map';
    controlDiv.appendChild(controlUI);

    //Criando elemento de texto do botão
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Centralizar Mapa';
    controlUI.appendChild(controlText);

    //Criando evento de click no botão para posicionar o mapa na posição do usuário se ele permitir o uso de geolocalização
    controlUI.addEventListener('click', function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
                var positionUser = {
                    name: 'Você está aqui', lat: position.coords.latitude, lng: position.coords.longitude
                }
                addMarker(positionUser);
            });
        }
    });
}

//Função que inicializa o mapa
function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.562172, -46.655794),
        gestureHandling: 'greedy',
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        },
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        }

    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);


    // Constroi a DIV que ira conter o botão de centralizar o mapa no usuário
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv);


    //Adicionando marcadores
    for (let i = 0; i < placesOfInterest.length; i++) {
        addMarker(placesOfInterest[i]);
    }
}