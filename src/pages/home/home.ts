import { CompetencesPage } from './../competences/competences';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
  goToCompetences() {
    this.navCtrl.push(CompetencesPage);
  }
  goTo(page) {
    switch (page) {
      case 'competences':
        return this.navCtrl.push(CompetencesPage);
      case 'about':
        return this.navCtrl.push(AboutPage);
      case 'blog':
        return window.open(
          'https://rlawcatalunya.blogspot.com',
          '_system',
          'location=yes'
        );
    }
  }
}
