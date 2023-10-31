function initMap() {
  var map1 = new google.maps.Map(document.getElementById("map1"), {
    center: { lat: -22.9014149, lng: -43.1858516 },
    zoom: 10,
  });

  var map2 = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: -23.5567893, lng: -46.6408179 },
    zoom: 10,
  });
}
