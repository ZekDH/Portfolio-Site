import React from 'react';
import './App.css';

import ProjectPage from './Components/projectPage'
import HomePage from './Components/homePage'
import UniPage from './Components/uniPage'

import backgroundImage from './Img/background.png'

import { FaBuffer, FaGraduationCap, FaHome } from "react-icons/fa";

//Imported Packages for responsive sizing
import { Box, Flex, Text } from 'rebass'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      red: false,
      blue: true,
      green: false,
      highlightColour: "#000",
      highlightColourTwo: "#000"
    }
    this.changeRed = this.changeRed.bind(this);
    this.changeBlue = this.changeBlue.bind(this);
    this.changeGreen = this.changeGreen.bind(this);
  }

  //Change to first tab by setting states
  //Red and aqua based off colour spectrum
  changeRed(){
    this.setState({
      red: true,
      blue: false,
      green: false,
      highlightColour: "#FF6347",
      highlightColourTwo: "#47E3FF"
    });
    return;
  }
  
  //Change to second tab by setting states
  //Yellow and blue based off colour spectrum
  changeBlue(){
    this.setState({
      red: false,
      blue: true,
      green: false,
      highlightColour: "#4169E1",
      highlightColourTwo: "#E1B941"
    });
    return;
  }

  //Change to third tab by setting states
  //Green and magenta based off colour spectrum
  changeGreen(){
    this.setState({
      red: false,
      blue: false,
      green: true,
      highlightColour: "#3CB371",
      highlightColourTwo: "#B33C7E"
    });
    return;
  }
  
  //Startup function
  componentDidMount(){
    this.changeBlue();
  }

  render(){
    return(
      <>
        {/*Header bar which lets you change between sections of the webpage*/}
        {/*providing multiple width values allows for responsive resizing based off window size*/}
        <Box bg="#ededed" className="center headerbox headerPosition">
          <Flex px={4} py={4} className="center  titleBox" >
  
            <Box onClick={this.changeBlue} className="titleText" width={[1/3, 2/8]}>
              <Text color={this.state.highlightColour} className="HeaderOne titleText" fontSize={[ 2, 3, 4 ]} fontWeight='bold'>
                {this.state.blue && <FaHome color={this.state.highlightColourTwo} size={40} /> }
                {!this.state.blue && <>Daniel Harris</>}
              </Text>
            </Box>
                 
            <Box width={[0/3 , 2/8]}>
            </Box>

            <Box onClick={this.changeRed} width={[1/3 ,2/8]}>
              <Text color={this.state.highlightColour} className="HeaderOne titleText" fontSize={[ 2, 3, 4 ]} fontWeight='bold'>
                {this.state.red && <FaBuffer color={this.state.highlightColourTwo} size={40} /> }
                {!this.state.red && <>Projects</>}
              </Text>
            </Box>

            <Box onClick={this.changeGreen} width={[1/3, 2/8]}>
              <Text color={this.state.highlightColour} className="HeaderOne titleText" fontSize={[ 2, 3, 4 ]} fontWeight='bold'>
                {this.state.green && <FaGraduationCap color={this.state.highlightColourTwo} size={40} /> }
                {!this.state.green && <>University</>}
              </Text>
            </Box>
                 
          </Flex>
        </Box>

        {/*Complete pages converted into components to allow for neater code*/}
        {/*States are used before compnent element to disable components based off state bool*/}
        {this.state.red && <><Box py={5}></Box> <ProjectPage className="body" mainCol={this.state.highlightColour} secCol={this.state.highlightColourTwo} /> </>}
        {this.state.blue && <><Box py={5}></Box> <HomePage className="body" img={backgroundImage} mainCol={this.state.highlightColour} secCol={this.state.highlightColourTwo} /> </>}
        {this.state.green && <><Box py={6}></Box> <UniPage className="body" mainCol={this.state.highlightColour} secCol={this.state.highlightColourTwo} /> </>}




      </>
    );
  }
}
