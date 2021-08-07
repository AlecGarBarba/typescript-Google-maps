import MapGeoCoder from "./MapGeoCoder";

export default class Mapa{
    private googleMap: google.maps.Map;
    private geoCoder : MapGeoCoder;

    constructor(div: string){
        this.googleMap = new google.maps.Map(document.getElementById(div)!, {
            backgroundColor: "#000",
            zoom:1,
            center: {lat: 19.4326, lng: -99.1332}
        });
        this.geoCoder = new MapGeoCoder(this.googleMap);
    }

    AddMarker(mappable: Mappable){
        const infoWindow: google.maps.InfoWindow = new google.maps.InfoWindow({
            content: "Hola!"
        }); 
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: +mappable.getLocation.lat,
                lng: +mappable.getLocation.lng
            }
        }); 
        this.geoCoder.addMarkerInfo(marker, mappable);
    }  


    serchText(options: SearchOptions): void{
        this.geoCoder.searchText(options);
    } 
}