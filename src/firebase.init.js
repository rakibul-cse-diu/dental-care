import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAKCUGzByxmcyJMGyD91kE1Ffuj6bmIPrY",
    authDomain: "dental-care-bc7b9.firebaseapp.com",
    projectId: "dental-care-bc7b9",
    storageBucket: "dental-care-bc7b9.appspot.com",
    messagingSenderId: "224488589692",
    appId: "1:224488589692:web:632d223b1e3a7457143cf9"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;