import faker from 'faker';
import Person from './Person'
 
export default class Passenger extends Person{

    constructor(){
        super(faker.name.firstName(), {lat: faker.address.latitude(), lng: faker.address.longitude()});
    }

    
}
