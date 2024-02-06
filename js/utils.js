function yesNoQuestion(text) {
    let userAnswer = prompt(text);

    while (userAnswer !== "yes" && userAnswer !== "no") {
        userAnswer = prompt(text + ' try again yes/no');
    }

    if (userAnswer === 'yes') {
        return true;
    } else if (userAnswer === 'no') {
        return false;
    } else {
        return false;
    }
}

function inputNumber(text, min, max) {
    let result = Number(prompt(text));

    while (result > max || result < min) {
        //result = Number(prompt(text + " try again " + min + " to " + max));
        result = Number(prompt(`${text} try again ${min}-${max}`));
    }

    return result;
}

function random(min, max) {
    const differnce = max - min; //200 - 50 = 150
    //50 to 200
    return min + Math.round(Math.random() * differnce);
}

function pretty(array) {

    let total = '';

    for (let i = 0; i < array.length; i++) {
        total += array[i];
        if (i !== array.length - 1) {
            total += ', ';
        }
    }

    return total;
}


function passwordGenerator(len) {

    //מערך של כל האותיות האפשרוית לסיסמא
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // מחרוזת ריקה לסיסמא
    let password = '';

    // לולאה שרצה מספר פעמים כמספר האותיות בסיסמא
    for (let i = 0; i < len; i++) {
        // מגרילים איבר רנדומלי ממערך האותיות 
        let randomIndex = random(0, letters.length - 1);
        //ומוסיפים אותו לסיסמא
        password += letters[randomIndex];
    }

    return password;
}

function capitalize(text) {
    //first letter in upperCase
    const firstLetter = text.charAt(0).toUpperCase(); //first letter in caps

    const rest = text.substring(1);// omer


    return firstLetter + rest;
}
