import firebaseAuth from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7x2jBM1UgxSTd3nD1RQAjtnrUDaHLy4s",
    authDomain: "todo-app-7e18b.firebaseapp.com",
    databaseURL: "https://todo-app-7e18b-default-rtdb.firebaseio.com",
    projectId: "todo-app-7e18b",
    storageBucket: "todo-app-7e18b.appspot.com",
    messagingSenderId: "926569598282",
    appId: "1:926569598282:web:bab44971e7586b516605b3"
};
firebaseAuth.initializeApp(firebaseConfig);

export { firebaseAuth }