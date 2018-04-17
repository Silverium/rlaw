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
        icon: 'home',
        subCompetences: [
          {
            title: 'Familia',
            icon: '',
            description: `Divorcios 
            Modificación de medidas 
            Ejecución de sentencias.
            División de cosa común
            `,
            subCompetences: [

            ],
          },
          {
            title: 'Propiedad horizontal',
            icon: '',
            description: `Impugnación acuerdos tomados en Junta
            Reclamación de daños a la comunidad o tercero causante de daños
            Reclamación de cuotas de la comunidad a propietarios deudores
            `,
           
          },
          {
            title: 'Deshaucios, extinción de contrato',
            icon: '',
            description: `Desahucio express por impago de renta.
            Resolución de contrato de arrendamiento.
            Reclamación indemnización por daños en la vivienda.
            Reclamación al propietario por daños de mejora.
            `,

          },
          {
            title: 'Reclamaciones contractuales o extracontractuales',
            icon: '',
            subCompetences: [
              {  title: 'SEGUROS',
              icon: '',
              description: `Reclamación de la cobertura de un siniestro.`,
            },
              {  title: 'COMPRAVENTA',
              icon: '',
              description: `Reclamación de arras por duplicado.`,
            },
              {  title: 'Deudas',
              icon: '',
              description: `Reclamaciones de deudas en general`,
            },
              {  title: 'Indemnizaciones',
              icon: '',
              description: `Reclamaciones de indemnizaciones por accidentes de tráfico.`,
            },
            ],

          },
        
        ],
      },
      {
        title: 'Laboral',
        icon: 'briefcase',
        description: 'Conciliación laboral, cálculo indemnización y liquidación',
      },
      {
        title: 'Administrativo',
        icon: 'paper',
        description: 'Reclamación impuesto de PLUSVALIA por indebido',
      },
    ]
  }
  competenceTapped(event, competence) {
    // That's right, we're pushing to ourselves!
    if(competence.subCompetences && competence.subCompetences.length>0)
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
  description?: string;
  icon: string;
  subCompetences?: Array<Competence>;
  background?: String;
  constructor({ title, description, icon, subCompetences, background }) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.subCompetences = subCompetences;
  }
}