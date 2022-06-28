//location.href = 'maintenance.html'

// what does the fox say?
function say() {
    var sound = document.getElementById("sound");
    sound.play();
}



function goToSg() {
    location.href = 'sg.html';
}

function playsg() {
    location = "https://cristizama.github.io/sdwa/";
}

function twitter() {
    alert("marș la carne!")
    //location = "https://twitter.com/CrisDEVV";
}

function youtube() {
    alert("idk, l-am șters ¯\\_(ツ)_/¯.")
}

function getVal() {
    var inputVal = document.getElementById('fn').value;
    
    if(inputVal == "imafucking")
    {   
        location.href = 'main.html';
    }
}

function goToBlog() {
    location.href = 'blog.html';
}