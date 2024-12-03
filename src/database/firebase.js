// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// npm install -g firebase-tools

const firebaseConfig = {
  apiKey: "AIzaSyDY3DRVzn-6zcur_ILApY0ln0utG3fnIF8",
  authDomain: "email-marketing-blog.firebaseapp.com",
  projectId: "email-marketing-blog",
  storageBucket: "email-marketing-blog.firebasestorage.app",
  messagingSenderId: "816256630628",
  appId: "1:816256630628:web:1e99683fc64e155376c471",
  measurementId: "G-LSN84PHRKX",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
