
import LogoImg from './assets/simples_acciones.png';
import NavBar from './components/NavBar';

function App() {

  const stylesH1={color:'blue',}
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1 style={stylesH1}>Bienvenidos a simples acciones</h1>
        <img alt='logo coder' src={LogoImg}></img>
        <p style={{marginTop: "120px"}}>compra tus bolsas</p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
