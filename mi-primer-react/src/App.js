import './App.css';

function App(){
  
  const titulo = <h1> mi titulo</h1>

  function suma(x,y) {
    const suma = x +y
    return suma
  }
  return <div>{titulo}<h2>{ suma(5,5)}</h2>{" pruebas"}</div>

  
}
export default App;