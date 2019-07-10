import React from 'react';

const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
const API_PORT = process.env.REACT_APP_API_PORT || 8888;

const API_URL = `//${API_HOST}:${API_PORT}`;

class CargarFarmacia extends React.Component {

    constructor() {
        super();
        this.state = { nombre: ""}
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
          <form onSubmit={this.handleSubmit}>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange}/>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

  export default CargarFarmacia