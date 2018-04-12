import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubcompetencesPage } from '../subcompetences/subcompetences';

/**
 * Generated class for the CompetencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-competences',
  templateUrl: 'competences.html',
})
export class CompetencesPage {
  selectedCompetence: Competence;
  competences: Array<Competence>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedCompetence = navParams.get('competence');
    this.competences = [
      {
        title: 'Civil',
        description: 'Familia, propiedad y arrendamiento',
        icon: 'home',
        subCompetences: [
          {
            title: 'Familia',
            icon: '',
            description: '',
            subCompetences: [

            ],
          },
          { title: 'Propiedad horizontal',
          icon: '',
          description: '',
          subCompetences: [

          ],
         },
          { title: 'Deshaucios, extinción de contrato',
          icon: '',
          description: '',
          subCompetences: [

          ],
         },
          { title: 'Reclamaciones de cantidad',
          icon: '',
          description: '',
          subCompetences: [

          ],
         },
          { title: 'Reconocimiento de derecho' ,
          icon: '',
          description: '',
          subCompetences: [

          ],
        },
        ],
      },
      {
        title: 'Laboral',
        icon: 'briefcase',
        description: 'Conciliación laboral, cálculo indemnización y liquidación',
        subCompetences: [

        ],
      },
      {
        title: 'Administrativo',
        icon: 'paper',
        description: 'Reclamación impuesto de PLUSVALIA por indebido',
        subCompetences: [

        ],
      },
      {
        title: 'Asesoramiento',
        icon: 'medkit',
        description: 'Falta descripción y ejemplos',
        subCompetences: [

        ],
      },
    ]
  }
  competenceTapped(event, competence) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SubcompetencesPage, {
      competence
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetencesPage');
  }

}

export class Competence {
  title: string;
  description: string;
  icon: string;
  subCompetences: Array<Competence>;
  constructor({ title, description, icon, subCompetences }) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.subCompetences = subCompetences;
  }
}