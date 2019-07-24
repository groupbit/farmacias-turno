import React from 'react';
import {Col, Button, Form, FormGroup, Label, Input, FormText ,FormFeedback} from 'reactstrap';

class Modificar extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {farmacia:props.farmacia}
        this.estadoInicial = this.estadoInicial.bind(this);
      }

      componentWillReceiveProps(props) {
          this.setState({farmacia: props.farmacia})
      }

      handleChange(event) {
        const target = event.target;
        var newFarmacia = Object.assign({}, this.state.farmacia);
        newFarmacia[event.target.name] = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({farmacia: newFarmacia});
      }
      estadoInicial(){
        this.setState({ farmacia: { nombre: "", deTurno: true, direccion: "" } });
      }
      handleSubmit(event) {
        if (this.state.farmacia._id) {
          this.editarFarmacia();
        } else {
          this.agregarFarmacia();
        }
        event.preventDefault();
      }
      editarFarmacia() {

        fetch('http://localhost:8888/farmacias', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.farmacia)
        }).then(res => this.props.farmaciaChange(this.state.farmacia))
          .then(this.estadoInicial);

      }
      agregarFarmacia() {
        fetch(`http://localhost:8888/farmacias`, {
      method: "POST",
      body: JSON.stringify(this.state.farmacia),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
        }).then(res => this.props.listado())
          .then(this.estadoInicial);
      }
    
      render() {
        return (
          <Form class="margen-superior" onSubmit={this.handleSubmit}>
           <FormGroup >
            <Label for="nombre">Nombre</Label>
            <Input type="text" name="nombre" size="10" placeholder="Nombre" value={this.state.farmacia.nombre} onChange={this.handleChange}/>
            <FormFeedback>You will not be able to see this</FormFeedback>
            <FormText></FormText>
          </FormGroup>
           <FormGroup >
            <Label for="deTurno">Estado</Label>
            <input
            name="deTurno"
            type="checkbox"
            checked={this.state.deTurno}
            onChange={this.handleChange}></input>
          </FormGroup>
           <FormGroup >
            <Label for="direccion">Direccion</Label>
            <Input type="text" name="direccion" size="10" placeholder="Direccion" value={this.state.farmacia.direccion} onChange={this.handleChange}/>
            <FormFeedback>You will not be able to see this</FormFeedback>
            <FormText></FormText>
           </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 1, offset: 2 }}>
             <Button type="submit" value="Submit" outline color="info" >Ok</Button>
              </Col>
        </FormGroup>
          </Form>
        );
      }
}

  export default Modificar