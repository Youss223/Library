import { Component } from '@angular/core';
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// Import the functions you need from the SDKs you need
// import { getDatabase } from 'firebase/database';
// import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
// import {getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
// import { getStorage  } from 'firebase/storage';
// import { getApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
title = 'Library';

constructor(){}
/*
const firebaseConfig = {
  apiKey: "AIzaSyABf2fN1VpHH8VQk-WPAphSQs4eiAtfzOY",
  authDomain: "projet-ds-25de9.firebaseapp.com",
  databaseURL: "https://projet-ds-25de9-default-rtdb.firebaseio.com",
  projectId: "projet-ds-25de9",
  storageBucket: "projet-ds-25de9.appspot.com",
  messagingSenderId: "575687438220",
  appId: "1:575687438220:web:bda0a990e1922256e3b0a9",
  measurementId: "G-XJ5JT3CVQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

}


