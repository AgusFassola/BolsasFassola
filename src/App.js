
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {

  const stylesH1={color:'blue',}
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1 style={stylesH1}>Bienvenidos a simples acciones</h1>
      </header>
      {/*<ItemListContainer greet="Puedes comprar todo tipo de bolsas"/>*/}
      <ItemDetailContainer itemId={1} greeting="Detalle de un producto" />
      <p style={{marginTop: "12px"}}>Agustin Fassola</p> 
    </div>
  );
}

export default App;

/**
 * let urlRequest=`https://pokeapi.co/api/v2/pokemon`;
 * const[pokeList,setPokeList]=useState([]);
useEffect(()=>{
fetch(urlRequest)
.then(respuesta=> respuesta.json())
.then(respuestaJSON=> setPokeList(respuestaJSON.results))

//.then(respuesta2 => console.log(respuesta2.results[5].name))
//.catch(error=> console.error("error obteniendo datos de pokemon"));
},[])

 * 
 */