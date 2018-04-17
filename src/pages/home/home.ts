import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompetencesPage } from '../competences/competences';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToCompetences() {
    this.navCtrl.push(CompetencesPage)
  }
}
