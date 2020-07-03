import React from 'react';
import Select from 'react-select'
import {Col, FormGroup,FormText} from 'reactstrap';
import TodoForm from "./TodoFord";
import Todo from './Todo';
var moment = require('moment');


class Modificar extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.listaDeFechaNueva = this.listaDeFechaNueva.bind(this);
        this.addTodo=this.addTodo.bind(this);
        
        this.state = {
          selectedOption: "",
          options:null,
          todos:[],
          fecha:"",
          listaFecha:[],
          farmacia:props.farmacia};
        this.estadoInicial = this.estadoInicial.bind(this);
        this.setFechas = this.setFechas.bind(this);
      }
      

      componentWillReceiveProps(props) {
          this.setState({options:props.farmacia.fechas.map(function(f){
            const data =moment(f).format('DD-MM-YYYY')
            const data2 = {label:data};
            return data2;
            })
          })
          this.setState({farmacia: props.farmacia},console.log("state",this.state))
      }

      handleChange(event) {
        const target = event.target;
        var newFarmacia = Object.assign({}, this.state.farmacia);
        newFarmacia[event.target.name] = target.value;
        this.setState({farmacia: newFarmacia});
      }
      setFechas(dates) { 
        console.log(dates);
        var newFarmacia = Object.assign({}, this.state.farmacia);
        newFarmacia["fechas"] = dates
        this.setState({farmacia:newFarmacia},this.editarFarmacia);

      } 
      estadoInicial(){
        this.setState({ farmacia: { nombre: "", direccion: "", fechas:[]} });
        this.setState(
          {
            selectedOption: "",
            options:null,
            todos:[],
            fecha:"",
            listaFecha:[]
          })

      }
      listaDeFechaNueva(){
        let nuevaFecha = this.state.fecha;
        console.log("nuevaFecha",nuevaFecha)
        console.log("listaNuevaState",this.state)
        
        let fechasFarmaci = this.state.options.map(function(f){
                                return f.label
                            })
        fechasFarmaci.push(nuevaFecha)
        console.log("lista",fechasFarmaci)
        this.setFechas(fechasFarmaci);

      }
      listo = () => {
        let text =  this.state.todos.map(function(p){return p.text});
        console.log("listas",this.state.todos);
        console.log("text",text);
        var {farmacia} = this.state;
        farmacia.fechas = text;
        this.setState(
          {pesaje: farmacia},
          console.log(this.state.farmacia)
          );
        
      }
      handleSubmit(event) {
        if (this.state.farmacia._id) {
          this.listaDeFechaNueva();
        } else {
          this.listo()
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
        console.log("farmacia",this.state)
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
      removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
        arr.splice( i, 1 );
      }
      handleChange2 = selectedOption => {
        this.setState({selectedOption},this.removeItemFromArr(this.state.options,this.state.selectedOption));
        console.log("state",this.state);
      };
      nuevaFecha= event =>{
        let value = event.target.value
        console.log("event",value)
        this.setState({fecha:value},console.log("nuevaFecha",this.state.fecha))
      }
      addTodo = todo => {
        this.setState({
          todos: [todo, ...this.state.todos]
        });
      };
      render() {
        const { selectedOption } = this.state;
        let todos = [];
        return (
          <form class="margen-superior" >
           <FormGroup>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" size="10" placeholder="Nombre" value={this.state.farmacia.nombre} onChange={this.handleChange}/>
           </FormGroup>
           <FormGroup >
            <label for="direccion">Direccion</label>
            <input type="text" name="direccion" size="10" placeholder="Direccion" value={this.state.farmacia.direccion} onChange={this.handleChange}/>
            <FormText></FormText>
           </FormGroup> 
           <div >
          <TodoForm onSubmit={this.addTodo}/>
            {todos.map(todo => (
              <Todo 
                key={todo.id}
                toggleComplete={() => this.toggleComplete(todo.id)} 
                onDelete = {() => this.handleDeleteTodo(todo.id)}
                todo={todo}
              />
            ))}
            <div>
            Total:{this.state.todos.filter(todo => !todo.complete).length}
          </div>
          </div>    
          <div> 
           <div>
            <div class="col-4">
             <Select
              type="date"
              placeholder = {"SelectFecha"}
              value={selectedOption}
              onChange={this.handleChange2}
              options={
                this.state.options
              }
             />

           <input type="text" value={this.state.selectedOption.label}/>
           <input type="date" 
                    placeholder="Fecha"
                    name="fecha"
                    value={this.state.fecha} 
                    onChange={this.nuevaFecha}
                    />
            </div>
          </div>
          </div>

          <FormGroup check row>
              <Col sm={{ size: 1, offset: 2 }}>
             <button type="submit" value="Submit" outline color="info" >Ok</button>
              </Col>
            </FormGroup>
            <button onClick={this.handleSubmit}>listo</button>
          </form>
        );
      }
     
    
}

  export default Modificar