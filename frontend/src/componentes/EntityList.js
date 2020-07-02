import React from 'react';
import RowFarmacia from './RowFarmacia';
import Modificar from './Modificar';


class EntityList extends React.Component {

    constructor(props) {
      super(props);
      this.state = { farmacias: [], selected:{}}
      this.select = this.select.bind(this);
      this.farmaciaChange = this.farmaciaChange.bind(this);
      this.actualizarList = this.actualizarList.bind(this);
      this.listado = this.listado.bind(this);
      
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
          <Modificar 
          farmacia={this.state.selected} 
          farmaciaChange={this.farmaciaChange} 
          listado = {this.listado}
          />
          <table className="table">
            <thead>
              <tr>
                 <th>Nombre</th>
                 <th>De Turno</th>
                 <th>Direccion</th>
                 <th>Fecha</th>
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
      return columns.map((col, index) => {
        return (
            <th>{col}</th>
        );
      })
    }
    select(unFarmacia) {
      this.setState({selected:unFarmacia})
    }
    farmaciaChange(unFarmacia) {
      var newFarmacias = this.state.farmacias.map((item) => (unFarmacia._id !== item._id) ? item : unFarmacia )
      this.setState({farmacias: newFarmacias, selected:unFarmacia})
    }
    actualizarList(unFarmacia) {
      var farmacia = this.state.farmacias.filter(
        item => unFarmacia._id !== item._id
      );
      this.setState({ farmacias: farmacia });
    }

    renderRows() {
      return this.state.farmacias.map((unFarmacia, index) => {
        return (
          <RowFarmacia 
          farmacia={unFarmacia} 
          selector={this.select} 
          actualizarList={this.actualizarList}
          />
        );
      })
    }
    listado(){
      this.componentWillMount();
    }
  }



  export default EntityList
