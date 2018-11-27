import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { EmailComposer } from "@ionic-native/email-composer";

@Component({
  selector: "about-home",
  templateUrl: "about.html"
})
export class AboutPage {
  cuerpoEmail: String;
  telefono: Number;
  nombreApellidos: String;
  constructor(
    public navCtrl: NavController,
    private emailComposer: EmailComposer
  ) {}
  sendEmail() {
    let email = {
      to: "rlaw.catalunya@gmail.com",
      // cc: 'max@mustermann.de',
      subject: "rLaw - Consulta desde app",
      body: `
      Nombre y apellidos: ${this.nombreApellidos};
      Teléfono: ${this.telefono};
      Consulta: ${this.cuerpoEmail}
      `,
      isHtml: true
    };

    this.emailComposer.open(email).catch(error => {
      console.error(
        "no email app in this environment, launching browsers functionality",
        error
      );
      window.open(
        `mailto:${email.to}?subject=${email.subject}&body=${email.body}`,
        "_system",
        "location=yes"
      );
    });
  }
}
