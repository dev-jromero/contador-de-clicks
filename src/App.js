import './App.css';
import freeCodeCamoLogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
         className='freecodecamp-logo'
         src={freeCodeCamoLogo}
         alt='logo de freedcodecamp'
        />
      </div>
    </div>
  );
}

export default App;
