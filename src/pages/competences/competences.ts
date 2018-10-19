import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaticData } from '../../app/services/static-data.service';

/**
 * Generated class for the CompetencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-competences',
  templateUrl: 'competences.html'
})
export class CompetencesPage {
  selectedCompetences: Competence;
  competences: Array<Competence>;
  dummy: Object;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataService: StaticData
  ) {
    this.dummy = dataService.dummy();
    dataService.getCompetences().then(data => {
      this.competences = navParams.get('competences') || data; // Maybe would be wiser to init competences with an [] with default data and then pushing or splicing it.
    });
  }
  competenceTapped(event, competence) {
    // That's right, we're pushing to ourselves!
    if (competence.competences && competence.competences.length > 0) {
      // console.log(competence)
      this.navCtrl.push(CompetencesPage, {
        competences: competence.competences
      });
    }
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad CompetencesPage');
    console.log('dummy:', this.dummy);
  }
}

export class Competence {
  title: string;
  description?: string;
  icon: string;
  competences?: Array<Competence>;
  background?: String;
  constructor({ title, description, icon, competences, background }) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.competences = competences;
  }
}
