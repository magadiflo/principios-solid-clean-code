import { Tesla, Audi, Toyota, Honda, Vehicle, Volvo } from './03-liskov-substitution-b';


(() => {

    //* Aquí aplicamos el principio de Liskov, porque esta función puede soportar cualquier 
    //* clase que sea una subClase de la clase Vehicle
    const printCarSeats = (cars: Vehicle[]) => {

        cars.forEach(car => {
            console.log(car.constructor.name, car.getNumberOfSeats());
        });


        //* Violando el principio Open-Closed
        //* for (const car of cars) {

        //*     if (car instanceof Tesla) {
        //*         console.log('Tesla', car.getNumberOfTeslaSeats())
        //*         continue;
        //*     }
        //*     if (car instanceof Audi) {
        //*         console.log('Audi', car.getNumberOfAudiSeats())
        //*         continue;
        //*     }
        //*     if (car instanceof Toyota) {
        //*         console.log('Toyota', car.getNumberOfToyotaSeats())
        //*         continue;
        //*     }
        //*     if (car instanceof Honda) {
        //*         console.log('Honda', car.getNumberOfHondaSeats())
        //*         continue;
        //*     }

        //* }
    }

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
    ];


    printCarSeats(cars);

})();