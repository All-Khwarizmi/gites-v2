import React from 'react'
import { useEffect, useState } from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

const Carousel = ({slides}: any) => {

 console.log(slides.slidesAnanas)
  const slides1 = [
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.slidesAnanas.length;
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
  }, [slidesCount]);
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
        <Flex pos="relative" h="200px" w="full" {...carouselStyle}>
          {slides.slidesAnanas.map((slide: any, sid: any) => (
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
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};



export default Carousel