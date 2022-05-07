// BACKGROUND
class Background{
    //constructor
            //(canvas.width,canvas,height)
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.img = new Image();
        //img = {src:"",onload:()=>{},...}
        this.img.src = "images/bg.png";
    }
    //methods
    draw(){
        //hacer que el fondo se mueva!
        //loop infinito
        if(this.x < -canvas.width){
            this.x = 0
        }
        // mueve el canvas
        this.x --;

                //drawImge(imagen,x,y,w,h)
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
        //agregamos otra imagen
        ctx.drawImage(
            this.img,
            this.x+this.width,
            this.y,
            this.width,
            this.height
        )
    }
}


// Flappy
class Flappy{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.img.src = "images/flappy.png"
        //van mis cosas extra!!!
        this.vy = 2; //gravity
        this.userPull= 0;
    }
    //methods
    draw(){
        //Validar gravedad 
        this.vy = this.vy + (gravity - this.userPull)
        
        //validar que el flappy no se salga del canvas y = 0 
        if(this.y <= 0){
            this.userPull = 0;
            this.y = 2;
            this.vy = 2;
        }
        //modificar su gravedad "Y"
        if(this.y+this.height < canvas.height){
            this.y += this.vy;
        }

         //drawImge(imagen,x,y,w,h)
         ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }

    //collision!!!
    // esta funcion solo retorna un true || false 
    collision(item){
        // &&-- false && true -> false
        return (
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y 
        )
    }
}

//extends

class Pipe extends Flappy{
            //(top,x,y,h)
    constructor(pos,x,y,h){
        super(x,y,50,h)
        this.img.src = 
        pos === "top" //condicion
        ? "images/obstacle_top.png"
        : "images/obstacle_bottom.png";
        //
    }

    draw(){
        this.x -=2;
        ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height)
    }
    
}
