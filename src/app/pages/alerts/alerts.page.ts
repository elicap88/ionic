import { Component, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {


   titulo: string;
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [ {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Cancelar');
        }
      },
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Ok');
          }
        }
        ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Input!',
      subHeader: 'Ingrese su nombre',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
          this.titulo = data.name1;
            console.log(data.name1);
          }
        }
      ]
    });

    await alert.present();
  }

}
