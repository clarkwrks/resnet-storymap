var Split_map = {
	// cont:{},
	init: function(){

		var osmLayer = L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
		}).addTo(map);
	
		var stamenLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		}).addTo(map)
	
		L.control.sideBySide(stamenLayer, osmLayer).addTo(map);
	}
}