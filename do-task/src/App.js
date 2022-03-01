import {useState} from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ShowList from './components/ShowList';

function App() {
  
  return (
    <div className = "App">
      <header className ="App-header">
        <h1>Task List</h1>
      </header>
      <InputForm/>
      
    </div>
  );
}

export default App;
