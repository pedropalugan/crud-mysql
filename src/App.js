import logo from './logo.svg';
import './App.css';
import InputTag from './componentes/main';
import Teste from './componentes/teste';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  exact path='/' element={<InputTag />} />
          <Route path='/teste' element={<Teste />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
