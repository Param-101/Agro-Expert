// import firebase from "firebase/compat/app";
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyAibj6s3CVWdGEf6Yj4IKpfp3-ybaanU5E",
//   authDomain: "agroexpert-collegeproject.firebaseapp.com",
//   databaseURL:"https://agroexpert-collegeproject-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "agroexpert-collegeproject",
//   storageBucket: "agroexpert-collegeproject.appspot.com",
//   messagingSenderId: "359594408449",
//   appId: "1:359594408449:web:c7e08d465869b851411e00",
//   measurementId: "G-FW4BYZ8EZ0",
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default db;


// config.tsx
import { initializeApp, FirebaseOptions } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAibj6s3CVWdGEf6Yj4IKpfp3-ybaanU5E",
  authDomain: "agroexpert-collegeproject.firebaseapp.com",
  databaseURL:"https://agroexpert-collegeproject-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agroexpert-collegeproject",
  storageBucket: "agroexpert-collegeproject.appspot.com",
  messagingSenderId: "359594408449",
  appId: "1:359594408449:web:c7e08d465869b851411e00",
  measurementId: "G-FW4BYZ8EZ0",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
