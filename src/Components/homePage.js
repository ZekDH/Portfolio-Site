import React from 'react';
import { Box, Flex, Text } from 'rebass'
import { DiGithubBadge, DiJava, DiJavascript1, DiHtml5, DiPython, DiUnitySmall, DiLinux, DiReact, DiWindows, DiMysql } from "react-icons/di";
import { SiC, SiCplusplus, SiCsswizardry, SiCsharp } from "react-icons/si";
import CustomButton from './customButton'



export default class HomePage extends React.Component {

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
        <Box px={3} py={6} className="center" sx={{backgroundImage: "url(" + this.props.imgBlock + ")", backgroundSize: 'cover', color: "black"}}>
          <Box className="titleBox">
            <Text width={["100%", "90%" ,"70%"]} className="AlignLeft " py={6} fontSize={[ 3, 4, 5 ]}>
              Hi I am <span className="highlightText" style={{color: this.props.secCol}}>Daniel Harris</span> , I am a <span className="highlightText" style={{color: this.props.secCol}}>Computer Science</span> Graduate from the <span className="highlightText" style={{color: this.props.secCol}}>University of Adelaide </span>
              with a major in <span className="highlightText" style={{color: this.props.secCol}}>Artificial Intelligence</span>. I primarily take interest in coding related to Artificial intelligence, Computer Vision and Graphics.
            </Text>

            <Text width={["100%", "90%" ,"70%"]} className="AlignLeft "  py={7} fontSize={[ 3, 4, 5 ]}>
              <span className="highlightText" style={{color: "black"}}>Scroll Down</span>
            </Text>
          </Box>
        </Box>

        <Box px={3} py={5} bg="#00000015" className="center">
          <Flex className="center titleBox" flexWrap="wrap" width="80%">
            <Box width={["0%" , "50%"]}>
            </Box>
            <Box className="icon" width={["100%" , "40%"]}>
              <Text py={2} color={this.props.mainCol} fontSize={[ 4, 5, 6 ]}>Skills:</Text>
              <SiC className="icon" color={this.props.mainCol} size={60} />
              <SiCplusplus className="icon" color={this.props.mainCol} size={60} />
              <SiCsharp className="icon" color={this.props.mainCol} size={60} />
              <SiCsswizardry className="icon" color={this.props.mainCol} size={60} />
              <DiJavascript1 className="icon" color={this.props.mainCol} size={60} />
              <DiJava className="icon" color={this.props.mainCol} size={60} />
              <DiHtml5 className="icon" color={this.props.mainCol} size={60} />
              <DiGithubBadge className="icon" color={this.props.mainCol} size={60} />
              <DiPython className="icon" color={this.props.mainCol} size={60} />
              <DiUnitySmall className="icon" color={this.props.mainCol} size={60} />
              <DiLinux className="icon" color={this.props.mainCol} size={60} />
              <DiReact className="icon" color={this.props.mainCol} size={60} />
              <DiWindows className="icon" color={this.props.mainCol} size={60} />
              <DiMysql className="icon" color={this.props.mainCol} size={60} />
            </Box>
          </Flex>
        </Box>

        <Box className="center">
          <Flex px={4} py={6} flexWrap="wrap"  className="center titleBox">
              <Text width="100%" fontSize={[ 3, 4, 5 ]} className="contactText ">Contact Me</Text>
              <form target="_blank" action="befa9afaa93023ce078707bea06b87cb" method="POST">
                <Flex width="100%" flexWrap="wrap" >
                  <Box p={3} width="100%"><input type="text" name="name" className="form-control" placeholder="Full Name" required></input></Box>
                  <Box p={3} width="100%"><input type="email" name="email" className="form-control" placeholder="Email Address" required></input></Box>
                  <Box p={3} width="100%"><textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea></Box>
                  <Box p={3} width="100%"><button type="submit">Submit Email</button></Box>
                </Flex>
              </form>
            </Flex>
        </Box>
      </>
    );
  }

}
