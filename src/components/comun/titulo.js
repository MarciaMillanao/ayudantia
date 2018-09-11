import React, { Component } from 'react';
import Texto from './texto';

class Titulo extends Component {
  render () {
    return (
      <div>
        <h1>Hola Esto es un título</h1>
        <Texto text="holabbcdsjhbcdsja asdbcashd" />
        <Texto text="arfenfsdfnads dhjshfasdfb" />
      </div>
    )
  }
}

export default Titulo;