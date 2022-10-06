import React from 'react';

import {
  Box,
  Flex,
  Text,
  Image
} from 'rebass'


export default class UniPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      courseShow: false,
      projectNum: 0
    }

    this.setImage = this.setImage.bind(this);
    this.showCourses = this.showCourses.bind(this);
  }

  componentDidMount(){

  }

  showCourses(){
    if(this.state.courseShow === false){
      this.setState({
        courseShow: true
      });
    }else{
      this.setState({
        courseShow: false
      });
    }

    return;
  }

  setImage(inputNum){
    this.setState({
      projectNum: inputNum
    });

    return;
  }
  //RTest

  render(){
    return(
      <>
        <Box className="center">
          <Flex className="titleBox" flexWrap='wrap' p={3} height={this.props.height} width={this.props.width} mx={-2}>
            
            {this.state.projectNum === 0 && 
              <Flex px={2} flexWrap='wrap' width="100%" height="100%" mx={-2}>
                <Image className="containImage" width={[1, 2/4]} height="100%" src={"https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-319-54157-0_25/MediaObjects/426992_1_En_25_Fig1_HTML.gif"} ></Image>
                <Box width={[1, 2/4]}>
                  <Text p={4} className="AlignLeft" fontSize={[ 3, 4, 5 ]}>GVGAI Challenge</Text>
                  <Text px={4} className="AlignLeft" fontSize={[ 2, 3, 4 ]}>Java, Waterfall Planning, Evolutionary Algorithim, Multi Objective Optimization</Text>
                  <Text p={4} className="AlignLeft" fontSize={[ 1, 2, 3 ]}>
                  Within the GVGAI competion the group was tasked with creating a evolutionary algorithim for the bots that play the game.
                   These bots were tested thoroughly and all had different objectives that they optimized.
                   The final part of the project consisted of level design using a multi objective evolutionary algoritihim to design the levels for the AI to test.
                  </Text>
                </Box>
              </Flex>
            }

            {this.state.projectNum === 1 && 
              <Flex px={2} flexWrap='wrap' width="100%" height="100%" mx={-2}>
                <Image className="containImage" width={[1, 2/4]} height="500px" src={'https://upload.wikimedia.org/wikipedia/commons/0/0e/Blender_3.2.0_screenshot.png'} ></Image>
                <Box width={[1, 2/4]}>
                  <Text p={4} className="AlignLeft" fontSize={[ 3, 4, 5 ]}>eTech Challenge</Text>
                  <Text px={4} className="AlignLeft" fontSize={[ 2, 3, 4 ]}>Jobs To Be Done, Agile Planning, Project Review</Text>
                  <Text p={4} className="AlignLeft" fontSize={[ 1, 2, 3 ]}>
                  In the eTech challenge, I was tasked with developing a minimum viable product for computer-based software using entrepreneurship frameworks to pitch to a panel of judges at the end of the course competing against other groups of students.
                  The idea for the software that was pitched was a networked 3D modelling tool, the tool allowed for multiple individuals to work together within the same 3D space on a model. 
                  </Text>
                </Box>
              </Flex>
            }
            
            {this.state.projectNum === 2 && 
              <Flex px={2} flexWrap='wrap' width="100%" height="100%" mx={-2}>
                <Image className="containImage"  width={[1, 2/4]} height="500px" src={'https://i.ytimg.com/vi/5Na-NltWncA/maxresdefault.jpg'} ></Image>
                <Box width={[1, 2/4]}>
                  <Text p={4} className="AlignLeft" fontSize={[ 3, 4, 5 ]}>Crew Agents</Text>
                  <Text px={4} className="AlignLeft" fontSize={[ 2, 3, 4 ]}>Python, Agile Planning, Reinforcement Learning</Text>
                  <Text p={4} className="AlignLeft" fontSize={[ 1, 2, 3 ]}>
                  The agents project was my big final software engineering project of my degree, I worked with a team of 8 people to produce software for an external client.
                   We had to create an engine to play a board game called the crew, within this engine we created machine learning agents that played against each other within the engine to optimise game objectives. 
                  </Text>
                </Box>
              </Flex>
            }
            

            <Box bg={this.props.mainCol} width="100%" className="center">
              <Flex className="universitySelection">
                <Box className="pointerHover exitButton" onClick={() => this.setImage(0)} py={2} bg={this.props.mainCol} fontSize={[1,2,3]} width={[1, 1/2, 1/3]}>GVGAI Project</Box>
                <Box className="pointerHover exitButton" onClick={() => this.setImage(1)} py={2} bg={this.props.mainCol} fontSize={[1,2,3]} width={[1, 1/2, 1/3]}>eTech Project</Box>
                <Box className="pointerHover exitButton" onClick={() => this.setImage(2)} py={2} bg={this.props.mainCol} fontSize={[1,2,3]} width={[1, 1/2, 1/3]}>Crew Agents</Box>
              </Flex>
            </Box>

            <Box px={4} py={5} width="100%" className="center AlignLeft">
              <Text width="95%" fontSize={[ 2, 3, 4 ]}>
                During my studies at the University of Adelaide I have primarily developed skills leaning towards artificial intelligence development.
                Within the degree large amounts of programming with respect to artificial intelligence was done using python, after developing artificial intelligence algorithms succeeding projects used external python libraries.
              </Text>
            </Box>
            <Box px={4} py={1} width="100%" className="center AlignLeft">
              <Text width="95%" fontSize={[ 2, 3, 4 ]}>
                Majority of programming within my degree was done with C++, In which I developed an extensive understanding of data structures and optimization.
                Additionally I understand the background concepts as to how a programming language works and how the computer parses information from high level languages to low level commands.
              </Text>
            </Box>
            

            <Box width="100%" className="center">
              {!this.state.courseShow && <Box onClick={this.showCourses} width="100%" p={5} className="universitySelection pointerHover exitButton"><Text p={1} bg={this.props.mainCol}>Show Additonal Course Information</Text></Box>}
              {this.state.courseShow && 
                <Box onClick={this.showCourses}  width="100%" p={5} className="universitySelection pointerHover exitButton"><Text p={1} bg={this.props.mainCol}>Close Additonal Course Information</Text></Box>
              }
            </Box>
            

            {this.state.courseShow &&
              <Flex className="titleBox" border={this.props.mainCol} flexWrap='wrap' p={3} height={this.props.height} width={this.props.width} mx={-2}>
                <Box p={3} width={[4/4, 2/4]}>
                  <Text p={2} className="center" fontSize={[ 3, 4, 5 ]}>Artificial Intelligence</Text>
                  <Text p={2} className="AlignLeft" fontSize={[ 1, 2, 3 ]}>
                  Within the final year of my degree, I specialised in artificial intelligence in which I did multiple group projects centred around the use of machine learning. These projects mainly focussed on the evolutionary computation and statistical machine learning in which I built the basic foundations for popular machine learning algorithms and learnt how to use external machine learning libraries. 
                  </Text>
                </Box>
                <Box p={3} width={[4/4, 2/4]}>
                  <Text p={2} className="center" fontSize={[ 3, 4, 5 ]}>Algorithms</Text>
                  <Text p={2} className="AlignLeft" fontSize={[ 1, 2, 3 ]}>
                  In the second year of my degree, I learnt about common computer science algorithms most of the work was focussed on graph algorithms and optimizing these algorithms using big O notation. In first year, I coded multiple sorting algorithms as they are a good resource for becoming more confident in using loops. 
                  </Text>
                </Box>
                <Box p={3} width={[4/4, 2/4]}>
                  <Text p={2} className="center" fontSize={[ 3, 4, 5 ]}>Computer Systems</Text>
                  <Text p={2} className="AlignLeft" fontSize={[ 1, 2, 3 ]}>
                  I have learnt about the fundamentals of computers through computer systems aspects of my course, this consisted of using assembly language’s and unix languages to code basic tools. Then using c++ to code a basic parser from assembly to a high level language. 
                  </Text>
                </Box>
                <Box p={3} width={[4/4, 2/4]}>
                  <Text p={2} className="center" fontSize={[ 3, 4, 5 ]}>Software development principles</Text>
                  <Text p={2} className="AlignLeft" fontSize={[ 1, 2, 3 ]}>Throughout university I had worked on group projects with varying team numbers, larger groups were created after basic software development principles were taught to us. This includes development models like waterfall, agile and etc, these helped organize tasks amongst the groups I were in and made it easier to provide progress reports to those overseeing development. </Text>
                </Box>
              </Flex>
            }
          </Flex>

          
        </Box>
      </>
    );
  }

}
