import './App.css';
import Axios from 'axios'
import { useState } from 'react'
function App() {
  const [user, setUser] = useState('')
  const [emailAccount, setEmail] = useState('')
  const [pswd, setPswd] = useState('')


  function insertData(){
    Axios.post('http://localhost:8080/register', {
      nome:user, //nome is the field name in DB as senha and email are.
      senha:pswd, 
      email:emailAccount,
    });
  }

  return (
    <div className="App">
      <button onClick={insertData}>Insert data</button>
      <input  type='text' placeholder='Username' onChange={e => setUser(e.target.value)}></input>
      <input  type='email' placeholder='Email' onChange={e => setEmail(e.target.value)}></input>
      <input  type='password' placeholder='Password' onChange={e => setPswd(e.target.value)}></input>
    </div>
  );
}

export default App;
