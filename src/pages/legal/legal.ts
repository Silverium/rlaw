import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "legal-page",
  templateUrl: "legal.html"
})
export class LegalPage {
    year: Number;
  constructor(
    public navCtrl: NavController,
  ) {
    this.year = new Date().getFullYear();
  }
}
