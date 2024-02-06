function demoGetElementById() {
    const myDiv = document.getElementById('demo');

    myDiv.innerHTML = "Hola !!!<br>";
    myDiv.innerHTML += "Hola !!!<br>";
    myDiv.innerHTML += "Hola !!!<br>";
    myDiv.innerHTML += "Hola !!!<br>";
    myDiv.innerHTML += "Hola !!!<br>";

}



function getElementsByTag() {
    const allPTags = document.getElementsByTagName('p')


    console.log(allPTags);
    console.log(allPTags[0]);

}




function getElements() {
    const allButtons = document.getElementsByClassName('my-button');
    const btn1 = allButtons[0];
    btn1.innerHTML = "Hola Button!"
    console.log(btn1);
}




function changeContent() {
    //innerHTML
    //innerText
    //value...

    const loremDiv = document.querySelector('#lorem');

    loremDiv.innerHTML = "<p class='alert'>Some Content!</p>";
}




function changeValue() {
    const myInput = document.getElementById('password');

    myInput.value = passwordGenerator(10);
}




let i = 0;
function nextImage() {

    const images = ['apple', 'kiwi', 'plum', 'strawberry', 'tangerine'];

    const img = document.querySelector('#gallery');

    i++;
    if (i >= images.length) {
        i = 0;
    }

    img.setAttribute('src', `./images/images/${images[i]}.png`);
}




function myParaCode() {
    const myPara = document.getElementById('momo')

    /* myPara.setAttribute('style', 'color:red;background:white') */

    myPara.style.color = 'red';
    myPara.style.background = 'navy';
    myPara.style.fontSize = '35px';

}



function myParaCodeTwo() {
    const myPara1 = document.getElementById('para1')



    myPara1.style.color = 'white';
    myPara1.style.background = 'grey';
    myPara1.style.fontSize = '40px';
    myPara1.style.textShadow = '4px 4px 2px rgba(0,0,0,0.6)';
    myPara1.style.animationName = 'example';
    myPara1.style.animationDuration = '4s';


}



function haveFun() {
    const myBtn = document.getElementById('my-button');

    myBtn.classList.toggle('dark');
    myBtn.classList.toggle('light');
}





function demoStyle() {
    const momoTwo = document.getElementById('momoTwo');

    if (momoTwo.style.color === 'yellow') {
        alert('banana');
    }

    console.log(momoTwo.style.color)
}



function demoCreateElements() {

    //new Div
    const myBox = document.createElement('div');
    myBox.id = 'box';
    myBox.innerText = 'Hello';
    myBox.title = 'some title';
    myBox.classList.add('dark');

    document.body.appendChild(myBox);

    //<div id='box' title='some title'>Hello
}



function myParaCode() {
    const myPara1 = document.getElementById('para')



    myPara1.style.color = 'blue';
    myPara1.style.background = 'grey';
    myPara1.style.fontSize = '40px';
    myPara1.style.textShadow = '4px 4px 2px rgba(0,0,0,0.6)';



}




function myParaTwoCode() {
    const myPara2 = document.getElementById('para2')



    myPara2.style.color = 'yellow';
    myPara2.style.background = 'black';
    myPara2.style.padding = '20xp';
    myPara2.style.margin = '20px';
    myPara2.style.border = '1px solid white';
    myPara2.style.fontSize = '40px';
    myPara2.style.boxShadow = '4px 4px 25px rgba(0,0,0,0.6)';



}




function myParaThreeCode() {
    const para3 = document.getElementById('para3');

    console.log(para3.style.backgroundColor)
    console.log(para3.style.color)
    console.log(para3.style.fontSize)
}





function myParaFourCode() {


    const myNewDiv = document.createElement('div');
    myNewDiv.id = 'box';
    myNewDiv.innerText = 'Hola';
    myNewDiv.style.backgroundColor = 'blue';
    myNewDiv.style.color = 'yellow';
    myNewDiv.style.fontSize = '50px';
    myNewDiv.style.width = '100px';
    myNewDiv.style.height = '100px';
    myNewDiv.style.textAlign = 'center';



    document.body.appendChild(myNewDiv);

}