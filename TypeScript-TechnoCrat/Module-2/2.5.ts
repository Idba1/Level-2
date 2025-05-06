{
    // function with generic

    const createArray = (param: string): string[] => {
        return [param];
    }


    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    type User = { id: number; name: string }

    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<boolean>(true);
    const resGeneric2 = createArrayWithGeneric<string>('Bangladesh');
    const resGenericObj = createArrayWithGeneric<User>({ id: 1017, name: 'Idba' })


    // Tuple

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }


    const res2 = createArrayWithTuple<string, number>('Bangladesh', 1971);
    const resTuple2 = createArrayWithTuple<string, string>('Asia', 'Bangladesh');
    const resTuple3 = createArrayWithTuple<string, { name: string }>('Asia', { name: 'Bangladesh' });




    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: 'Idba', email: 'idba@gmail.com', devType: 'NLWD' });
    const student2 = addCourseToStudent({ name: 'powasfia', email: 'powasfia@gmail.com', hasWatch: 'Apple Watch' });










}