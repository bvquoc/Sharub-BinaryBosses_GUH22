// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCwWfIRNRFy_itijHohaeDWsqS6ABcFLdI',
  authDomain: 'guh22-binarybosses.firebaseapp.com',
  projectId: 'guh22-binarybosses',
  storageBucket: 'guh22-binarybosses.appspot.com',
  messagingSenderId: '217296824756',
  appId: '1:217296824756:web:14d456650bde6c5b14eae1',
  measurementId: 'G-9Z4J7P2Z1Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
