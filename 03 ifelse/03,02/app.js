class App {

   runApplication() {
      console.log('hello world!');
        

      
      let title = document.getElementById("newstitle");
      let news = document.getElementsByClassName("gamenews");
      let headline = document.getElementsByClassName("gamenews headline")
      console.log(title);
      console.log(news);
      console.log(headline);
      let random = Math.random();
      console.log(random);


      if (random < 0.2) {
         title.style.backgroundColor = "FF0000"
         headline[0].style.backgroundColor = "#579fe8"
         news[1].style.backgroundColor = "#344370"
      }
      else if (random > 0.2 && random < 0.6) {
         news[1].style.backgroundColor = "red"
         headline[0].style.backgroundColor = "red"
         title.style.backgroundColor = "red"
      }
      else if (random < 1 && random > 0.6) {
         headline[0].style.backgroundColor = "#579fe8"
         title.style.backgroundColor = "#3923d5"
         news[1].style.backgroundColor = "#344370"
      }

   
      




   }
}

let app = new App();
app.runApplication();