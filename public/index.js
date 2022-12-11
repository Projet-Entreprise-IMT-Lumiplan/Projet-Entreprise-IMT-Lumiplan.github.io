// Import the functions we need from firebase
import { initializeApp } from "/firebase/app";
import { getAnalytics } from "/firebase/analytics";
import { getAuth} from "/firebase/auth";
import { getDatabase, ref, set, child, update, remove, onValue } from "/firebase/database";
	
// https://firebase.google.com/docs/web/setup#available-libraries
//Connection with our firebase page base on apiKey
 const firebaseConfig = {
	apiKey: "AIzaSyAqpi_Ngce7eIpiVjYjq3-Kra58mXSSe2I",

    authDomain: "lumos-4786c.firebaseapp.com",

    databaseURL: "https://lumos-4786c-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "lumos-4786c",

    storageBucket: "lumos-4786c.appspot.com",

    messagingSenderId: "1048784963409",

    appId: "1:1048784963409:web:bd290641e2a69b9c4f7570",

    measurementId: "G-KZZDY7FP1E"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);






