import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Route from "./routs";

function App() 
{
  return (
    <div>
      <Header />
      <Route/>
    </div>
  );
}

export default App;
