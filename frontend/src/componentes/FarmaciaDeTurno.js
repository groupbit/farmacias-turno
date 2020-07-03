import React from 'react';
import RowFarmaciaDeTurno from './RowFarmaciaDeTurno';
var addZero = require('add-zero');


class FarmaciaDeTurno extends React.Component {

    constructor(props) {
      super(props);
      this.state = { farmacias: [], selected:{}}
    }
    hoyFecha(){
      var hoy = new Date();
          var dd = hoy.getDate();
          var mm = hoy.getMonth()+1;
          var yyyy = hoy.getFullYear();
          
          dd = addZero(dd);
          mm = addZero(mm);
   
          console.log("fecha",yyyy+'-'+mm+'-'+dd)
          return yyyy+'-'+mm+'-'+dd;

  }
    componentWillMount() {
      let fecha = ''+this.hoyFecha()+'';
      fetch(`http://localhost:8888/farmacias?turno=`+fecha)
        .then( res => res.json())
        .then( prds => this.setState({farmacias: prds}));
    }

    render() {
      if( this.state.farmacias.length > 0 ) {
        return(
          <div className="productosCSS">
              <h2>{this.props.titulo}</h2>
          <div>
            <input type="date" ></input>
          </div>
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
          <button onClick={this.hoyFecha}>fecha</button>
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
