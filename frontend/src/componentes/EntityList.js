import React from 'react';
import RowFarmacia from './RowFarmacia';
import Modificar from './Modificar';

const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
const API_PORT = process.env.REACT_APP_API_PORT || 8888;

const API_URL = `//${API_HOST}:${API_PORT}`;

class EntityList extends React.Component {

    constructor(props) {
      super(props);
      this.state = { farmacias: [], selected:{}}
      this.select = this.select.bind(this);
      this.farmciaChange = this.farmciaChange.bind(this);
    }

    componentWillMount() {
      fetch(`http://localhost:8888/farmacias`)
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
                 <th>nombre</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
          <Modificar farmacia={this.state.selected} farmciaChange={this.farmaciaChange} />
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
      return columns.map((col, index) => {
        return (
            <th>{col}</th>
        );
      })
    }
    select(unFarmacia) {
      this.setState({selected:unFarmacia})
    }
    farmciaChange(unFarmacia) {
      var newFarmacias = this.state.farmacias.map((item) => (unFarmacia._id !== item._id) ? item : unFarmacia )
      this.setState({farmacias: newFarmacias, selected:unFarmacia})
    }

    renderRows() {
      return this.state.farmacias.map((unFarmacia, index) => {
        return (
          <RowFarmacia farmacia={unFarmacia} selector={this.select} />
        );
      })
    }
  }



  export default EntityList
