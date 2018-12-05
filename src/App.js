import React, { Component } from 'react';
import './App.css';
import Home from './components/pages/home.js'
import Kartu from './components/Kartu';

class App extends Component {
  render() {
    return (
      <div className="container">
     {/* <Cards nama="Malicha Laela Rachmawati" tanggal="Semarang, 14 November 2000" alamat="Bringin"/>
     <Cards nama="Kinanti Anjang Tresna" tanggal="Kendal, 8 Desember 2001" alamat="Mangkang"/>
     <Cards nama="citra" tanggal="demak, 10 juni 2001" alamat="bandung"/> */}

     <Kartu/>
     </div>
    );
  }
}

export default App;
