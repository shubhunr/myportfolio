import React from "react";
import {  Icon, HStack } from '@chakra-ui/react';
import { FaReact, FaGithubAlt } from "react-icons/fa";
import {  SiCss3 } from "react-icons/si";
import { ImHtmlFive, ImGit } from "react-icons/im";
import { SiChakraui, SiJavascript, SiPython } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";

function Skills() {
  return (
    <div className="experience" id="skills">
      <hr></hr>
      <h1>Skills</h1>
      <h2 className='post'>Development Frameworks</h2>
      <HStack mt="5%">
        <Icon id="dev" as={FaReact} boxSize="40px"></Icon>
        <Icon id="space" as={ImHtmlFive} boxSize="40px"></Icon>
        <Icon id="space" as={SiCss3} boxSize="40px"></Icon>
        <Icon id="space" as={SiChakraui} boxSize="40px"></Icon>
        <Icon id="space" as={BsFillBootstrapFill} boxSize="40px"></Icon>
      </HStack>
  
      <h2 className='post'>Programming Languages</h2>
      <HStack mt="5%">
        <Icon id="dev" as={SiJavascript} boxSize="40px"></Icon>
        <Icon id="space" as={SiPython} boxSize="40px"></Icon>
      </HStack>
  
    <h2 className='post'>Techniques and Services</h2>
    <HStack mt="5%">
      <Icon id="dev" as={ImGit} boxSize="40px"></Icon>
      <Icon id="space" as={FaGithubAlt} boxSize="40px"></Icon>
    </HStack>
  </div>
    
  );
}

export default Skills;
