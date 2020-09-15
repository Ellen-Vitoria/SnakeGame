let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Plano do Jog
let box = 32;

function criarBG() { //Background
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //Desenho do retângulo, onde acontecerá o jogo - fillRect(X, Y, Altura, Largura)
}

criarBG();