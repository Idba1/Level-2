{

    // abstraction: 1. interface 2. abstract

    // idea
    interface Vehicle {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car1 implements Vehicle {
        startEngine(): void {
            console.log(`I am starting the car Engine`);
        }

        stopEngine(): void {
            console.log(`i am stopping the car engine`)
        }

        move(): void {
            console.log(`i am moving the car`)
        }

        test() {
            console.log(`I am just testing`)
        }
    }


    const toyotaCar = new Car1();
    toyotaCar.startEngine()
    toyotaCar.move();
    toyotaCar.stopEngine();
    toyotaCar.test();


    // abstract class

    // idea
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log(`I am just testing`)
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting the car Engine`);
        }

        stopEngine(): void {
            console.log(`i am stopping the car engine`)
        }

        move(): void {
            console.log(`i am moving the car`)
        }

        test() {
            console.log(`I am just testing`)
        }
    }

    const hondaCar = new ToyotaCar();
    hondaCar.startEngine();
    hondaCar.test();





}