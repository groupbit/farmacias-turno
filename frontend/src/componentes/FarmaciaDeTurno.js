import React from 'react';
import RowFarmaciaDeTurno from './RowFarmaciaDeTurno';



class FarmaciaDeTurno extends React.Component {

    constructor(props) {
      super(props);
      this.state = { farmacias: [], selected:{}}
    }

    componentWillMount() {
      fetch(`http://localhost:8888/farmacias?turno=true`)
        .then( res => res.json())
        .then( prds => this.setState({farmacias: prds}));
    }

    render() {
      if( this.state.farmacias.length > 0 ) {
        return(
          <div className="productosCSS">
              <h2>{this.props.titulo}</h2>
          <table className="table">
            <thead>
              <tr>
                 <th>Nombre</th>
                 <th>Direccion</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
          
        </div>)
      }
      else {
        return(
          <div className="productosCSS">
              <h2>{this.props.titulo}</h2>
              CARGANDO
          </div>);  
      }
    }
    renderHeaders(columns) {
      return columns.map((col) => {
        return (
            <th>{col}</th>
        );
      })
    }

    renderRows() {
      return this.state.farmacias.map((unFarmacia) => {
        return (
          <RowFarmaciaDeTurno 
          farmacia={unFarmacia} 
          />
        );
      })
    }
  }



  export default FarmaciaDeTurno
