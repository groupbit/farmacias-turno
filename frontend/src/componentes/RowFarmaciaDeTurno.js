import React from 'react';



class RowFarmaciaDeTurno extends React.Component {

    constructor(props) {
        super(props);
        this.selectFarmacia = this.selectFarmacia.bind(this);
    }
    
    selectFarmacia() {
        this.props.selector(this.props.farmacia)
    }

  

    render() {      
        return(
            <tr key={this.props.farmacia._id}>
              <td>{this.props.farmacia.nombre}</td>
              <td>{this.props.farmacia.direccion}</td>
              <td>
             </td>

          </tr>)
       }
 
}

  export default RowFarmaciaDeTurno