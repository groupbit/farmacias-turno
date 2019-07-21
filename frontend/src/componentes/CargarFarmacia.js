import React from 'react';
import { Button, Form, Label, Input } from 'reactstrap';


const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
const API_PORT = process.env.REACT_APP_API_PORT || 8888;

const API_URL = `//${API_HOST}:${API_PORT}`;

class CargarFarmacia extends React.Component {

    constructor() {
        super();
        this.state = { nombre: "" ,DeTurno:"" ,direccion:""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }


      handleChange(event) {
        var newFarmacia = Object.assign({}, this.state);
        newFarmacia[event.target.name] = event.target.value;
        this.setState(newFarmacia);
      }

      handleSubmit(event) {

        fetch('http://localhost:8888/farmacias', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },body: JSON.stringify(this.state)

        })

        event.preventDefault();
      }
    
      render() {
        return (
            
          <Form onSubmit={this.handleSubmit}>
            <Label>Nombre</Label>
            <Input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange}/>
            <Label>Estado</Label>
            <Input type="text" name="DeTurno" value={this.state.DeTurno} onChange={this.handleChange}/>
            <Label>Direccion</Label>
            <Input type="text" name="direccion" value={this.state.direccion} onChange={this.handleChange}/>
            <Button type="submit" value="Submit" outline color="success">Agregar</Button>
          </Form>
        );
      }
}

  export default CargarFarmacia