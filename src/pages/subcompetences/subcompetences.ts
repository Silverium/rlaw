import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Competence } from '../competences/competences';

/**
 * Generated class for the SubcompetencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcompetences',
  templateUrl: 'subcompetences.html',
})
export class SubcompetencesPage {
  competence: Competence;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.competence = navParams.get('competence');
  }

  competenceTapped(event, competence) {
    // That's right, we're pushing to ourselves!
    if(competence.subCompetences && competence.subCompetences.length>0)
    this.navCtrl.push(SubcompetencesPage, {
      competence
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcompetencesPage');
  }

}

