let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Plano do Jog
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() { //Background
    context.fillStyle = "purple";
    context.fillRect(0, 0, 16 * box, 16 * box); //Desenho do retângulo, onde acontecerá o jogo - fillRect(X, Y, Altura, Largura)
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "pink";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();