import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imagesList:any;
  constructor(public navCtrl:NavController, public imagePicker: ImagePicker) {

  }

  accessGallery() {
  	this.imagePicker.getPictures({
  		maximumImagesCount:50,
  		width:100,
  		height:100,
  		quality:100,
  		outputType: 0
	}).then((images) => {
			this.imagesList = JSON.stringify(images);
		}, (err) => {
				console.error(err);
			});
  }
}
