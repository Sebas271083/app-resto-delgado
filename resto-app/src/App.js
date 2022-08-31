import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
// import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';


function App() {

  
  return (
    <div className="App bg-green">
      <NavBar2 />
      <ItemListContainer 
          greeting = "BienVenidos"
       />
      <ItemCount />


    </div>
  );
}

export default App;
