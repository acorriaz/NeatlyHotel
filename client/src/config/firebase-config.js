import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBSWssTrGffjAK2qx03AseI1bPl-KOpyU",
  authDomain: "neatly-authentication.firebaseapp.com",
  projectId: "neatly-authentication",
  storageBucket: "neatly-authentication.appspot.com",
  messagingSenderId: "259921121110",
  appId: "1:259921121110:web:64f61c4e3e3c04923690f7",
  measurementId: "G-F8D61S72GD",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
