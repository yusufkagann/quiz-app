// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgEVPqtQqDTzao1a2LgAL4yW6jk26JjNA",
    authDomain: "quizapp-2327e.firebaseapp.com",
    projectId: "quizapp-2327e",
    storageBucket: "quizapp-2327e.firebasestorage.app",
    messagingSenderId: "573771860460",
    appId: "1:573771860460:web:8289ea3fddebf097ce98c9", // BURAYA VİRGÜL EKLEDİM
    databaseURL: "https://quizapp-2327e-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }; // Eğer diğer dosyalar bu config'i kullanıyorsa bu satır önemli