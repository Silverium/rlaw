import { Injectable } from '@angular/core';
const defaultCompetences = [
  {
    title: 'Legal',
    icon: 'school',
    description: 'Civil, Laboral, Administrativo, Laboral.',
    competences: [
      {
        title: 'Civil',
        icon: 'home',
        description:
          'Familia, propiedad horizontal, arrendamiento, reconocimiento de derecho',
        competences: [
          {
            title: 'Familia',
            icon: 'contacts',
            description: `Divorcios. Modificación de medidas. Declaraciones de incapacidad. Patria Potestad.`,
            competences: []
          },
          {
            title: 'Propiedad horizontal',
            icon: 'filing',
            description: `Impugnación acuerdos tomados en Junta. Daños en vivienda reclamables a la Comunidad. Impago de cuotas de la comunidad a propietarios deudores.`
          },
          {
            title: 'Arrendamiento',
            icon: 'bed',
            description: `Desahucio express por impago de renta.
      Resolución de contrato de arrendamiento.
      Reclamación indemnización por daños en la vivienda.
      Reclamación al propietario por daños de mejora.
      `
          },
          {
            title: 'Reconocimiento de derecho',
            icon: 'chatboxes',
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
    ]
  },
  {
    title: 'Contable',
    icon: 'calculator',
    description: 'Civil, Laboral, Administrativo, Laboral.',
    competences: [
      {
        title: 'Altas y bajas de autónomos',
        icon: 'calculator',
        description:
          'Presentación de modelos en el censo de empresarios, profesionales y retenedores. Declaración censal de alta, modificación y baja.'
      },
      {
        title: 'Empresas',
        icon: 'briefcase',
        description:
          'Asesoramiento en la creación de nuevas empresas. Tramitación de subvenciones.'
      },
      {
        title: 'Declaraciones de renta',
        icon: 'person',
        description:
          'Confección y presentación de declaraciones de naturaleza fiscal. (Impuesto sobre la Renta de la personas físicas, Pagos Fraccionados IRPF: estimación directa y objetiva, Impuesto de Sociedades, Impuesto sobre el Valor Añadido, Impuesto sobre sucesiones y donaciones, Impuesto sobre Transmisiones Patrimoniales y Actos Jurídicos Documentados) Representaciones ante la Agencia Tributaria. Recursos y reclamaciones.'
      },
      {
        title: 'Obtención de Certificados',
        icon: 'medal',
        description: `Facilitamos certificados digitales del Fondo Nacional de Moneda y Timbre para tu empresa.
Obtención de Certificaciones mercantiles, notas simple de fincas, certificados de nacimiento, matrimonio y defunción.`
      }
    ]
  }
];

@Injectable()
export class StaticData {
  constructor() {}

  async getCompetences() {
    // await new Promise(r => setTimeout(r, 2000));
    return defaultCompetences;
  }
}
