import React from 'react';

class RowFarmacia extends React.Component {

    constructor(props) {
        super(props);
        this.selectFarmacia = this.selectFarmacia.bind(this);
    }
    
    selectFarmacia() {
        this.props.selector(this.props.farmacia)
    }

    render() {      
        return(
            <tr key={this.props.farmacia._id} onClick={this.selectFarmacia}>
              <td>{this.props.farmacia.nombre}</td>
          </tr>)
      
    }
}

  export default RowFarmacia