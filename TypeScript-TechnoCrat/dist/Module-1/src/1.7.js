"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    // learn spread operator
    const bros1 = ['Shrabon', 'Sojib', 'Akram'];
    const bros2 = ['Jaydul', 'Naydul', 'Maydul', 'Rafiqul'];
    bros1.push(...bros2);
    console.log(bros1);
    const mentor1 = {
        typescript: 'Mezba bhaiya',
        redux: 'Mir bhaiya',
        dbms: 'Mizan bhaiya',
    };
    const mentor2 = {
        prisma: 'Firoz bhaiya',
        next: 'Tonmoy bhaiya',
        cloud: 'Nahid bhaiya'
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    console.log(mentorList);
    // learn rest operator
    const greedFriends = (...Friends) => {
        // console.log(`Hi ${Friends[1]} ${Friends[2]} ${Friends[3]} ${Friends[0]}`)
        Friends.forEach((Friend) => console.log(`Hi ${Friend}`));
        // console.log(`Hi ${Friends.join(', ')}`)
    };
    greedFriends('Abul', 'Babul', 'Kabul', 'Rabul');
}
