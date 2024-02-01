class Dino {
    constructor(naam, vleeseter, leeftijd, leeft, hunger) {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = leeft;
        this.hunger = hunger;
    }

    eatFood(foodToEat) {
        foodToEat.naam = this.naam;
        console.log("ik ben een " + this.naam);
        console.log("mijn honger: " + this.hunger);
        return foodToEat;
    }
}

class Plant {
    constructor(naam, leeft) {
        this.naam = naam;
        this.leeft = leeft;
    }
}

class App {
    runApplication() {
        console.log("hello world");
        let gras = new Plant("gras", true);
        let struik = new Plant("struik", true);
        let dino = new Dino("Dino A", true, 50, true, true);
        let plantenEter = new Dino("Triceratops", false, 20, true, true);

        console.log(dino);
        console.log(plantenEter);
        console.log(gras);
        console.log(struik);

        let foodToEat = dino.eatFood(plantenEter);


        console.log("ik eet nu " + gras.naam);
        console.log("ik eet nu " + struik.naam);
        console.log("leeft " + plantenEter.naam + "? " + plantenEter.leeft);
        console.log("de leeftijd van deze " + dino.naam + " is: " + dino.leeftijd);
        console.log("en deze " + dino.naam + " eet vlees: " + dino.vleeseter);
    }
}

let app = new App();
app.runApplication();