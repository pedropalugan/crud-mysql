import './App.css';
import Axios from 'axios'

function App() {

  function getData(){
    Axios.get('http://localhost:8080')
    .then(Response => console.log(Response))

  }

  return (
    <div className="App">
      <button onClick={getData}>Pegar dados</button>
    </div>
  );
}

export default App;
