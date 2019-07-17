import React from 'react';

class Modificar extends React.Component {

    constructor(props) {
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {farmacia:props.farmacia}
      }

      componentWillReceiveProps(props) {
          this.setState({farmacia: props.farmacia})
      }

      handleChange(event) {
        var newFarmacia = Object.assign({}, this.state.farmacia);
        newFarmacia[event.target.name] = event.target.value;
        this.setState({farmacia: newFarmacia});
      }

      handleSubmit(event) {

        fetch('http://localhost:8888/farmacias', {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.farmacia)
        }).then(res => this.props.productoChange(this.state.farmacia))
          .catch(res => console.log("ERROR") );

        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={this.state.farmacia.nombre} onChange={this.handleChange}/>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

  export default Modificar