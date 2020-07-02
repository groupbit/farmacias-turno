import React from 'react';
class Turno extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          todos:[],
          farmacia:props.farmacia
        };
    }
    componentWillReceiveProps(props) {
        this.setState({farmacia: props.farmacia},console.log("farmacia",this.state))
    }

    render(){
        return(
        <div>{console.log("stat",this.state)}</div>
    )
}

}
export default Turno