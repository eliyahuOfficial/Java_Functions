function arrays1() {
    const fruitList = ['banana', 'apple', 'cherry', 'lemon', 'orange'];
    console.log(fruitList);
    alert(fruitList);
}


function arrays2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    alert(numbers);

    console.log(numbers[2]);
    console.log(numbers[0]);
}


function arrays3() {
    const numbers = [1, 3, 5, 8, 11];

    console.log(numbers[0] + numbers[1]); //4


    numbers[0] = 50;

    const sum = numbers[0] + numbers[1]; // 50 + 3 => 53


    console.log(numbers.length); //5

}


function arrays4() {
    const array = [5, 6, 9, 16, 10];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}


function arrays5() {

    const fruits = [];
    const n = Number(prompt('How many fruits you would like?'));


    for (let i = 0; i < n; i++) {
        fruits.push(prompt('What is the name fruits you would like?'));
    }

    console.log(fruits);

}


function arrays6() {
    const numbers = [];

    for (let i = 1; i < 51; i++) {
        numbers.push(i);
    }
    console.log(numbers);

}



function demoNumbers1() {

    console.log(Math.PI);


    const sinus = Math.sin(3.14);


    const result = Math.round(3.94);


    const bill = Math.floor(3.94);

    const numberOfKits = Math.ceil(5.6);

}



function demoNumbers2() {

    const randomNumber = 1 + Math.round(Math.random() * 100);

    console.log(randomNumber)
}



function demoNumbers3() {
    const fruits = ['banana', 'apple', 'lemon'];

    const randomFruit = fruits[random(0, 1, 2)];

    alert(randomFruit);
}


////////////////////////////////////////////////////

function EX1() {
    const choicenumber1 = parseFloat(prompt(`What is your first number?`));
    const choicenumber2 = parseFloat(prompt(`What is your second number?`));
    const operatorchoice = prompt(`What do you like to do? +, -, /, *,`);
    let totalchoice;

    if (operatorchoice === `+`) {
        totalchoice = choicenumber1 + choicenumber2;
    } else if (operatorchoice === `-`) {
        totalchoice = choicenumber1 - choicenumber2;
    } else if (operatorchoice === `*`) {
        totalchoice = choicenumber1 * choicenumber2;
    } else if (operatorchoice === `/`) {
        totalchoice = choicenumber1 / choicenumber2;
    } else {
        alert("Invalid choice");
        return;
    }
    alert(totalchoice);
}


function EX2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
    alert(randomNumbers);
}


function EX3() {
    const value = prompt("What is your value? 10, 100, 1000");
    let choicevalue;

    if (value === "10") {
        choicevalue = 10;
    } else if (value === "100") {
        choicevalue = 100;
    } else if (value === "1000") {
        choicevalue = 1000;
    } else {
        alert("Invalid choice");
        return;
    }

    const randomNumber = 1 + Math.floor(Math.random() * choicevalue);
    console.log(randomNumber);
}


function EX4() {
    const bill = Math.floor(3.5);
    console.log(bill);
}

function EX5() {
    const priceIncTax = 100;
    const tax = 0.17;
    const priceBeforeTax = priceIncTax / (1 + tax);

    alert(`The Tax Price is ${priceIncTax - priceBeforeTax}`);
    alert(`The Price before Tax ${priceBeforeTax.toFixed(2)}`);
}



////////////////////////CART//////////////////////////

function cart() {
    const fruitList = ['banana', 'apple', 'cherry', 'lemon', 'orange'];
    const cartnumbers = [2, 4, 6, 8, 10];

    alert(cartnumbers.reduce((acc, num) => acc + num, 0));

    let sum = 0;
    for (let i = 0; i < cartnumbers.length; i++) {
        sum += cartnumbers[i];
    }

    console.log(sum);

    function calculateAverage(numbers) {
        if (numbers.length === 0) {
            return 0;
        }

        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;

        return average;
    }

    const result = calculateAverage(cartnumbers);
    console.log(`The average is: ${result}`);
    console.log(fruitList);

    const new_number = Number(prompt(`This is the Numbers list ${cartnumbers}. Which number would you like to add from 1 - 10?`));

    if (1 <= new_number && new_number <= 10) {
        cartnumbers.push(new_number);
        console.log("New number added successfully.");
    } else {
        console.log("Invalid choice");
    }

    const newChoice = prompt(`What do you like to do now?
        1) Print The New List Numbers.
        2) Add New Numbers.
        3) Print The New Average.
        4) Print The Total Numbers.`);

    if (newChoice === '1') {
        console.log(`This is the New Numbers list ${cartnumbers}`);
    } else if (newChoice === '2') {
        const new_number = Number(prompt(`This is the Numbers list ${cartnumbers}. Which number would you like to add from 1 - 10?`));

        if (1 <= new_number && new_number <= 10) {
            cartnumbers.push(new_number);
            console.log("New number added successfully.");
        } else {
            console.log("Invalid choice");
        }
    } else if (newChoice === '3') {

        console.log(`The average is: ${calculateAverage(cartnumbers)}`);
    } else if (newChoice === '4') {
        let sum = 0;
        for (let i = 0; i < cartnumbers.length; i++) {
            sum += cartnumbers[i];
        }
        console.log(sum);
    } else {
        console.log("Invalid choice");
    }
}

////////////////////////////////////////////////////
