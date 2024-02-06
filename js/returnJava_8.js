const inputSong = document.getElementById('song');
const inputArtist = document.getElementById('artist');
const inputYear = document.getElementById('year');
const inputGenre = document.getElementById('genre');
const buttonAddSong = document.getElementById('add-song');
const ulSongs = document.getElementById('song-list');

let songs = [];
let id = 0;

function addSong() {
    const songName = inputSong.value.trim();
    const artistName = inputArtist.value.trim();
    const releaseYear = inputYear.value.trim();
    const songGenre = inputGenre.value.trim();

    if (songName !== '' && artistName !== '' && releaseYear !== '' && songGenre !== '') {
        const song = {
            id: ++id,
            name: songName,
            artist: artistName,
            year: releaseYear,
            genre: songGenre,
            isSelected: false
        };

        songs.push(song);
        setTimeout(function () {
            inputSong.value = '';
            inputArtist.value = '';
            inputYear.value = '';
            inputGenre.value = '';
            // save to disk
            localStorage.setItem('songs', JSON.stringify(songs));
            renderSongs();
        }, 500);
    }
}

function renderSongs() {
    const stringFromDisk = localStorage.getItem('songs');

    if (stringFromDisk) {
        songs = JSON.parse(stringFromDisk);

        ulSongs.innerHTML = '';
        songs.forEach(song => {
            const li = document.createElement('li');
            li.innerText = `Song: ${song.name}, Artist: ${song.artist}, Year: ${song.year}, Genre: ${song.genre}`;
            ulSongs.appendChild(li);
        });
    }
}

renderSongs();
buttonAddSong.addEventListener('click', addSong);


//////////////////////////////////////////////////////////




let person = {
    // props:
    firstName: 'Gal',
    lastName: 'Lavi',

    // methods:
    sayHola() {
        console.log('hola');
    },

    //methods can take params:
    sayHolaTo(name) {
        console.log('hola' + name);
    },
    sayHolaToHey() {
        console.log(`Hi my name is ${this.firstName} ${this.lastName} `);
    }

}

person.sayHola();
person.sayHolaTo(' Mike Bike');
person.sayHolaToHey();



/////////////////////////////////////////////////////////////////////

let userp = {
    // props:
    username: 'mike',
    password: '123456',
    isLoggedIn: false,

    // methods
    login: function (username, password) {
        if (username === this.username && password === this.password) {
            this.isLoggedIn = true;
            console.log("Login");
        } else {
            console.log("Invalid.");
        }
    }
};

// Example usage:
userp.login('mike', '123456'); // This will log "Login successful!" and set isLoggedIn to true
userp.login('john', 'password'); // This will log "Invalid username or password. Login failed."



///////////////////////////////////////////////////////////////////


let user = {
    //props
    username: 'mike',
    password: '123456',
    isLoggedIn: false,

    //methods

    sayHolaTo(name) {
        console.log('שלום' + name);
    },
    //a login method (username, password)
    //if username and password match -> change isLoggedIn to true
    login(username, password) {
        if (username === this.username && password === this.password) {
            this.isLoggedIn = true;
        }
    }
}

user.login('mike', '123456');
console.log(user);
console.log(typeof user);


////////////////////////////////////////////////////////////////////


let usern = {
    username: 'mike',
    password: '123456',
    isLoggedIn: false,

    login(username, password) {
        if (username == this.username && password == this.password) {
            this.isLoggedIn = true
            console.log(`hello ${this.username}`)
        } else {
            console.log("user and password invaild")
        }
    },
    change_name(name) {
        this.username = name;
    },
    change_password(oldpass, pass) {

        if (oldpass == this.password) {
            this.password = pass;
        } else {
            console.log('wrong password')
        }
    },
    logout() {
        this.isLoggedIn = false
    }
}
usern.login('mike', '123456')
console.log(usern, typeof (usern))
usern.change_name('test')
usern.change_password('123456', '12345')
console.log(usern.username)
usern.logout()

////////////////////////////////////////////////////////////////////


const userHw = {

    username: 'Eliyahu',
    password: '123456',
    isLoggedIn: true,


    sayHola() {
        console.log(`Hola ${this.username}`);
    },

    changeName(username) {
        this.username = username;
    },

    login(username, password) {
        if (username === this.username && password === this.password) {
            this.isLoggedIn = true;
        }
    },
    logout() {
        this.isLoggedIn = false;
    },

    changePassword(oldPassword, newPassword) {
        if (oldPassword == this.password) {
            this.password = newPassword;
        }
    }
}



//print the object:
console.log(userHw); // {username: 'mike',password: '123456', isLoggedIn: false}
//print the type:
console.log(typeof userHw); //object

userHw.sayHola();

userHw.changeName('Dave');
console.log(userHw); // {username: 'Dave',password: '123456', isLoggedIn: false}

userHw.login('Dave', '123456');
console.log(userHw);// {username: 'Dave' , password: '123456', isLoggedIn: true}

userHw.logout()
console.log(userHw);// {username: 'Dave' , password: '123456', isLoggedIn: false}

userHw.changePassword('123456', 'qwertyui');
console.log(userHw); //{username: 'Dave' , password: 'quertyui', isLoggedIn: false}

/////////////////////////////////////////////////////////////////////////////////////


const car = {
    //props:
    manufacturer: 'Mercedes',
    model: 'C-Class',
    year: 2024,
    maxSpeed: 250,

    //methods: 
    setModel(model) {
        this.model = model;
        return this;
    },
    setYear(year) {
        this.year = year;
        return this;
    },
    setManufacturer(manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    },
    setMaxSpeed(maxSpeed) {
        this.maxSpeed = maxSpeed;
        return this;
    }
}


car.setManufacturer('Tesla').setModel('s-plaid').setYear(2023).setMaxSpeed(220);
console.log(car);

/////////////////////////////////////////////////////////////////


let movie = {
    title: 'Godfather',
    year: 1972,
    genre: 'crime'

}

let str = JSON.stringify(movie);

console.log(str);

console.log(typeof str);



//////////////////////////////////////////////////////////

const jsonString = `{"title":"Godfather","year":1972,"genre":"crime"}`;


const obj = JSON.parse(jsonString);
console.log(obj.title, obj.year, obj.genre);
console.log(obj);

//////////////////////////////////////////////////////


const myName = 'Tomer';
localStorage.setItem('username', myName);


const myArray = [{ firstName: "Moe", lastName: "Green" }];
localStorage.setItem('users', JSON.stringify(myArray));

///////////////////////////////////////////////////////


//getElements:
const inputTask = document.getElementById('task'); //input
const buttonAddTodo = document.getElementById('add-todo'); //btn
const ulTodos = document.getElementById('todo-list'); //ul

let todos = [];

id = 0;
function addTodo() {
    const todo = {
        id: ++id,
        task: inputTask.value,
        isComplete: false
    }

    todos.push(todo);
    setTimeout(function () {
        inputTask.value = '';
        //save to disk
        localStorage.setItem('todos', JSON.stringify(todos));

    }, 500);
}

function render() {
    //load the todos from disk
    const stringfromDisk = localStorage.getItem('todos');
    todos = JSON.parse(stringfromDisk);

    ulTodos.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {

        const todo = todos[i];

        //create a li 
        const li = document.createElement('li');
        li.innerText = todo.task;

        //add it to the ul
        ulTodos.appendChild(li);
    }
}

//addEventListener:
buttonAddTodo.addEventListener('click', addTodo);

/////////////////////////////////////////////////////