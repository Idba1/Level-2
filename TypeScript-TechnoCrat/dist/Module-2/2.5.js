"use strict";
{
    // function with generic
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric(true);
    const resGeneric2 = createArrayWithGeneric('Bangladesh');
    const resGenericObj = createArrayWithGeneric({ id: 1017, name: 'Idba' });
    // Tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res2 = createArrayWithTuple('Bangladesh', 1971);
    const resTuple2 = createArrayWithTuple('Asia', 'Bangladesh');
    const resTuple3 = createArrayWithTuple('Asia', { name: 'Bangladesh' });
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'Idba', email: 'idba@gmail.com', devType: 'NLWD' });
    const student2 = addCourseToStudent({ name: 'powasfia', email: 'powasfia@gmail.com', hasWatch: 'Apple Watch' });
}
