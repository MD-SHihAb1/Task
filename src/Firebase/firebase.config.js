// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJr8Aow_EtZDHmsdsSpSbAdxLgtG6oth8",
  authDomain: "real-estate-4e1f5.firebaseapp.com",
  projectId: "real-estate-4e1f5",
  storageBucket: "real-estate-4e1f5.appspot.com",
  messagingSenderId: "684894252282",
  appId: "1:684894252282:web:1c7dc1276c7640ff4b6d43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;