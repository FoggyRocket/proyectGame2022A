window.onload = function() {
  //siempre declarar las const o lets que utilizamos en este archivo!!
  //llamar a una clase
  // new Nombreclase(....)
  const bg = new Background(canvas.width, canvas.height);
  const flappy = new Flappy(50,40,35,35)


  //ejemplo v1 pipe
  //const pipe = new Pipe("top",100,100,100) solo era `para ver si funciona mi clase
  document.getElementById("start-button").onclick = function() {
    console.log("Si funciono!!")
    if(!requestId){
      startGame();
    }
  };

  function startGame() {
    
    //iniciar juego v0.0.1
    //updateGame()
    //inicar juego v.0.0.2
    requestId = requestAnimationFrame(updateGame)
  }
  function gameOver(){
    console.log("Te moriste bro")
    requestId = undefined
  }

  function resetGame(){
    flappy.y = dylanDefault.y
    flappy.vy = dylanDefault.vy
    if(!requestId){
      startGame();
    }

  }
  function winGame(){}
  //funcion importante el corazon/motor/alma/agua
  function updateGame(){
    frames ++; //aumentos los frames!!!
    //limpiamos el canvas!!
    ctx.clearRect(0,0,canvas.width,canvas.height)
    //1.-
    bg.draw()
    //2.-
    flappy.draw()
    //pipe.draw() //para dibujar el pipe de ejemplo
    //generar y dibujar
    generatePipes()
    drawPipes()
    // vamos a terminar el juego si el flappy toca el fondo!!
    if(flappy.y + flappy.height > canvas.height){
      gameOver()
    }
    if(requestId){
      requestAnimationFrame(updateGame)
    }
  }

  // generar y dibujar pipes
  function generatePipes(){
    console.log("frames",frames)
    //limitar que mi arreglo se llene de pipes!!!
    if( !(frames % 160 === 0) ){
      return true
    }

    //height randmon
    //Math.floor( Math.random() * (max * 0.6) ) ) + 35;
    const height = Math.floor(Math.random() * (canvas.height * 0.6)) + 35;
    const pipe1 = new Pipe("top",canvas.width,0,height);
                          //pos,        x,             y,            dinamico height
    const pipe2 = new Pipe("EldeAbajo",canvas.width, height + 120, canvas.height -120 - height )

    pipes.push(pipe1,pipe2)
  }
  function drawPipes(){
    //forEach -> no retorna nada 
    //for of -> este no retorna nada
    //for -> no retorna nada
    //map -> retorna un nuevo arreglo (hace una copia del original)
    //reduce -> regresa un arreglo, un objeto, un numero, un string
    //filter -> nos regesa un arreglo nuevo totalmente filtrado;

    pipes.forEach((pipe,index_pipe)=>{

      //splice vamos  a sacar los pipes que se salgan de mi canvas
        if(pipe.x + pipe.width <= 0){
          //splice solo se puede utilizar en arreglos
          pipes.splice(index_pipe,1)
        }
      //voy a dibujar los pipes!      
      pipe.draw()
      //validamos que flappy  golpee contra un pipe!!
      if( flappy.collision(pipe) ){
        gameOver()
      }

    })
  }



  addEventListener("keydown",(event)=>{
    event.preventDefault();

    if(event.keyCode === 32){
      //flappy.y -= 10; //v1 se va a borrar 
      flappy.userPull = 0.3; //v2 
    }
    //reset game
    if(event.keyCode === 82){
      if(!requestId){
        resetGame()
      }
      
    }
  })// end keydown

  addEventListener("keyup",(event)=>{
    event.preventDefault()

    if(event.keyCode === 32){
      flappy.userPull = 0
    }
  })

};//end onload