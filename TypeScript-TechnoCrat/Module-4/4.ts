{
    // 

    class Vehicle {
        private make: string;
        public year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        public getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        public getModel(): string {
            return `Model: ${this.model}`
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    const t1 = myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
    const t2 = myCar.getModel();  // Output: "Model: Corolla"
    console.log(t1);
    console.log(t2);

}