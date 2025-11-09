// const users = [`Nick`, `Jack`, `Pavel`]

// function checkFor(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `Hello ${item}`
//         }
//     }
//     return `No hello`
// }

// console.log(checkFor(users, `Jack`))


const numbers = [1, 2, 3, 15, 17];

function biggestTen(arr) {
    arr.forEach(function (number) {
        if (number > 10) {
            console.log(number);
        }
    });
}

biggestTen(numbers);

// /============================================================================/ 




class User {
    constructor(name, age, isAdmin) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }
    greet(name) {
        return `Hello $(name)`;

    }
}

const Users = [
    new User(`Jack`, 28, true),
    new User(`Maria`, 25, false),
    new User(`Pavel`, 32, false),
    new User(`Juli`, 21, true),
    new User(`Nick`, 32, false),
    new User(`Tony`, 39, false),
    new User(`Sam`, 35, true)
];

let regularUsersCount = 0;

for (let user of Users) {
    if (!user.isAdmin) {
        regularUsersCount++;
    }
}

console.log(`обычных пользователей: ${regularUsersCount}`);

