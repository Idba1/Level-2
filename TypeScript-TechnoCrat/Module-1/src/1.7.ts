
{
    // spread operator
    // rest operator
    // destructuring

    // learn spread operator
    const bros1: string[] = ['Shrabon', 'Sojib', 'Akram'];
    const bros2: string[] = ['Jaydul', 'Naydul', 'Maydul', 'Rafiqul'];
    bros1.push(...bros2);
    console.log(bros1);


    const mentor1: {
        typescript: string;
        redux: string;
        dbms: string;
    } = {
        typescript: 'Mezba bhaiya',
        redux: 'Mir bhaiya',
        dbms: 'Mizan bhaiya',
    }

    const mentor2: {
        prisma: string;
        next: string;
        cloud: string;
    } = {
        prisma: 'Firoz bhaiya',
        next: 'Tonmoy bhaiya',
        cloud: 'Nahid bhaiya'
    }

    const mentorList = {
        ...mentor1,
        ...mentor2
    }
    console.log(mentorList);


    // learn rest operator
    const greedFriends = (...Friends: string[]) => {
        // console.log(`Hi ${Friends[1]} ${Friends[2]} ${Friends[3]} ${Friends[0]}`)

        Friends.forEach((Friend: string) =>
            console.log(`Hi ${Friend}`)
        )

        // console.log(`Hi ${Friends.join(', ')}`)
    }
    greedFriends('Abul', 'Babul', 'Kabul', 'Rabul');
}