var playerNow = document.querySelector('.js-playerNow'),
		role = document.querySelector('.js-doRole'),
		repeat = document.querySelector('.js-repeat');		
		
const players = ['Ваня', 'Валера', 'Влад', 'Бодя'];

function randPlayer() {
    var rand = Math.floor(Math.random() * players.length);

    var res = players[rand];
        
//         if ( res == playerNow.innerHTML ) {
//             console.log('1');
//             randPlayer()
//         } else {
//             console.log(playerNow.innerHTML)
//             playerNow.innerHTML = res;
//         }
        
        if ( repeat.checked ) {
//             randPlayer();
                playerNow.innerHTML = res;
        console.log('Repeat: ' + res);
    } else {
        playerNow.innerHTML = res;
                    console.log('No repeat: ' + playerNow.innerHTML);
    }

}

role.addEventListener('click', randPlayer);

window.onload = function(){
    randPlayer();
}
