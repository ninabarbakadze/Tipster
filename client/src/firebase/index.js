import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPLuMeAHIiSO1douAaEi7p1nYtl2JlSmU",
  authDomain: "tipster-3d872.firebaseapp.com",
  projectId: "tipster-3d872",
  storageBucket: "tipster-3d872.appspot.com",
  messagingSenderId: "309594397293",
  appId: "1:309594397293:web:3bd68b8919884a67adbd64",
  measurementId: "G-0030BK3G4Q"
};

const firebase = initializeApp(firebaseConfig);

const storage = getStorage(firebase);

export { storage };