function initMap() {
	// add your code here
	L.mapquest.key = 'yjiDcVnRY2RxeDuKgP03DyPMLGZSDEGB';

	var map = L.mapquest.map('map', {
  		center: [32.8785154,-117.2709055],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12,
  		zoomControl: false
	});

	L.marker([32.8785154,-117.2709055]).addTo(map);
}