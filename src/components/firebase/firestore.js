import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore,getDoc,doc, setDoc, addDoc, Timestamp} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAKE-yL77pa74TpITdo1jRvFUXmTCb-_qQ",
  authDomain: "bolsas-ed3ed.firebaseapp.com",
  projectId: "bolsas-ed3ed",
  storageBucket: "bolsas-ed3ed.appspot.com",
  messagingSenderId: "700914067185",
  appId: "1:700914067185:web:1dff65db61198aac37eb50"
};


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
        id:doc.id
      }
      
    } )

    return respuesta;
    
}
export async function traerUnProducto(itemId){

  const docref=doc(appFirestore,"bolsas",itemId);

  const docSnapshot= await getDoc(docref);

  return{
    id:docSnapshot.id, ...docSnapshot.data()
  };
  
}

export async function createBuyOrder(dataOrder){
  const orderCollectionRef = collection(appFirestore,"orders");
  const dateTimestamp= Timestamp.now();
  const dataOrderWithDate={
    buyer: dataOrder.buyer,
    items: dataOrder.items,
    total: dataOrder.total,
    date:dateTimestamp
  }

  const orderCreated= await addDoc(orderCollectionRef, dataOrderWithDate);
  
  return orderCreated;
}

export async function exportDataToFirestore(){
  const productos=[
    
  ];
  const bolsaCollection = collection(appFirestore,"bolsas");

productos.forEach(item=>{

  const newDoc = doc(bolsaCollection)
  setDoc(newDoc, item).then( res=>{
    console.log("documento guardado",res)
  })
})

  const itemPrueba = productos[0];
}

export default appFirebase