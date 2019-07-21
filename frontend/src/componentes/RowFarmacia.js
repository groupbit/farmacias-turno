import React from 'react';



class RowFarmacia extends React.Component {

    constructor(props) {
        super(props);
        this.selectFarmacia = this.selectFarmacia.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.actualizar = this.actualizar.bind(this)
    }
    
    selectFarmacia() {
        this.props.selector(this.props.farmacia)
    }

    actualizar() {
        this.props.actualizarList(this.props.farmacia)
    }
    handleSubmit(id) {
        fetch(`"http://localhost:8888/farmacias/" ${id}`, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }).then(this.actualizar);
      }
    render() {      
        return(
            <tr key={this.props.farmacia._id} onClick={this.selectFarmacia}>
              <td>{this.props.farmacia.nombre}</td>
              <td>{this.props.farmacia.DeTurno}</td>
              <td>{this.props.farmacia.direccion}</td>
              <td>
              <button
                   onClick={() => {
                      this.handleSubmit(this.props.farmacia._id);
                    }}
              >
              <ion-icon name="trash"></ion-icon>
              </button>
              
             </td>

          </tr>)
       }
 
}

  export default RowFarmacia