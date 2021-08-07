import Loc from "./loc";


export default abstract class Person implements Mappable{
    protected name: string;
    protected location: Loc; 
    constructor(name: string, location: Loc){
        this.name =name;
        this.location = location;
    }

    get getName(){
        return this.name;
    }
    get getLocation(){
        return this.location;
    }

    get getLocationNumbered(){
        return {lat: +this.location.lat, lng: +this.location.lng }
    }

    markerTitle(address: ()=>string): string{
        return `La dirección de ${this.name} es ${address()}`
    }
}