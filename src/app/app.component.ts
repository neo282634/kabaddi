import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, LightgalleryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kabaddi';
  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig = {
    apiKey: "AIzaSyDnQzWFIq6c_U-Gs7P3aBKE8DMI8HPxkSo",
    authDomain: "kabaddi-9bc4e.firebaseapp.com",
    projectId: "kabaddi-9bc4e",
    storageBucket: "kabaddi-9bc4e.appspot.com",
    messagingSenderId: "1008340454543",
    appId: "1:1008340454543:web:a4c6723ece4c920062b4fa",
    measurementId: "G-XEMLCMNX6S"
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);

}
