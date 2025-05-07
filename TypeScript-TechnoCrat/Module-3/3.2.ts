{

    //oop - inheritance

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }


    class Student extends Parent {

        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    const student1 = new Student('Idba', 21, 'Mongol Groho');
    console.log(student1.address);
    student1.getSleep(5);



    class Teacher extends Parent {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }

        getClass(numOfClass: number) {
            console.log(`${this.name} sir will take ${numOfClass}`);
        }
    }

    const teacher1 = new Teacher('Rahman', 55, 'chander deshe', 'Professor');
    console.log(teacher1.address);
    teacher1.getClass(3);







}