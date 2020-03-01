import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monAgence';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBmLcX4j7Rs20CpVPUMLPWt9xH98IKC7zU",
      authDomain: "monagence-6f917.firebaseapp.com",
      databaseURL: "https://monagence-6f917.firebaseio.com",
      projectId: "monagence-6f917",
      storageBucket: "monagence-6f917.appspot.com",
      messagingSenderId: "854686466642",
      appId: "1:854686466642:web:99ea19938c68a9afc4958b"
    };

    firebase.initializeApp(firebaseConfig);
  }
}
