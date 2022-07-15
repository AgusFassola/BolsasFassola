// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore,getDoc,doc, setDoc, addDoc, Timestamp} from "firebase/firestore";

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

//2. inicializamos la instancia a la base de datos de firestore
const appFirestore = getFirestore(appFirebase);

export function testDatabase(){
    console.log(appFirestore)
}

//3. obtenemos todos los items
export async function getItems(){
  //3.a. instanciamos una coleccion (appfirestore, "nombre de la coleccion")
    const bolsasCollection=collection(appFirestore,"bolsas");

    //3.b.obtenemos los documentos con getDocs(referencia de la coleccion)
    const bolsasSnapShot= await getDocs(bolsasCollection);//esperamos a que llegue antes de seguir ejecutando

    //eso hace que aca nunca retornemos un array vacío
    //3.c. del snapshot mapeamos los documentos
    let respuesta=bolsasSnapShot.docs.map(doc=>{
      return{
        ...doc.data(),
        id:doc.id//para poder obtener el id de firebase, sino no te la da, viene por separado
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
    //pegar los productos
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
/*
FUNCION CON QUERY "WHERE"
export async function traerProductosDeCategoria(idCategory){

  import{collection,query,where} from "firebase/firestore";

  const bolsaCollection = collection(appFirestore, "cities");

  const q = query(bolsaCollection, where("categoria","==",idCategory));

  const bolsasSnapshot = await getDocs(q);
  let respuesta= bolsasSnapshot.docs.map( doc=>{
    return{
      ...doc.data(),
      id:doc.id
    }
  })
  return respuesta;
}
*/
export default appFirebase