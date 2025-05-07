{

    // oop-class

    // class Animal {
    //     public name: string;
    //     public species: string;
    //     public sound: string;


    //     constructor(name: string, species: string, sound: string) {
    //         this.name = name;
    //         this.species = species;
    //         this.sound = sound;
    //     }

    //     makeSound() {
    //         console.log(`This ${this.name} says ${this.sound}`);
    //     }
    // }

    // const dog = new Animal('dolar bhai', 'dog', 'geu geu');
    // console.log(dog.name);
    // dog.makeSound();
    // const cat = new Animal('mirchi apa', 'Cat', 'meow meow');
    // console.log(cat.sound);





    class Animal {

        // parameter properties

        constructor(public name: string, public species: string, public sound: string) { }

        makeSound() {
            console.log(`This ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal('dolar bhai', 'dog', 'geu geu');
    console.log(dog.name);
    dog.makeSound();
    const cat = new Animal('mirchi apa', 'Cat', 'meow meow');
    console.log(cat.sound);








}