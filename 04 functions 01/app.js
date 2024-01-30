function superMooieGlobalFunction() {
   console.log("ik ben global");
   console.log("dus je mag mij overal aanroepen");
}

class App {
   runApplication() {
       console.log("hello world!");
       
   }
}

let app = new App();
app.runApplication();
console.log("hello world")

function aanroepvoorbeeld() {

}

// Function call
aanroepvoorbeeld();
