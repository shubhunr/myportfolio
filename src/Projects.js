import React from 'react'
import { HiServer } from "react-icons/hi";
import {  Icon } from '@chakra-ui/react';

function Project() {
  return (
    <div className="experience" id='projects'>
      <hr></hr>
      <h1>Projects</h1>
      <ul>
        <li><Icon as={HiServer} boxSize="20px" />My Portfolio</li>
        <li><Icon as={HiServer} />Humo Healthcare'S Website</li>
        <li><Icon as={HiServer} />Cloudsect's Website</li>
        <li><Icon as={HiServer} />AM Hostel's Website</li>
      </ul>
      </div>
  )
}

export default Project;