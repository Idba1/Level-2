{


    // constraints

    const addCourseToStudent = <T extends {
        id: number
        name: string;
        email: string;
    }>(student: T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<
        {
            id: number
            name: string;
            email: string;
            devType: string;
        }
    >
        (
            {
                id: 1017,
                name: 'Idba',
                email: 'idba@gmail.com',
                devType: 'NLWD'
            }
        );

    const student2 = addCourseToStudent(
        {
            id: 1001,
            name: 'owasfia',
            email: 'owasfia@gmail.com',
            hasWatch: 'Apple Watch'
        }
    );





































}