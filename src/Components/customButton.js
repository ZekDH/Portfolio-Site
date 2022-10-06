import React from 'react';
import { Text } from 'rebass'

export default class CustomButton extends React.Component {

  constructor(props) {
    super(props);
    this.state ={

    }
  }

  componentDidMount(){

  }

  render(){
    return(
      <>
        <button style={{color: this.props.color, backgroundColor: this.props.bg}}><Text fontSize={[ 3, 4, 5 ]}>{this.props.text}</Text></button>
      </>
    );
  }

}
