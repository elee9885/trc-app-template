// lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCb8eiA93r7evnsq4FerI1hV116pKXk3hwU",
  authDomain: "transitional-care-management.firebaseapp.com",
  projectId: "transitional-care-management",
  storageBucket: "transitional-care-management.appspot.com",
  messagingSenderId: "227937837082",
  appId: "1:227937837082:web:49b95818bc4601a7d371a3",
  measurementId: "G-26NT7G9PWC"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { db, analytics };
