function plus(num1, num2) {
    alert(`${num1} + ${num2} = ${num1 + num2}`);
}



function addHeart(text) {
    alert(`❤${text}❤`);
}



////////////////////////////////////////////
function average(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
function demoAvg() {
    let jsScore = Number(prompt("Enter your js grade"));
    let htmlScore = Number(prompt("Enter your html grade"));
    let cssScore = Number(prompt("Enter your css grade"));

    let avg = average(jsScore, htmlScore, cssScore);

    alert(`Your average is ${avg}`);
}
/////////////////////////////////////////////

function priceUpertax2(priceTax) {
    return priceTax * 1.1;

}

function onPriceClick() {
    const priceTax = Number(prompt("Enter your bill price?"));
    alert(`The price after tax is ${priceUpertax2(priceTax)}`);
}

/////////////////////////////////////////////////




//פונקצית עזר - מחזירה ערך - לא פונה למשתמש
function calculateAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

//פונקצית עזר שמקבלת מספר ואחוז 
// הפונקציה מוסיפה את האחוז למספר - ומחזירה את התשובה
function addFactor(total, factor) {
    const percentage = total * factor / 100;

    return total + percentage;
}

//פונקציה שמופנית למשתמש - לחיצה על כפתור
function onGradeClick() {
    const grade1 = Number(prompt("Enter grade 1"));
    const grade2 = Number(prompt("Enter grade 2"));
    const grade3 = Number(prompt("Enter grade 3"));

    const average = calculateAverage(grade1, grade2, grade3);
    const afterFactor = addFactor(average, 5);

    alert(`Your avarage is ${average}, After factor ${afterFactor}`);
}

//////////////////////////////////////////////

function addNumbers(num1, num2) {
    return `The sum of ${num1} + ${num2} = ${num1 + num2}`;
}
// addNumbers(2, 3); // '2 + 3 = 5'


function multNumbers(num1, num2) {
    return `The mult of ${num1} * ${num2} = ${num1 * num2}`;
}


function onCalculatorClick() {
    const x = Number(prompt('Enter X'));
    const y = Number(prompt('Enter Y'));

    const sum = addNumbers(x, y);
    alert(sum);
    alert(multNumbers(x, y));
}

//////////////////////LOOPS/////////////////

function demo_loops() {
    let i = 0;

    while (i < 100) {
        console.log(i);
        i++;
    }
}
function demo_loops2() {
    let i = 2;

    while (i < 100) {
        console.log(i);
        i += 13;
    }
}
function demo_loops3() {
    let i = 0;

    while (i < 101) {
        console.log(i);
        i += 1;
    }
}
function demo_loops4() {
    let i = 0;

    while (i < 101) {
        console.log(i);
        i += 2;
    }
}
function demo_loops5() {
    let number = Number(prompt("Enter a number"));

    while (number < 0 || number > 10) {
        console.log('try again...')
        number = Number(prompt("Enter a number"));
    }

    alert(`Your choice: ${number}`);
}

//////////////////////////////////////////////

function androidhotel() {
    const username = prompt("Hello, I'm android. Whats your name?");
    const isSingle = yesNoQuestion(`I have a question, ${username}. Are you coming alone? yes/no`);

    let guests = 1;
    if (isSingle === false) {
        guests = inputNumber("How many guests?", 1, 10);
    }

    const choice = inputNumber(`
    The options I Have for you are: 
    1) Option 1 - 200 Regular Suite
    2) Option 2 - 300 Summer Suite
    Enter your choice, 1 or 2.
    `, 1, 2);

    let pricePerRoom;
    let roomName;
    if (choice === 1) {
        pricePerRoom = 200;
        roomName = 'Regular Suite';
    } else if (choice === 2) {
        pricePerRoom = 300;
        roomName = 'Summer Suite';
    } else {
        alert("invalid choice");
        //todo: add input loop
    }
    const numberOfNights = inputNumber("How many nights?", 1, 30);
    const price = numberOfNights * guests * pricePerRoom;
    //אנשים * לילות * מחיר לחדר
    const summary = `
        The total for ${guests} guests for ${numberOfNights} nights
        In the ${roomName} will cost${price} NIS.
    `;

    alert(summary);
    let breakfast = yesNoQuestion("Breakfast costs 30 NIS Would you like us to include it in the deal? yes/no");

    let extra = 0;
    if (breakfast) {
        extra = numberOfNights * guests * 30;
    }

    alert(`Total is ${price + extra}`)
}

function hotelReturn() {
    const firstInfo = yesNoQuestion('Happy that you are here. Would you like to check our deals?');

    if (firstInfo === true) {
        const username = prompt('Could you tell us your name?')

        const infoSecond = yesNoQuestion(`We are very happy to see you here, ${username}. Will you let us know if you came alone? yes/no `);
        let guests = 1;
        if (infoSecond === false) {
            guests = inputNumber("How many guests?", 1, 10);
        }

        let suiteType;
        if (guests >= 1 && guests <= 3) {
            suiteType = "Reg-Suite";
        } else if (guests > 3 && guests <= 6) {
            suiteType = "Mid-Suite";
        } else if (guests > 6 && guests <= 10) {
            suiteType = "Top-Suite";
        } else {
            alert("We currently don't have suites for more than 10 guests. Please contact us for special arrangements.");
            return; // Exit the function if the number of guests is not within the expected range.
        }

        const numNights = inputNumber("How many nights will you be staying?", 1, 30);

        // Now you have the suiteType and numNights, you can proceed with the rest of your logic.

        alert(`Great choice, ${username}! You have selected the ${suiteType} for ${guests} guest(s) for ${numNights} night(s).`);

        // Continue with additional logic as needed.

    } else {
        alert('Sorry to hear that!!!')
    }
}


////////////////////////////////////////////////

