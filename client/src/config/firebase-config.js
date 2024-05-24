import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOC-DbX-6UXR7pRRwYooOl9FCSRdb4hWk",
  authDomain: "neatly-hotel.firebaseapp.com",
  projectId: "neatly-hotel",
  storageBucket: "neatly-hotel.appspot.com",
  messagingSenderId: "860600496131",
  appId: "1:860600496131:web:0c7b7482bb834a3a881e36",
  measurementId: "G-9E2M8GQFVK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
