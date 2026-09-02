import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  appName = 'Hi how are mohammade ali rafat jan';

  imgUrl = 'https://us.images.westend61.de/0000884593f/close-up-of-woman-holding-camera-CAVF27057.jpg';

  username:string = 'Ali Rafat';

  showMessage() {
    alert('clicked me ..................');
  }
}
