import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgTu7-uvfHs-FOeHvX6qPwzZIIYJSUM4E",
  authDomain: "school-crud-b0423.firebaseapp.com",
  projectId: "school-crud-b0423",
  storageBucket: "school-crud-b0423.appspot.com",
  messagingSenderId: "441176855090",
  appId: "1:441176855090:web:32e497f2c855f1e019622b"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
