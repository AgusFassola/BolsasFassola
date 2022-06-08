
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const stylesH1={color:'blue',}
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1 style={stylesH1}>Bienvenidos a simples acciones</h1>
      </header>
      <ItemListContainer greeting="Puedes comprar todo tipo de bolsas"/>
      <p style={{marginTop: "12px"}}>Agustin Fassola</p> 
    </div>
  );
}

export default App;
