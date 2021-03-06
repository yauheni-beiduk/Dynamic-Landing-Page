const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    tasks = document.getElementById('tasks');

const ShowAmPm = true;

function showTime()  {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12 ;

    time.innerHTML = `${(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ShowAmPm ? amPm : ''}`;
    setTimeout(showTime, 1000);
}

// ADD ZEROS BEFORE HOUR,MINUTES,SECONDES

function addZero(n) {
    return (parseInt(n , 10) < 10 ? '0' : '') + n;
}

// SET BACKGROUNDS AND GREETING

function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();
    if(hour < 12 ) {
        document.body.style.backgroundImage = "url('images/sunrise.jpg')";
        greeting.textContent = 'Good Morning,';
        document.body.style.backgroundSize = "100% 100%";
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('images/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon,';
        document.body.style.backgroundSize = "100% 100%";
    } else {
        document.body.style.backgroundImage = "url('images/night.jpg')";
        greeting.textContent = 'Good Night,';
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.color = 'white';
    }
};

// GET NAME 

function getName() {
    if(localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
};

// SET NAME

function setName(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {  // stops typing by button Enter
            localStorage.setItem('name' , e.target.innerText);  // passed a key name and value
            name.blur(); //delete focus from
        }
    } else {
        localStorage.setItem('name' , e.target.innerText);
    }
}

// GET TASKS

function getTasks() {
    if(localStorage.getItem('tasks') === null || localStorage.getItem('tasks') === '') {
        tasks.textContent = '[Enter Tasks]';
    } else {
        tasks.textContent = localStorage.getItem('tasks');
    }
};

// SET TASKS

function setTasks(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {  // stops typing by button Enter
            localStorage.setItem('tasks' , e.target.innerText);  // passed a key name and value
            tasks.blur(); //delete focus from
        }
    } else {
        localStorage.setItem('tasks' , e.target.innerText);
    }
}

// ADD EVENT
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
tasks.addEventListener('keypress', setTasks);
tasks.addEventListener('blur', setTasks);

// RUN FUNCTION

showTime();
setBgGreet();
getName();
getTasks();