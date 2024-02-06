function tostring() {
    const array = ['apple', 'banana', 'kiwi'];
    let total = '';
    //loop over the array
    // total += element
    for (let i = 0; i < array.length; i++) {
        total += array[i];

        if (i !== array.length - 1) {
            total += ',';
        }
    }
    alert(total);
}


function demoDates1() {
    const myDate = new Date();
    console.log(myDate);
}


function demoDates2() {

    const myDate = new Date();

    //DATE:
    console.log(myDate.getDay());
    console.log(myDate.getMonth());
    console.log(myDate.getFullYear());
    console.log(myDate.getDate());

    //TIME:
    console.log(myDate.getHours());
    console.log(myDate.getMinutes());
    console.log(myDate.getSeconds());
}


//////////////////////////////////////////////

function demoNumbers() {
    const num = 35;

    console.log(num / 2);
    console.log(num % 2);
}


function demoNumbers2() {
    const num = random(0, 100);

    if (num % 2 === 0) {
        console.log(`The Number ${num} is even`);
    } else {
        console.log(`The Number ${num} is odd`);
    }

}


function demoNumbers3() {
    const num = random(0, 100);

    const isEven = num % 2 === 0;

    if (isEven) {
        console.log(`The Number ${num} is even`);
    } else {
        console.log(`The Number ${num} is odd`);
    }

}


function demoNumbers4() {
    const num1 = 122;


    console.log(Math.floor(num1 / 60));
    console.log(num1 % 60);

    const num2 = 224;

    console.log(Math.floor(num2 / 60));
    console.log(num2 % 60);


}


/////////////////////////////////////////////

function demoStrings() {
    let myString = 'Tomer';

    //string concat
    myString += "...";

    //string length
    console.log(myString.length);//8

    //to upper case:
    console.log(myString.toUpperCase());//TOMER...

    //to lower case:
    console.log(myString.toLowerCase());//tomer...

    //after the break: how to replace one character in a string
}



function demoStrings3() {
    let myString = 'welcome Back';

    console.log(myString.charAt(0));//w
    console.log(myString.charAt(1));//e
    console.log(myString.charAt(2));//l
}



function demoStrings4() {
    const text = 'hello, world';

    const result = text.replace('world', 'friends');

    console.log(result);

}



function demoStrings5() {
    const text = 'The Green Dog has Blue eyes and a Blue Tail';

    const result = text.replace(/Blue/g, 'Yellow')

    console.log(result);

}

///////////////////////////////////////////////////

//JS can change content in the html:
function change() {
    document.getElementById('my-paragraph').innerHTML = 'Lorem ipsum';
}



function turnOn() { //<img src="">
    document.getElementById('bulb').src = 'images/pic_bulbon.gif';
}



function turnOff() {
    document.getElementById('bulb').src = 'images/pic_bulboff.gif';
}








