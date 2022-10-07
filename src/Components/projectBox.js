import React from 'react';

//Imported Packages
import {
  Box,
  Flex,
  Text,
  Image,
  Button
} from 'rebass'

import { DiGithubBadge } from "react-icons/di";
import { BiLinkExternal, BiX } from "react-icons/bi";

export default class projectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      projectShow: false
    }

    this.flipProject = this.flipProject.bind(this);
  }

  componentDidMount(){

  }
  
  //This flips the project card to toggle the information display upon activation
  flipProject(){
    if(this.state.projectShow == false){
      this.setState({
        projectShow: true
      });
    }else{
      this.setState({
        projectShow: false
      });
    }

    return;
  }

  render(){
    return(
      <>
        <Flex className="center" flexWrap='wrap' p={3} height={this.props.height} width={this.props.width} mx={-2}>
          {/* Text of the project props object is used to register information into the box externally */}
          {this.state.projectShow && <Box sx={{borderRadius: 8}} className="projectCard" width="100%" height="100%"  bg={this.props.mainCol}>
            <Flex px={4} bg={this.props.mainCol} className="headerbox" alignItems='center' fontSize={[ 3, 4, 5 ]} sx={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
                <Text color="white" p={3} fontWeight='bold'>{this.props.projName}</Text>
                <Box mx='auto' />
                {/* This shows the github or site icon based off whether a link was parsed to the object */}
                {this.props.gitLink != "" && <a color="white" p={2} href={this.props.gitLink} className="exitButton projectIcon"><DiGithubBadge color="white" width="80%" height="80%" /></a>}
                {this.props.siteLink != "" && <a color="white" p={2} href={this.props.siteLink} className="exitButton projectIcon"><BiLinkExternal color="white" width="80%" height="80%" /></a>}
                <Text color="white" p={2} onClick={this.flipProject} className="exitButton"><BiX width="100%" height="100%" /></Text>
            </Flex>

            <Flex flexWrap="wrap" mx={-2}>
              <Box p={3} width={1}>
                <Text p={1} color="white" fontSize={[ 3, 4, 5 ]}>Skills:</Text>
                <Text p={1} color="white" fontSize={[ 1, 2, 3 ]}>{this.props.projSkills}</Text>
              </Box>

              <Box p={4} width={1}>
                <Text p={1} color="white" fontSize={[ 3, 4, 5 ]}>Description:</Text>
                <Text p={1} color="white" fontSize={[ 1, 2, 3 ]}>{this.props.projDesc}</Text>
              </Box>

            </Flex>

          </Box>}
          {/* This displays the image instead of the project text */}
          {!this.state.projectShow && <Box onClick={this.flipProject} sx={{backgroundImage: "url(" + this.props.img + ")", backgroundSize: 'cover', borderRadius: 8}} className="projectCard pointerHover" width="100%" height="100%" >
            <Text bg={this.props.mainCol} sx={{borderTopLeftRadius: 8, borderTopRightRadius: 8, color: "white"}} fontWeight="bold" fontSize={[ 3, 4, 5 ]} p={3}>{this.props.projName}</Text>
          </Box>}
        </Flex>
      </>
    );
  }
}
