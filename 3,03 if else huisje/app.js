class App
{

     runApplication()
     { 
         //code gaat hier
      console.log("hello world")
      let canvas = document.getElementById("canvasId");
      let g = canvas.getContext("2d");
      let random = Math.random();
      console.log(random)

      g.fillStyle = "red";
      g.beginPath();
      g.moveTo(30, 10);
      g.lineTo(20, 30);
      g.lineTo(60,40);
      g.lineTo(70,20);
      g.stroke();
      g.fill();

      g.fillStyle = "grey"
      g.beginPath();
      g.moveTo(20,50);
      g.lineTo(20,30);
      g.lineTo(60,40);
      g.lineTo(60,60);
      g.stroke();
      g.fill();

      g.fillStyle = "grey"
      g.beginPath();
      g.moveTo(60,60);
      g.lineTo(80,50);
      g.lineTo(80,30);
      g.lineTo(60,40);
      g.stroke();
      g.fill();
     

      g.fillStyle = "blue"
      g.beginPath();
      g.moveTo(30,40);
      g.lineTo(30,40);
      g.lineTo(40,40);
      g.lineTo(40,45);
      g.lineTo(30,45);
      g.stroke();
      g.fill();
      if (random > 0.2 && random < 0.6 ){
          g.fillStyle = "yellow"
      }
      else if (random > 0.6 ){
          g.fillStyle = "blue"
      }
      g.beginPath();
      g.moveTo(30,40);
      g.lineTo(30,40);
      g.lineTo(40,40);
      g.lineTo(40,45);
      g.lineTo(30,45);
      g.stroke();
      g.fill();
      
      g.fillStyle = "brown"
      g.beginPath();
      g.moveTo(40,55)
      g.lineTo(40,55)
      g.lineTo(40,55)

      g.fillStyle = "grey"
      g.beginPath();
      g.moveTo(60,40);
      g.lineTo(70,20);
      g.lineTo(80,30);
      g.closePath();
      g.stroke();
      g.fill();
     }
}





let app = new App();
app.runApplication();

console.log(app.js)