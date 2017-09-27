import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  base64Image:any;
  constructor(public navCtrl: NavController, public camera: Camera, private toast: ToastController) {

  }

  accessGallery() {
  	this.camera.getPicture({
  		sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  		destinationType: this.camera.DestinationType.FILE_URI,
  		allowEdit: false,
  		encodingType: this.camera.EncodingType.JPEG,
  		//popoverOptions: this.camera.CameraPopoverOptions,
  		saveToPhotoAlbum: false
	}).then((imageData) => {
			this.base64Image = 'data:image/jpeg;base64, ' + imageData;
			console.log(imageData);
			this.toast.create({
				message: imageData,
				duration: 4000
			}).present();
		}, (err) => {
				console.error(err);
			});
  }

}
