import React, { useEffect } from 'react';
import AppNavigation from './src/navigation/routes';
import firebase from '@react-native-firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyBgBZUwV2TWaZFoU_HfcdDE1vNWePWbJzM",
  authDomain: "rnprojectsanber.firebaseapp.com",
  databaseURL: "https://rnprojectsanber.firebaseio.com",
  projectId: "rnprojectsanber",
  storageBucket: "rnprojectsanber.appspot.com",
  messagingSenderId: "663509028506",
  appId: "1:663509028506:web:99c8629e882dc7c5321923",
  measurementId: "G-BC4XZ22Q2Y"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const App: () => React$Node = () => {

  return (
    <AppNavigation />
  );
};

export default App;