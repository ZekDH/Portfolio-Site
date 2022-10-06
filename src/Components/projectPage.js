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
          <ProjectBox
            projName="Blockle"
            projSkills="Javascript React Css Html"
            projDesc="A Wordle/Tetris inspired daily browser game that I had built to learn react and display web development skills outside of university."
            img={blockle}
            gitLink=""
            siteLink="http://blockle.net/"
            p={1} mainCol={this.props.mainCol} secCol={this.props.secCol} width={[ 1 , 1/2 ]}
          />

          <ProjectBox
            projName="Shader Engine"
            projSkills="C++ OpenGL ImGui"
            projDesc="An OpenGL shader engine I had developed then modified to meet my needs of editing shader uniforms in realtime that additionally uses ImGUI for the UI interface, I had learnt the process of rendering objects to a custom engine with this software."
            img={openGL}
            gitLink=""
            siteLink=""
            p={1} mainCol={this.props.mainCol} secCol={this.props.secCol} width={[ 1 , 1/2 ]}
          />

          {/* <ProjectBox
            projName="Motion Tracking"
            projSkills="Python OpenCV MediaPipe"
            projDesc="Python code using mediapipe and openCV libraries to track pose and hand movements from users web camera."
            img="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            gitLink=""
            siteLink=""
            p={1} mainCol={this.props.mainCol} secCol={this.props.secCol} width={[ 1 , 1/2 ]}
          />

          <ProjectBox
            projName="Portfolio Site"
            projSkills="React Javascript HTML CSS"
            projDesc="Python code using mediapipe and openCV libraries to track pose and hand movements from users web camera."
            img="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            gitLink=""
            siteLink=""
            p={1} mainCol={this.props.mainCol} secCol={this.props.secCol} width={[ 1 , 1/2 ]}
          /> */}

        </Flex>
      </Box>


      </>
    );
  }

}
