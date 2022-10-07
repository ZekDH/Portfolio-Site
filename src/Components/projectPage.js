import React from 'react';

import ProjectBox from './projectBox'
import { Box, Flex, Text } from 'rebass'

//import Blockle from './logo.png';
import openGL from '../Img/background.png';
import blockle from '../Img/Blockle.png';

export default class ProjectPage extends React.Component {

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
      <Box p={3} className="center">
        <Flex p={3} mx={-2} flexWrap="wrap" className="titleBox center">
  
          {/* Project box component with props parsed for display */}
          <ProjectBox
            projName="Blockle"
            projSkills="Javascript React Css Html"
            projDesc="A Wordle/Tetris inspired daily browser game that I had built to learn react and display web development skills outside of university."
            img={blockle}
            gitLink="https://github.com/ZekDH/BlockleWebsite"
            siteLink="http://blockle.net/"
            p={1} mainCol={this.props.mainCol} secCol={this.props.secCol} width={[ 1 , 1/2 ]}
          />
          
          {/* Project box component with props parsed for display */}
          <ProjectBox
            projName="Shader Engine"
            projSkills="C++ OpenGL ImGui"
            projDesc="An OpenGL shader engine I had developed then modified to meet my needs of editing shader uniforms in realtime that additionally uses ImGUI for the UI interface, I had learnt the process of rendering objects to a custom engine with this software."
            img={openGL}
            gitLink="https://github.com/ZekDH/OpenGLShaderEngine"
            siteLink=""
            p={1} mainCol={this.props.mainCol} secCol={this.props.secCol} width={[ 1 , 1/2 ]}
          />

        </Flex>
      </Box>


      </>
    );
  }

}
