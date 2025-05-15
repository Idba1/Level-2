{


    class Vehicle {
        private make: string;
        public year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        public getInfo(): void {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        public getModel(): void {
            console.log(`Model: ${this.model}`);
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");

    myCar.getInfo();    // Logs: Make: Toyota, Year: 2020
    myCar.getModel();   // Logs: Model: Corolla

}