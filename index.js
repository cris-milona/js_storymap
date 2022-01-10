let map;

function initMap() {
  //map options
  let options = {
    center: { lat: 40.090549, lng: 22.361469 },
    zoom: 10,
    mapId: '56797b9ab29cbe67',
  };

  //initialize new map
  map = new google.maps.Map(document.getElementById('map'), options);

  // //add one specific marker
  // const marker = new google.maps.Marker({
  //   position: { lat: 40.090549, lng: 22.361469 },
  //   map,
  //   icon: {
  //     url: 'icons/mountain.png',
  //     scaledSize: new google.maps.Size(25, 25),
  //   },
  //   animation: google.maps.Animation.DROP,
  // });

  // //add popup info window to the marker
  // let infowindow = new google.maps.InfoWindow({
  //   content: 'Mount Olympus',
  // });

  // //add event listener to the marker to open info window
  // marker.addListener('click', () => {
  //   infowindow.open(map, marker);
  // });

  //add marker function to create easily various markers
  function addMarker(properties) {
    let marker = new google.maps.Marker({
      position: properties.coords,
      map,
      icon: properties.icon,
      animation: google.maps.Animation.DROP,
    });
    //check for custom icon
    if (properties.icon) {
      //set icon image
      marker.setIcon(properties.icon);
    }
    //check content
    if (properties.content) {
      let infowindow = new google.maps.InfoWindow({
        content: properties.content,
      });

      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
    }
  }

  const markers = [
    {
      coords: { lat: 40.090549, lng: 22.361469 },
      icon: {
        url: 'icons/mountain.png',
        scaledSize: new google.maps.Size(25, 25),
      },

      content: 'Mount Olympus',
    },
    {
      coords: { lat: 39.7911835019, lng: 22.6849255936 },
      icon: {
        url: 'icons/pick.png',
        scaledSize: new google.maps.Size(25, 25),
      },
      content: 'Mount Ossa',
    },
  ];

  //loop through markers and call addMarker function for each one
  markers.forEach((marker) => {
    addMarker(marker);
  });
}
