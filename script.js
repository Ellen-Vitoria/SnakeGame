let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Plano do Jog
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

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

document.addEventListener('keydown', update); //Evento de uma tecla apertada

/*Condicionais para as setas dos teclados corresponderem a uma direção (por exemplo, 37 significa para esquerda) e
  impedir que a direção seja oposta, pois a Cobrinha só terá uma cabeça
*/
function update (event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    //Posição da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Coordenadas
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //Tirando o último elemento do array
    snake.pop();

    //Acresentando um no primeiro elemento
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100); //A cada 100 milisegundos vai se renovado e dará continuidade ao Jogo sem travar

