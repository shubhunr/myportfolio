
import React from 'react'
import {  Icon, Text, Box,  HStack } from '@chakra-ui/react';
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

function Header() {
  return (
    <header id='home'>
        <div className='heading'>
            <h3>Hello, I'm</h3>
            <p className='name'>Shubham <b className='title'>Roy</b></p>
            <h3>a front-end UI/UX Developer</h3>
            <h3>273,ADARSH GRAM, Muzaffarpur, PIN 843108</h3>
            <p><b className='title'>EMAIL:</b> HEY@DEVSHUBH.COM</p>
            <p><b className='title'>TEL:</b> +91 8603034154</p> 
            <div>
        <HStack mt='5%'><Icon id="dev" as={BsFacebook} boxSize="40px"></Icon>
        <Icon id="space" as={BsLinkedin} boxSize="40px"></Icon>
        <Icon id="space" as={AiFillInstagram} boxSize="40px"></Icon>
        <Icon id="space" as={AiFillTwitterCircle} boxSize="40px"></Icon>
        <Icon id="space" as={AiFillGithub} boxSize="40px" ></Icon></HStack>
        </div> 
        </div>
        

        
    </header>
  )
}

export default Header