import './App.css';
import Axios from 'axios'

function App() {
  
  function getData(){
    Axios.get('http://localhost:8080')
    .then(Response => Response.data)
    .then(data => console.log(data))
  }

  return (
    <div className="App">
      <button onClick={getData}>Pegar dados</button>
    </div>
  );
}

export default App;
