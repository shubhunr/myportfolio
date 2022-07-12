import React from "react";
import { Image, VStack, Icon, Text, Box,  HStack, Link, Stack,Spacer, Flex } from '@chakra-ui/react';
import { AiFillHome, AiOutlineProject, AiFillTrophy } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import Me from '../Assets/IMG_20200618_120529n_edited.webp'


function Nav() {
  return (
    <>
    <input type="checkbox" id="click" />
    <label for="#click" id="mobile"><Icon  as={HiMenu} boxSize="40px" /></label>
    <Stack id="sidebar">
      <VStack id="bar" width="300px" height="1080px" >
        <Image className="me" src={Me} />
        <Box><Link href="#home" className="nav"><HStack mt='30%'><Icon as={AiFillHome} boxSize="40px" color="#551a8b"></Icon><Text color='white'>Home</Text></HStack></Link>
        <Link href='#experience' className="nav"><HStack mt='10%'><Icon  as={AiFillTrophy} boxSize="40px" color="#551a8b"></Icon><Text color='white'>Experience</Text></HStack></Link>
        <Link href='#education' className="nav"><HStack mt='10%'><Icon as={TbCertificate} boxSize="40px" color="#551a8b"></Icon><Text color='white'>Education</Text></HStack></Link>
        <Link href="#skills" className="nav"><HStack mt='10%'><Icon as={FiSettings} boxSize="40px" color="#551a8b"></Icon><Text color='white'>Skills</Text></HStack></Link>
        <Link href='#projects' className="nav"><HStack mt='10%'><Icon as={AiOutlineProject} boxSize="40px" color="#551a8b" ></Icon><Text color='white'>Projects</Text></HStack></Link></Box>
    </VStack></Stack></>
  )
}

export default Nav