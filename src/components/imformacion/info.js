import React, { Component } from 'react';
import Titulo from '../comun/titulo';
import Texto from '../comun/texto';

class Info extends Component {
  render () {
    return (
      <div>
        <Titulo title="Hola" />
        <Texto text="fsdkfnsdkfsd.fsd" />
      </div>
    )
  }
}

export default Info;