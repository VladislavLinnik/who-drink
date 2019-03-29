window.onload = function(){
    var playerNow = document.querySelector('.js-playerNow'),
    role = document.querySelector('.js-doRole'),
    repeat = document.querySelector('.js-repeat'),
    inputAdd = document.querySelector('.js-inputAdd'),
    addPlayerBtn = document.querySelector('.js-addPlayer'),
    playersList = document.querySelector('.players-list');		
		
    // const players = ['Ваня', 'Валера', 'Влад', 'Бодя'];
    var players = [];

    mainFunc(); // display player name for start screen

    role.addEventListener('click', mainFunc);
    addPlayerBtn.addEventListener('click', addNewPlayer);
    // add to list by clicking on enter
    inputAdd.addEventListener('keyup', function(event){
        if(event.keyCode == 13){
            addNewPlayer();
        }
    });

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

    function addNewPlayer() {
        if (players.includes(inputAdd.value)) {
            return;
        }

        players.push(inputAdd.value);
        inputAdd.value = '';

        console.log(players);

        renderNewPlayer();
    }

    function renderNewPlayer() {
        playersList.insertAdjacentHTML('afterBegin', `<li class="players-item">${players[players.length - 1]}</li>`);
    }

}