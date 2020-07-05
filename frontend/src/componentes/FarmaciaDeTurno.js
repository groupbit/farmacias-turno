import React from 'react';
import RowFarmaciaDeTurno from './RowFarmaciaDeTurno';
var addZero = require('add-zero');


class FarmaciaDeTurno extends React.Component {

    constructor(props) {
      super(props);
      this.state = { 
        farmacias: [],
         selected:{},
         fecha:""
        }
      this.fetchData = this.fetchData.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
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
      this.fetchData()
    }
    handleChange(e) {
      const target = e.target;
      const value = target.value;
      const name = target.name;
      this.setState({[name]:value});
    }
  
    fetchData(consulta) {
      console.log("2.consulta: ",consulta);
      console.log("fecha: ", this.state.fecha);

      if(consulta != null){
        fetch(`http://localhost:8888/farmacias?turno=`+consulta)
          .then( res => res.json())
          .then( prds => this.setState({farmacias: prds}));
      }
      if(consulta == null){
        let fecha = ''+this.hoyFecha()+'';
        fetch(`http://localhost:8888/farmacias?turno=`+fecha)
          .then( res => res.json())
          .then( prds => this.setState({farmacias: prds}));
      }
    }
    handleSubmit(event) {
      var consulta
      if(this.state.nombre === ""){
        this.fetchData(consulta);
      }
      if(this.state.fecha !== "" ){ 
        
        consulta = this.state.fecha;
        console.log("consulta",consulta)
        this.fetchData(consulta);
      }
      event.preventDefault();
    }
  
  
  

    render() {
      if( this.state.farmacias.length > 0 ) {
        return(
          <div className="productosCSS">
              <h2>{this.props.titulo}</h2>
          <div>
          <form>
            <label>Fecha</label>
            <input  type= "date" name="fecha" value={this.state.fecha}  onChange={this.handleChange} />
            <button type="button" onClick={this.handleSubmit}>Consultar</button>
          </form>

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
