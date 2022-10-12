import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyABSF5m0YrTZH8EDVERMfq7FQ5S_6Rk8I4",
  authDomain: "quizapp-36631.firebaseapp.com",
  projectId: "quizapp-36631",
  storageBucket: "quizapp-36631.appspot.com",
  messagingSenderId: "594729738360",
  appId: "1:594729738360:web:56c3dc4da40346c99f8d8d",
  measurementId: "G-T2LWGK3CDF",
};

const app = initializeApp(firebaseConfig);
export let auth = getAuth();
