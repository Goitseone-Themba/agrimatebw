import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDrHJhn2Oqi4dIDJx64qRv3-PObBFYV_jM",
  authDomain: "agrimatebw-3c7c6.firebaseapp.com",
  projectId: "agrimatebw-3c7c6",
  storageBucket: "agrimatebw-3c7c6.appspot.com",
  messagingSenderId: "523012382624",
  appId: "1:523012382624:web:42e500255aaf7885e28ec5",
  measurementId: "G-9CV0GSV9M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app