//* Правильні імена

let firsName = '1-Yevhenii',
    lastName = ' Skubenyk';

alert(firsName + lastName);

let firsNameUser = '2-Yevhenii',
    lastNameUser = ' Skubenyk';

alert(firsNameUser + lastNameUser);

let givenName = '3-Yevhenii',
    surname = ' Skubenyk';

alert(givenName  + surname);


let forename = '4-Yevhenii',
    nickname = ' Skubenyk';

alert(forename + nickname);



//* Не правильні імена

/*let 1firsName = 'Yevhenii',
    2lastName = ' Skubenyk';

let FirstName = 'Yevhenii',
    LastName = ' Skubenyk';

let FIRST_NAME = 'Yevhenii',
    LAST_NAME = ' Skubenyk';

let first-name = 'Yevhenii',
    last-name = ' Skubenyk';*/

// let firsName/ = 'Yevhenii',
    // lastName/ = ' Skubenyk';


//* Привіт Аня!
let userName = prompt('Як тебе звати?', 'Aня');

alert(`Привіт ${userName}!Приємно познайомитись`);

//* Рік народження
const YEAR_BIRHT = prompt('Який рік твого народження?', 1986);

alert(`Тобі ${2022 - YEAR_BIRHT} років!`);

//* Довжина сторони квадрата
let quadSide = prompt('Яка довжина сторони квадрата?', 5);

alert(`Периметр квадрата дорівнює ${quadSide * 4}`);

//* Площа кола
let circleRadius = prompt('Який радіус кола?', 5);
let pi = 3.14;

alert(`Площа кола дорівнює ${pi * circleRadius **2}`);

//* Відстань між містами
let distanceS = prompt('Яка відстань від Полтави до Києва?', 300);
let timeT = prompt('За який час хочете доїхати до Києва?', 4);

alert(`Швидкість повинна бути ${distanceS / timeT}км/год `);













