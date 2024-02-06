
//////////////////אופרטורים///////////////

function operators() {

    var points = 2;

    points++;
    points += 2;
    points = points + 3;

    console.log(points == 0);//false
    console.log(points == 8);//true

}

function operators2() {
    var points = 10;


    points = points - 3;
    points -= 3;

    console.log(points);


    points = points * 2;
    points *= 2;
    points /= 2;

    console.log(points);
}

function operators3() {

    console.log(10 == 10); //true
    console.log(10 != 10); //false
    console.log(10 != 9); //true

    console.log(10 == "10");
    console.log(10 === "10");
    console.log(10 !== "10");
}

function operators4() {
    var total = 100;
    console.log(total);

    total += 5;//105
    console.log(total)//105

    total -= 5;//100
    console.log(total)//100

    total *= 5;//500
    console.log(total)//500

    total /= 5;//100
    console.log(total)//100
}

////////////////////משתנים//////////////////

function variables() {

    alert("Test");

    console.log("Test");
}



function variables2() {

    if (1 == 1) {
        var name = "Eliyahu";
    }

    alert(name);
}



function variables3() {
    var points = "Levi";
    if (10 == 10)

        console.log(points);
}

///////////let///////////////
function variables4() {
    let points = 0;

    if (1 == 1) {
        points += 10;
    }
    console.log(points);


    if (2 == 2) {
        points += 10;
    }
    console.log(points);//20
}


///////////////שיבוץ בתוך מחרוזות////////////

function finalPractice() {

    const num1 = Number(prompt('Enter the 1st number'));
    const num2 = Number(prompt('Enter the 1st number'));
    const num3 = Number(prompt('Enter the 1st number'));

    const avg = (num1 + num2 + num3);

    console.log(`The average of ${num1} + ${num2} + ${num3} is: ${avg}`);
}

function greet() {
    const username = prompt('Enter your username');

    console.log(`lorem ${username} ipsum dolor sit amet ${username} Welcome Back`);
}

//////////////////////////////////////////////
let first = 'ploni';
let last = 'almoni';


function sayHola() {
    alert(`Hola ${first} ${last}`);
}

function changeName() {
    first = prompt("Enter your first name? ")
    last = prompt("Enter your last name?")
}

function goodMorning() {
    alert(`Good Morning ${first} ${last}`);
}
function goodEvening() {
    alert(`Good Evening ${first} ${last}`);
}