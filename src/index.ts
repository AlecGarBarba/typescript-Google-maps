import Mapa from './Map'
import Passenger from './Passenger';
import Driver from './Driver';
import MyHome from './MyHome'
const map: Mapa = new Mapa("map");
const driver = new Driver();
const passenger = new Passenger()
const passengerHome = new MyHome(passenger)

map.AddMarker(driver);
map.AddMarker(passenger);
map.AddMarker(passengerHome);

map.serchText(
    {
        input: <HTMLInputElement>document.getElementById("address")!,
        searchButton: <HTMLButtonElement>document.getElementById("searchButton")!,
    }
)
