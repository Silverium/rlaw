import { Injectable } from '@angular/core';
const defaultCompetences = [
  {
    title: 'Civil',
    icon: 'home',
    description:
      'Familia, propiedad horizontal, arrendamiento, reconocimiento de derecho',
    competences: [
      {
        title: 'Familia',
        icon: '',
        description: `Divorcios. Modificación de medidas. Declaraciones de incapacidad. Patria Potestad.
      `,
        competences: []
      },
      {
        title: 'Propiedad horizontal',
        icon: '',
        description: `Impugnación acuerdos tomados en Junta. Daños en vivienda reclamables a la Comunidad. Impago de cuotas de la comunidad a propietarios deudores.
      `
      },
      {
        title: 'Arrendamiento',
        icon: '',
        description: `Desahucio express por impago de renta.
      Resolución de contrato de arrendamiento.
      Reclamación indemnización por daños en la vivienda.
      Reclamación al propietario por daños de mejora.
      `
      },
      {
        title: 'Reconocimiento de derecho',
        icon: '',
        description:
          'Cobertura de un siniestro. Daños personales y/o materiales. indemnizaciones por accidentes de tráfico. Vicios o defectos de la construcción.',
        competences: []
      }
    ]
  },
  {
    title: 'Laboral',
    icon: 'briefcase',
    description:
      'Conciliación laboral. Impugnación, despido y modificaciones de las condiciones del trabajo. Expedientes de regulación de empleo (ERE). Accidentes laborales.'
  },
  {
    title: 'Administrativo',
    icon: 'paper',
    description:
      'Responsabilidad patrimonial. Reclamación de impuestos pagados indebidamente.'
  },
  {
    title: 'Penal',
    icon: 'paper',
    description: 'Defensa / Acusación en procedimiento judicial'
  }
];

@Injectable()
export class StaticData {
  constructor() {}

  dummy() {
    return { dummy: 'information' };
  }
  async getCompetences() {
    // await new Promise(r => setTimeout(r, 2000));
    return defaultCompetences;
  }
}
