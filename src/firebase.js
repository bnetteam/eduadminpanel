import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAN-fHhE5pw6-v_mBY7kbDhv_c3wc6DAqA",
  authDomain: "edu-adminpanel.firebaseapp.com",
  projectId: "edu-adminpanel",
  storageBucket: "edu-adminpanel.appspot.com",
  messagingSenderId: "950383606244",
  appId: "1:950383606244:web:d66f9140ba513bf1136ff1",
  measurementId: "G-V3VM2SVRNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);