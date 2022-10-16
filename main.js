const canvas=document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.9);
const car = new Car(road.getLaneCenter(1),100,30,50);
car.draw(ctx);

animate();

//Função que criar a animação do carrinho
function animate(){
    car.update();

    canvas.height=window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7); //mantem o carro travado na mesma altura

    road.draw(ctx); //desenha a estrada
    car.draw(ctx); //desenha o carro

    ctx.restore();
    requestAnimationFrame(animate); //cria a ilusão de animação do carrinho
}