// creates a new game instance 
let game = new Game();

// adds event listener to reset button to start game
document.getElementById("btn__reset").addEventListener('click', () => {
    game.startGame();
})

// Adds functionality to onscreen keyboard 
// Enables user to play game. 
document.getElementById('qwerty').addEventListener('click', game.handleInteraction);