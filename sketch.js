const Engine = Matter.Engine ;
 const World = Matter.World ;
  const Bodies = Matter.Bodies ; 
  var engine , world ,ground ,helecopter;
  var log1,log2,log3;
 
   function setup() {
     createCanvas(400,400);

      engine = Engine.create();
      world = engine.world ;
      Box1=new Box(200,60,20,20)
      var options={isStatic: true} 
helicopter=Bodies.rectangle(200,50,100,30,options);
var options={isStatic: true} 
ground=Bodies.rectangle(200,400,400,10,options)
log1=Bodies.rectangle(285,290,10,100)
log2=Bodies.rectangle(200,390,100,10)
log3=Bodies.rectangle(120,290,10,100)
World.add(world,ground);
World.add(world,helicopter);
World.add(world,log1);
World.add(world,log2);
World.add(world,log3);

    
     
   
    } 

      function draw() {
        background(0);
        Engine.update(engine)
        rectMode(CENTER)
       Box1.display()
     
        push()
       fill("red")
       rect(helicopter.position.x,helicopter.position.y,100,30)
       pop()
fill("red")
       rect(ground.position.x,ground.position.y,400,10)
       push()
       fill("red")
       rect(log1.position.x,log1.position.y,10,100)
       pop()
fill("red")
       rect(log2.position.x,log2.position.y,160,10)
       push()
       fill("red")
       rect(log3.position.x,log3.position.y,10,100)
       pop()
      
}
       