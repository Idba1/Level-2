{

    class Animal {
        public name: string;
        public species: string;


        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log(`This ${this.name} make sound`);
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeBark() {
            console.log('i am barking')
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeMeow() {
            console.log('i am meawing')
        }
    }

    // smart wat te handle korar jonno chaile ammra function use korte pari
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }


    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeow();
        }
        else {
            animal.makeSound();
        }
    }

    const dog = new Dog('Dog Bhai', 'dog');
    dog.makeSound();
    dog.makeBark();
    const cat = new Cat('cat appa ', 'cat');
    cat.makeSound();
    cat.makeMeow();

    getAnimal(dog);
    getAnimal(cat);

    const animal = new Animal('normal Animal', 'normal');
    getAnimal(animal);

}