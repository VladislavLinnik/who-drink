var playerNow = document.querySelector('.js-playerNow'),
    role = document.querySelector('.js-doRole'),
    repeat = document.querySelector('.js-repeat'),
    inputAdd = document.querySelector('.js-inputAdd'),
    addPlayerBtn = document.querySelector('.js-addPlayer');		
		
const players = ['Ваня', 'Валера', 'Влад', 'Бодя'];
// var players = [];

window.onload = function(){
    mainFunc(); // display player name for start screen
}

role.addEventListener('click', mainFunc);
addPlayerBtn.addEventListener('click', addNewPlayer);

function mainFunc() {
    var rand = Math.floor(Math.random() * players.length);
    var res = players[rand];
        
    // if repeat player is true
    if ( repeat.checked ) {
        playerNow.innerHTML = res;
        console.log('Repeat: ' + res);
    }
    // if repeat player is false
    else {
        
        if ( playerNow.innerHTML == res ) {
            mainFunc(); // get new player name if this name is equal playerNow
            console.log('No repeat: ' + playerNow.innerHTML);
        }
        else {
            playerNow.innerHTML = res; // get player name if this name is not equal playerNow
            console.log('No repeat: ' + playerNow.innerHTML);
        }

        
    }

}

window.onload = function addNewPlayer() {
    // var inputVal = inputAdd.value;
    var playersItem = document.querySelector('.players-item');

    playersItem.innerHTML = inputAdd.value;
}