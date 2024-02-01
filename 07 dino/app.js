class App
{
    runAplication()
    {
        console.log("hello world")
    }
}

class Greet
{
    constructor()
    {
      this.greeting = "Greetings";
    }
    showGreeting()
    {
      console.log("goodbye")
      console.log("greeting van binnen:" + this.greeting)
    }
}

let greet = new Greet;
greet.showGreeting();

class Goodbye
{
    constructor(){
      this.farewell = "farewell";
    }
    showbye()
    {
      console.log("bye!")
      console.log("greeting van binnen:" + this.farewell)
    }
}

let bye = new Goodbye;
bye.showbye();


greet.showGreeting();
bye.showbye();

greet.showGreeting();
bye.showbye();

greet.showGreeting();
bye.showbye();

console.log("greeting van buiten:" + greet.greeting)

console.log("greeting van buiten:" + bye.farewell)

let app = new App();
app.runAplication();