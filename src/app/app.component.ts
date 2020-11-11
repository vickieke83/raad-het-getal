import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  randomNumber: number = Math.ceil(Math.random()*100);
  aantalBeurten: number = 10;
  gekozenNummers: number[] = new Array();
  nummerTeller: number = 0;

  feedback: string = null;
  feedback2: string = null;
  feedback3: string = null;

  gewonnen: boolean = false;

  valideerGok = (value) => {
    this.aantalBeurten = this.aantalBeurten - 1;
    this.gekozenNummers[this.nummerTeller] = value;
    this.nummerTeller = this.nummerTeller + 1;
    this.feedback2 = "Nog " + this.aantalBeurten + " beurten resterend.";
    if (value < 1 || value > 100){
      this.feedback = "Gelieve een getal tussen 1 en 100 in te geven. " + this.feedback2;
    }
    else if (value == this.randomNumber) {
      this.feedback = null;
      this.gewonnen = true;
    } 
    else if (value < this.randomNumber) {
      this.feedback = "Gok een hoger getal. " + this.feedback2;
    } 
    else {
      this.feedback = "Gok een lager getal. " + this.feedback2;
    }
    
    this.feedback3 = "Geraden nummers: " + this.gekozenNummers;
  }

  reset = () => {
    this.randomNumber = Math.ceil(Math.random()*100);
    this.aantalBeurten = 10;
    this.gekozenNummers = [];
    this.nummerTeller = 0;
    this.feedback = null;
    this.feedback2 = null;
    this.feedback3 = null;
    this.gewonnen = false;
  }
}

