import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA97F5PS7wqvUdJdyakmaJnqq3gYdaSQSg",
  authDomain: "filmyverse-9590d.firebaseapp.com",
  projectId: "filmyverse-9590d",
  storageBucket: "filmyverse-9590d.appspot.com",
  messagingSenderId: "194704483504",
  appId: "1:194704483504:web:b596170dd334a42b318775"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export default app;