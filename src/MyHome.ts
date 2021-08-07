import Loc from "./loc";
import Person from "./Person";


export default class MyHome implements Mappable {
    private location :Loc;

    get getLocation(){
        return this.location;
    }

    constructor(passenger: Person){
        const numberedLocation = passenger.getLocationNumbered;


        this.location = { lat: ''+(numberedLocation.lat+0.03), lng: ''+(numberedLocation.lng-0.02)}
    }
}