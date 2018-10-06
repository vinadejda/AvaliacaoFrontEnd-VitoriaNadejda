import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular'; //estava escrito errado: LoadingControlle
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private loading: any;//acrescentei o private
  private photos: Array<string> = [];

  constructor(
    public loadingController: LoadingController
  ) {

  }

  ngOnInit() {
    //this.printOnConsole();
    this.presentLoading();
    this.randomPhotos();

    setTimeout(() => {
      try {
        this.dismissLoading();//faltou o this
      } catch (err) {
        console.error(err);
        alert('Error dismissing loader');
      }

    }, 5000)

  }

  randomPhotos() {//Refatorar a função
    for (let i = 0; i < 501; i++) {
      this.photos.push(`https://picsum.photos/200/200?image=${Math.floor((Math.random() * 300) + 1)}`)
    }

    /*  while (i < 501) {
        let salt = Math.floor((Math.random() * 300) + 1);
        console.log(salt);
        this.photos.push(`https://picsum.photos/200/200?image=${salt}`)
        i = i + 1;
      }*/
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please wait...'
    });
    return await this.loading.present();
  }

  /*printOnConsole() {
    console.log('Running a public function on init');
  }*/

  dismissLoading() {
    if (!_.isNil(this.loading)) {
    this.loading.dismiss();
    }
  }
}
