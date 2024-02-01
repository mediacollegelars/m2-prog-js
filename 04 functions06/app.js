class App
{
    tekenHuis(g){
        console.log("hello world");
        var canvas = document.getElementById('canvasId');
        var g = canvas.getContext('2d');
        
        let random = Math.random();
        console.log(random);
        let x=1
        let y=1

        g.fillStyle = "Red";
        g.beginPath();
        g.moveTo(30+x, 10+y);
        g.lineTo(70+x, 20+y);
        g.lineTo(60+x, 40+y);
        g.lineTo(20+x, 30+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "Black";
        g.beginPath();
        g.moveTo(70, 20);
        g.lineTo(60, 40);
        g.lineTo(80, 30);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#1cc7df";
        g.beginPath();
        g.moveTo(20, 30);
        g.lineTo(60, 40);
        g.lineTo(60, 60);
        g.lineTo(20,50);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#ebecec";
        g.beginPath();
        g.moveTo(60, 40);
        g.lineTo(60, 60);
        g.lineTo(80, 50);
        g.lineTo(80,30);
        g.closePath();
        g.stroke();
        g.fill()

        //dit is window
        g.fillStyle = "#D7FDFF";
        g.beginPath();
        g.moveTo(65, 45);
        g.lineTo(65, 55);
        g.lineTo(75, 50);
        g.lineTo(75, 45);
        g.closePath();
        g.stroke();
        g.fill();

        
        //dit is window
        if(random > 0.2&& random < 0.6){
        g.fillStyle = "#D7FDFF";
        }else if(random > 0.6){
        g.fillStyle = "#000000"
        }
        g.beginPath();
        g.moveTo(30, 50);
        g.lineTo(40, 55);
        g.lineTo(40, 50);
        g.lineTo(40, 40);
        g.closePath();
        g.stroke();
        g.fill();
    }
    tekenkerstboom(g, x, y){
       g.fillStyle = "Red";
       g.beginPath();
       g.arc(400,300,20,0,Math.PI*2);
       g.stroke();
       g.fill();
       g.closePath();
    }
    
    
    runaplication()
    {
        var canvas = document.getElementById('canvasId');
        var g = canvas.getContext('2d');
        this.tekenHuis();
        this.tekenkerstboom(g, 10, 10);
    }
}

let app = new App();
app.runaplication();