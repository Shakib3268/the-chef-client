// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpbPNL5bZXKklMfGSXnJRy30eng7Qh_do",
  authDomain: "the-chef-client.firebaseapp.com",
  projectId: "the-chef-client",
  storageBucket: "the-chef-client.appspot.com",
  messagingSenderId: "580747424260",
  appId: "1:580747424260:web:0a89b161e24ef14009fb51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app