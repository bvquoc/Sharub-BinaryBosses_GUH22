import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import 'firebase/storage';
import { getStorage } from 'firebase/storage';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCwWfIRNRFy_itijHohaeDWsqS6ABcFLdI',
  authDomain: 'guh22-binarybosses.firebaseapp.com',
  projectId: 'guh22-binarybosses',
  storageBucket: 'guh22-binarybosses.appspot.com',
  messagingSenderId: '217296824756',
  appId: '1:217296824756:web:14d456650bde6c5b14eae1',
  measurementId: 'G-9Z4J7P2Z1Y',
};

const firebase = initializeApp(firebaseConfig);
export default firebase;

export const firestore = getFirestore();
export const auth = getAuth(firebase);
export const storage = getStorage(firebase);
