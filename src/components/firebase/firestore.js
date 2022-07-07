// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKE-yL77pa74TpITdo1jRvFUXmTCb-_qQ",
  authDomain: "bolsas-ed3ed.firebaseapp.com",
  projectId: "bolsas-ed3ed",
  storageBucket: "bolsas-ed3ed.appspot.com",
  messagingSenderId: "700914067185",
  appId: "1:700914067185:web:1dff65db61198aac37eb50"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export function testDatabase(){
    console.log(appFirestore)
}

export async function getItems(){
    const bolsasCollection=collection(appFirestore,"bolsas");

    const bolsasSnapShot= await getDocs(bolsasCollection);

    let respuesta=bolsasSnapShot.docs.map(doc=>{
      return{
        ...doc.data(),
        id:doc.id//para poder obtener el id de firebase, sino no te la da
      }
      
    } )

    return respuesta;
    
}

export default appFirebase