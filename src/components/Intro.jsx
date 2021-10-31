import React from "react";
import { motion } from "framer-motion";
import LogoIcon from "./LogoIcon";
import styled, { css } from "styled-components/macro";


const Intro = () => {
  return (
    <div className="flex items-center justify-center h-screen text-gray-900"> 
      <LogoIcon/>
    </div>
  );
}

export default Intro;
