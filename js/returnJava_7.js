i = 1;
function createBox() {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.border = '1px solid black';



    div.id = `box-${i++}`;


    document.body.appendChild(div);
}


function demoRemove() {
    document.getElementById('heading').remove();
}




const mybtn = document.getElementById('btn-1');

mybtn.addEventListener('click', function () {

    alert('Hi')
});






const addDivBtn = document.getElementById('add-div');

addDivBtn.addEventListener('click', function () {
    const newDiv = document.createElement('div');
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    newDiv.style.border = '1px solid black';

    document.body.appendChild(newDiv);
});




const addLinkButton = document.getElementById('add-google');

addLinkButton.addEventListener('click', function () {
    // Create a new 'a' (anchor) element
    const newLink = document.createElement('a');

    // Set the href attribute to the Google URL
    newLink.href = 'https://www.google.com';

    // Set the text content of the link
    newLink.textContent = 'Visit Google';

    // Set the target attribute to '_blank' to open in a new tab or window
    newLink.target = '_blank';

    // Append the new link to the body
    document.body.appendChild(newLink);
});





const addParaButton = document.getElementById('add-para');

addParaButton.addEventListener('click', function () {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');

    // Set the text content of the paragraph
    newParagraph.textContent = 'This is a new paragraph by Eliyahu.';

    // Append the new paragraph to the body
    document.body.appendChild(newParagraph);
});





const addImageButton = document.getElementById('add-img');

addImageButton.addEventListener('click', function () {
    // Create a new image element
    const newImage = document.createElement('img');

    // Set the source (src) attribute of the image
    newImage.src = './images/images/apple.png';  // Replace 'path/to/your/image.jpg' with the actual path to your image file.

    // Set alt text for accessibility
    newImage.alt = 'Added image';

    // Append the new image to the body
    document.body.appendChild(newImage);
});




document.addEventListener('DOMContentLoaded', function () {
    const replaceDivBtn = document.getElementById('replace-div');
    const myDiv = document.getElementById('my-div');

    replaceDivBtn.addEventListener('click', function () {
        const newElement = document.createElement('p');
        newElement.innerText = 'Paragraph!';

        myDiv.parentNode.replaceChild(newElement, myDiv);
    });
});



///////////////////////////////////////////////////////////////////


const array = [];


const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const usernameInput = document.getElementById('usernameInput');
const registerForm = document.getElementById('register-form');
const addUserButton = document.getElementById('add-user');
const showAllBtn = document.getElementById('show-all');
const usersListDiv = document.getElementById('users-list');


showAllBtn.addEventListener('click', function () {

    usersListDiv.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        const user = array[i];
        usersListDiv.innerHTML += `${user.username} ${user.email} ${user.password} <br>`
    }

});


addUserButton.addEventListener('click', function () {


    const userObject = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }

    array.push(userObject);
});

///////////////////////////////////////////////////////////