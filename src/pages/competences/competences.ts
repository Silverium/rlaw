import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  selectedCompetences: Competence;
  competences: Array<Competence>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.competences = navParams.get('competences') ||
      [
        {
          title: 'Civil',
          icon: 'home',
          description: 'Civil, familia, propiedad horizontal, deshaucios',
          competences: [
            {
              title: 'Familia',
              icon: '',
              description: `Divorcios 
            Modificación de medidas 
            Ejecución de sentencias.
            División de cosa común
            `,
              competences: [

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
              description:'Seguros, compraventa, deudas, indemnizaciones',
              competences: [
                {
                  title: 'SEGUROS',
                  icon: '',
                  description: `Reclamación de la cobertura de un siniestro.`,
                },
                {
                  title: 'COMPRAVENTA',
                  icon: '',
                  description: `Reclamación de arras por duplicado.`,
                },
                {
                  title: 'Deudas',
                  icon: '',
                  description: `Reclamaciones de deudas en general`,
                },
                {
                  title: 'Indemnizaciones',
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
    if (competence.competences && competence.competences.length > 0) {
      console.log(competence)
      this.navCtrl.push(CompetencesPage, {
        competences: competence.competences
      });
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetencesPage');
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