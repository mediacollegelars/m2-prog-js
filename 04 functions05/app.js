class App {
   runApplication() {
       console.log("Hello world!");
       let x = "Mario!!";
       let y = "BWAHAHA!!!";
       let z = "imgonnabust";
       
       
       let result1 = this.alsoNewFunction();
       let result2 = this.newFunction(x, y, z);
       console.log(x, y, z);

      
       console.log(result1);
       console.log(result2);
   }

   alsoNewFunction() {
       return "MARIO!!!"; 
   }

   newFunction(a, b, c) {
       return "BWAHAHA!!!"; 
   }
}

let app = new App();
app.runApplication();

