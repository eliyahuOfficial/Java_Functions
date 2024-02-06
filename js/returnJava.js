
///////////////////חזרה על החומר של מיון /////////////

function testme() {
    alert('hi');
    console.log('hi');
}

function testme2() {
    ///מספרים
    var x = 1;
    var y = 20;
    //// מחרוזות
    var firstName = 'Eliyahu';
    var lastName = 'Levi';

    //// בוליאני
    var isHappy = true;

    console.log(x + y);

    console.log(firstName + ' ' + lastName);

    console.log(isHappy);

}

function testme3() {

    var firstName = 'Eliyahu';
    var age = 42;
    var x = '20';
    var y = '10';
    var z = 20;
    var s = 10;

    console.log('Your name is ' + firstName + ' ' + 'And your age is ' + age);
    console.log(x + y);
    console.log(z + s);
}
function testme4() {

    var num1 = 25;
    var num2 = 25;

    var sum = num1 + num2;

    console.log(sum);
    alert(sum);
}

function testme5() {
    var firstName = prompt('Enter you name!');

    alert('Your name is ' + firstName)
}


function testme6() {
    var age = prompt('What is your age?');

    console.log(typeof age);
    alert('your age is ' + age);
}


////////////////////המרה של מחרוזת למספר /////

function testme7() {
    var age = Number(prompt('What is your age ?'));

    console.log(typeof age);
    alert('Your age is ' + age);
}

function testme8() {

    var num1 = Number(prompt('What is your first number?'));
    var num2 = Number(prompt('What is your second number?'));

    console.log('The Total For Your Numbers Is' + ' ' + (num1 + num2));
}


/////////////////משפטי תנאי ///////////////////

function testme9() {

    var age = Number(prompt('What is your age?'));

    if (age < 18) {
        console.log('less then 18');
    }

    else if (age <= 30) {
        console.log('18 up to 30 ');
    }

    else if (age <= 40) {
        console.log('31 up to 40');
    }
    else {
        console.log('41+')
    }

}


//////////////////בדיקת שיוויון////////////

function testme10() {
    var password = Number(prompt('Enter your Pass!!!'));

    if (password == '123456') {
        console.log(' Good');
    } else {
        console.log('Not Good');

    }
}



///////////////אופרטורים/////////////////////

function testme11() {

    var points = 20;

    points = points + 1;
    console.log(points);

    points += 5;
    console.log(points);

    points++;
    console.log(points);

}

