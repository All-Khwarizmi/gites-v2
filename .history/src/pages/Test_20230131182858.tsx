import { AppType } from "next/app";
import {
  Card,
  CardHeader,
  ButtonGroup,
  Button,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import { Component, useEffect, useRef, useState } from "react";
import Localisation from "../components/Localisation";
import Navbar from "../components/Navbar";


const Test = () => {

   const divPosition: any = useRef(null);
console.log(divPosition?.current?.getBoundingClientRect())

const handleClick = () => {
  console.log(divPosition?.current?.getBoundingClientRect().top);
}

  const slidesPalmier = [
    {
      img: "/Gîte Palmier/1.jpg",
    },
    {
      img: "/Gîte Palmier/2.jpg",
    },
    {
      img: "/Gîte Palmier/3.jpg",
    },
    {
      img: "/Gîte Palmier/4.jpg",
    },
    {
      img: "/Gîte Palmier/5.jpg",
    },
    {
      img: "/Gîte Palmier/6.jpg",
    },
    {
      img: "/Gîte Palmier/7.jpg",
    },
    {
      img: "/Gîte Palmier/9087556.jpg",
    },
  ];
  const slidesAnanas = [
    {
      img: "/Gîte Ananas/1.jpg",
    },
    {
      img: "/Gîte Ananas/2.jpg",
    },
    {
      img: "/Gîte Ananas/3.jpg",
    },
    {
      img: "/Gîte Ananas/4.jpg",
    },
    {
      img: "/Gîte Ananas/5.jpg",
    },
    {
      img: "/Gîte Ananas/6.jpg",
    },
    {
      img: "/Gîte Ananas/20191231_100325.jpg",
    },
    {
      img: "/Gîte Ananas/20200325_100606.jpg",
    },
  ];
  const slidesKawan = [
    {
      img: "/Gîte Kawan/1.jpg",
    },
    {
      img: "/Gîte Kawan/2.jpg",
    },
    {
      img: "/Gîte Kawan/3.jpg",
    },
    {
      img: "/Gîte Kawan/4.jpg",
    },
    {
      img: "/Gîte Kawan/5.jpg",
    },
    {
      img: "/Gîte Kawan/6.jpg",
    },
    {
      img: "/Gîte Kawan/7.jpg",
    },
    {
      img: "/Gîte Kawan/8.jpg",
    },
    {
      img: "/Gîte Kawan/9.jpg",
    },
    {
      img: "/Gîte Kawan/10.jpg",
    },
    {
      img: "/Gîte Kawan/11.jpg",
    },
    {
      img: "/Gîte Kawan/12.jpg",
    },
    {
      img: "/Gîte Kawan/13.jpg",
    },
    {
      img: "/Gîte Kawan/14.jpg",
    },
    {
      img: "/Gîte Kawan/15.jpg",
    },
  
  ];

  return (
    <>
    
    </>
    
  );
};

export default Test;
