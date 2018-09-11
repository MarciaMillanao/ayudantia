import React, { Component } from 'react';
import Titulo from '../comun/titulo';
import Texto from '../comun/texto';
import Image from '../comun/img';

class Perfil extends Component {
  render () {
    return (
      <div>
        <Titulo title="Bienvenidos a mi perfil" />
        <Image porfil="https://static.vix.com/es/sites/default/files/styles/thumbnail/public/imj/hogartotal/r/razas-de-perros-basset-hound-1.jpg?itok=hI6-kwD3" />
        <Texto text="Nombre: Pequeño Saltamonte" />
        <Texto text="Me gusta: Saltar y jugar en el parque" />
      </div>
    )
  }
}

export default Perfil;