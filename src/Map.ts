import Person from "./Person";

export default class Mapa{
    private googleMap: google.maps.Map;
    constructor(div: string){
        this.googleMap = new google.maps.Map(document.getElementById(div)!, {
            backgroundColor: "#000",
            zoom:1,
            center: {lat: 19.4326, lng: -99.1332}
        });
    }

    AddMarker(mappable: Mappable){
        console.log(mappable.getLocation)
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: +mappable.getLocation.lat,
                lng: +mappable.getLocation.lng
            }
        })

    } 
}