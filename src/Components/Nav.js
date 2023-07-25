import React from "react";
import { Image, VStack, Icon, Text, Box,  HStack, Link, Stack } from '@chakra-ui/react';
import { AiFillHome, AiOutlineProject, AiFillTrophy } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import DP from '../Assets/shubham professional white bg.png'


function Nav() {
  return (
    <>
    <Stack id="sidebar">
      <VStack id="bar" width="300px" height="1080px" >
        <Image className="me" src={DP} />
        <Box><Link href="#home" className="nav"><HStack mt='30%'><Icon as={AiFillHome} boxSize="40px" color="#551a8b"></Icon><Text color='white'>Home</Text></HStack></Link>
        <Link href='#experience' className="nav"><HStack mt='10%'><Icon  as={AiFillTrophy} boxSize="40px" color="#551a8b"></Icon><Text color='white'>Experience</Text></HStack></Link>
        <Link href='#education' className="nav"><HStack mt='10%'><Icon as={TbCertificate} boxSize="40px" color="#551a8b"></Icon><Text color='white'>Education</Text></HStack></Link>
        <Link href="#skills" className="nav"><HStack mt='10%'><Icon as={FiSettings} boxSize="40px" color="#551a8b"></Icon><Text color='white'>Skills</Text></HStack></Link>
        <Link href='#projects' className="nav"><HStack mt='10%'><Icon as={AiOutlineProject} boxSize="40px" color="#551a8b" ></Icon><Text color='white'>Projects</Text></HStack></Link></Box>
    </VStack></Stack></>
  )
}

export default Nav