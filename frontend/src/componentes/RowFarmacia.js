import React from 'react';
import {Col, Button,FormGroup} from 'reactstrap';
// import Turno from './Turno';




class RowFarmacia extends React.Component {

    constructor(props) {
        super(props);
        this.selectFarmacia = this.selectFarmacia.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {farmacia:props.farmacia};
        this.actualizar = this.actualizar.bind(this);
        this.estadoInicial=this.estadoInicial.bind(this);
    }
    
    selectFarmacia() {
        this.props.selector(this.props.farmacia)
    }

    actualizar() {
        this.props.actualizarList(this.props.farmacia)
    }
    estadoInicial(){
      this.setState({ farmacia: { nombre: "", deTurno: true, direccion: "", fechas:[]} });
    }
    handleSubmit(id) {
        fetch("http://localhost:8888/farmacias/" +id, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }).then(this.estadoInicial)
            .then(this.actualizar);

      }
    render() {      
        return(
            <tr key={this.props.farmacia._id} onClick={this.selectFarmacia}>
              <td>{this.props.farmacia.nombre}</td>
              <td>{this.props.farmacia.direccion}</td>
              <td>{this.props.farmacia.fechas}</td>
              <td>
              <FormGroup check row>
              <Col sm={{ size: 1, offset: 2 }}>
              <Button  onClick={() => {
                      this.handleSubmit(this.props.farmacia._id);
                    }} outline color="info" >Eliminar</Button>
              </Col>
              </FormGroup>
              
             </td>

          </tr>)
       }
 
}

  export default RowFarmacia