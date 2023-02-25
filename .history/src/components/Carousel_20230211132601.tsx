import React from 'react'
import { useEffect, useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import useWindowDimensions from '../helpers/useWindowDimension';
import Image from "next/image";

const Carousel = ( { slides}: any)  => {
 
  const size = { height: "300px" };


  const [currentSlide, setCurrentSlide] = useState(0);
  const [dimension, setDimension] = useState({height: "300px"});
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";
  useEffect(() => {

    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  });
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden">
        <Flex
          pos="relative"
          h={`${dimension.height}`}
          w="full"
          {...carouselStyle}
        >
          {slides.map((slide: any, sid: any) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                pr
               fill
                
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};



export default Carousel