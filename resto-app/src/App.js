import './App.css';
import ItemListContainer from './components/ItemLisContainer/ItemListContainer';
// import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar/NavBar2';


function App() {

  
  return (
    <div className="App bg-green">
      <NavBar2 />
      <ItemListContainer 
          greeting = "BienVenidos"
       />
      


    </div>
  );
}

export default App;
