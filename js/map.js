var map = L.map('map').setView([39.6353, -78.4431], 12);

L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributorss'
}).addTo(map);

$.get("data/campsites.json", function(data){
	for(var i = 0; i < data.features.length; i++){
		var marker = L.AwesomeMarkers.icon({
			icon: '',
			markerColor: 'darkblue',
			prefix: 'fa',
			html: data.features[i].properties["Name"]
		});

		L.marker([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]], {icon: marker}).addTo(map);
	}
});

$.get("data/group-campsites.json", function(data){
	for(var i = 0; i < data.features.length; i++){
		var marker = L.AwesomeMarkers.icon({
			icon: '',
			markerColor: 'darkgreen',
			prefix: 'fa',
			html: data.features[i].properties["Name"]
		});

		L.marker([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]], {icon: marker}).addTo(map);
	}
});

$.get("data/poi.json", function(data){
	for(var i = 0; i < data.features.length; i++){
		var marker = L.AwesomeMarkers.icon({
			icon: '',
			markerColor: 'darkred',
			prefix: 'fa',
			html: data.features[i].properties["Name"]
		});

		L.marker([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]], {icon: marker}).addTo(map);
	}
});