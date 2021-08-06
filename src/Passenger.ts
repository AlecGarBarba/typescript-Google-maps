//import faker from 'faker';

type Loc = {
    latitude: string;
    lng : string;
}
class Passenger{
    name:string;
    location: Loc;

    constructor(name:string, location: Loc){
        this.name = name;
        this.location = location;
    }
}