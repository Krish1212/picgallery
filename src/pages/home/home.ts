import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imagesList:any;
  constructor(public navCtrl:NavController, public imagePicker: ImagePicker, public toast: ToastController) {

  }

  accessGallery() {
  	this.imagePicker.getPictures({
  		maximumImagesCount:3,
  		width:100,
  		height:100,
  		quality:100,
  		outputType: 0
	}).then((images) => {
			this.imagesList = JSON.stringify(images);
			this.toast.create({
				message: this.imagesList,
				duration: 4000
				}).present();
		}, (err) => {
			this.toast.create({
				message: err,
				duration: 4000
				}).present();
				console.error(err);
			});
  }
}
