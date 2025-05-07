"use strict";
{
    // constraints
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 1017,
        name: 'Idba',
        email: 'idba@gmail.com',
        devType: 'NLWD'
    });
    const student2 = addCourseToStudent({
        id: 1001,
        name: 'owasfia',
        email: 'owasfia@gmail.com',
        hasWatch: 'Apple Watch'
    });
}
