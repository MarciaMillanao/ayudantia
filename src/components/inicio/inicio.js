import React, { Component } from 'react';
import Perfil from '../perfil/perfil';
import Info from '../imformacion/info';

class Inicio extends Component {
  render () {
    return (
      <div>
        <Perfil />
        <Info />
      </div>
    )
  }
}

export default Inicio;