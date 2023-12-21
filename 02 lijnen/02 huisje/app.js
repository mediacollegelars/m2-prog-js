class App
{

     runApplication()
     { 
         //code gaat hier
      console.log("hello world")
      let canvas = document.getElementById("canvasId");
      let g = canvas.getContext("2d");

      g.fillStyle = "red";
      g.beginPath();
      g.moveTo(300, 100);
      g.lineTo(200, 300);
      g.lineTo(600,400);
      g.lineTo(700,200);
      g.stroke();
      g.fill();

      g.fillStyle = "grey"
      g.beginPath();
      g.moveTo(200,500);
      g.lineTo(200,300);
      g.lineTo(600,400);
      g.lineTo(600,600);
      g.stroke();
      g.fill();

      g.fillStyle = "grey"
      g.beginPath();
      g.moveTo(600,600);
      g.lineTo(800,500);
      g.lineTo(800,300);
      g.lineTo(600,400);
      g.stroke();
      g.fill();

      g.fillStyle = "grey"
      g.beginPath();
      g.moveTo(600,400);
      g.lineTo(700,200);
      g.lineTo(800,300);
      g.closePath();
      g.stroke();
      g.fill();
     }
}

let app = new App();
app.runApplication();

console.log(app.js)