// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export default app