let playerScore = 0;
let engineScore = 0;
function jogar(type) {
    let engineOptions = [
        'pedra',
        'papel',
        'tesoura'
    ];
    let randomNumber = Math.floor(Math.random() * engineOptions.length);
    let engineChoice = engineOptions[randomNumber];
    let resultText = document.getElementById('victory');
    let playerChoice = type;


    // display player choice
    if (playerChoice === 'pedra') {
        document.getElementById('stonep').style.display = 'block';
        document.getElementById('paperp').style.display = 'none';
        document.getElementById('scissorsp').style.display = 'none'
    }
    if (playerChoice === 'papel') {
        document.getElementById('stonep').style.display = 'none';
        document.getElementById('paperp').style.display = 'block';
        document.getElementById('scissorsp').style.display = 'none'
    }
    if (playerChoice === 'tesoura') {
        document.getElementById('stonep').style.display = 'none';
        document.getElementById('paperp').style.display = 'none';
        document.getElementById('scissorsp').style.display = 'block'
    }


    //display engine choice
    if (engineChoice === 'pedra') {
        document.getElementById('stonee').style.display = 'block';
        document.getElementById('papere').style.display = 'none';
        document.getElementById('scissorse').style.display = 'none'
    }
    if (engineChoice === 'papel') {
        document.getElementById('stonee').style.display = 'none';
        document.getElementById('papere').style.display = 'block';
        document.getElementById('scissorse').style.display = 'none'
    }
    if (engineChoice === 'tesoura') {
        document.getElementById('stonee').style.display = 'none';
        document.getElementById('papere').style.display = 'none';
        document.getElementById('scissorse').style.display = 'block'
    }

    // show who won
    if (playerChoice === engineChoice) {
        resultText.innerHTML = 'Empate.';
    }
    else if ((playerChoice === 'pedra' && engineChoice === 'tesoura') ||
        (playerChoice === 'papel' && engineChoice === 'pedra') ||
        (playerChoice === 'tesoura' && engineChoice === 'papel')) {
        resultText.innerHTML = 'Você ganhou!';
        playerScore += 1;
    }
    else {
        resultText.innerHTML = 'Você perdeu.';
        engineScore +=1;
    }

    // display the result
    document.getElementById('result').style.display = 'block';
    document.getElementById('player-score').innerHTML = `Player: ${playerScore}`;
    document.getElementById('engine-score').innerHTML = `Engine: ${engineScore}`;
}