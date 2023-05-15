import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { applyActionCode } from "firebase/auth";

const firebaseConfig = {
  apiKey: "?????????",
  authDomain: "?????????",
  projectId: "?????????",
  storageBucket: "?????????",
  messagingSenderId: "?????????",
  appId: "?????????",
  measurementId: "?????????",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export { auth, db };
