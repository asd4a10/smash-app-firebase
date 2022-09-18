import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import Paginate from "vuejs-paginate-next";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import router from "./router";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzxq9FZBxz2zhMbaNSFJk66-0a5jzpOJs",
  authDomain: "smash-db.firebaseapp.com",
  projectId: "smash-db",
  storageBucket: "smash-db.appspot.com",
  messagingSenderId: "835296192288",
  appId: "1:835296192288:web:9de0fe19b075d85e4c1945",
  measurementId: "G-YPZ3YEXTFP",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912,
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.use(Paginate);

app.mount("#app");
