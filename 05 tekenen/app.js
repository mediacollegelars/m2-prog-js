class App {
    runApplication() {
        console.log("hello world");
        var canvas = document.getElementById('canvasId');
        var g = canvas.getContext('2d');
        const fixedRadius = 20;

        for (let i = 0; i < 200; i++) {
            let x = Math.random() * (canvas.width - 2 * fixedRadius) + fixedRadius;
            let y = Math.random() * (canvas.height - 2 * fixedRadius) + fixedRadius;

            g.fillStyle = 'green';
            g.beginPath();
            g.arc(x, y, fixedRadius, 0, Math.PI * 2);
            g.fill();
            g.stroke();
            g.closePath(); 
        }
    }
}

let app = new App();
app.runApplication();