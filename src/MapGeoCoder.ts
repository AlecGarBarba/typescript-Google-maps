export default class MapGeoCoder{
    private googleMap: google.maps.Map;
    private geocoder: google.maps.Geocoder;
    constructor(googleMap: google.maps.Map){
        this.googleMap=googleMap;
        this.geocoder = new google.maps.Geocoder();
    }

    addMarkerInfo(marker: google.maps.Marker, mappable: Mappable): void{
        marker.addListener('click',()=>{
            const latlng: google.maps.LatLngLiteral = {lat: marker.getPosition()!.lat() , lng: marker.getPosition()!.lng()}
            this.geocoder.geocode({'location': latlng}, (results, status)=>{

                if(status !=='OK') return window.alert("Error en la geolocalización: "+status);
                const infoWindow: google.maps.InfoWindow = new google.maps.InfoWindow({
                    content: mappable.markerTitle(()=> results[0].formatted_address)
                }); 
                infoWindow.open(this.googleMap, marker);
            });

        });
    }

    searchText(options: SearchOptions): void{
        options.searchButton.addEventListener('click',()=>{
            const address = options.input.value;
            this.geocoder.geocode({"address": address},(results, status)=>{
                if(status !=='OK') return window.alert("Error con la búsqueda: "+status);
                this.googleMap.setZoom(12);
                this.googleMap.setCenter(results[0].geometry.location);
                const marker = new google.maps.Marker({
                    map: this.googleMap,
                    position: results[0].geometry.location
                });
                const infoWindow: google.maps.InfoWindow = new google.maps.InfoWindow({
                    content: "Set marker"
                }); 
                infoWindow.open(this.googleMap, marker);
                
            })
        })
    }
}