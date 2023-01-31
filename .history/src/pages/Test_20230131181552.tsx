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
const Test = () => {

  


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
    <div className="test">
      <section className="test">
        <video
          autoPlay
          playsInline
          muted
          loop
          id="myVideo"
          poster="/Gîte Kawan/1"
        >
          <source src={"/Mon film.mp4"} type="video/mp4" />
        </video>
      </section>
      <section className="section ">
        <div className="card-1 flex-column flex justify-center">
          <Card maxW={"900px"}>
            <Heading className="flex-column flex justify-center p-2">
              <p> Bienvenue en Guadeloupe !</p>
            </Heading>
            <CardBody>
              <Text className="welcome-text">
                Pour des vacances au soleil, sur des plages de sable blanc ou de
                belles balades dans une verdure luxuriante : les Gîtes Mon
                Trésor vous assurent un dépaysement total. Loin des grandes
                structures touristiques, dans un jardin calme et ventilé avec
                piscine sécurisée, Catherine et Laurent, originaires de
                Normandie, vous accueillent toute l’année dans leurs gîtes
                situés sur la commune d'ANSE-BERTRAND, à 3 km des plages et de
                tous commerces. Nous avons l'énorme chance de n'avoir jamais de
                sargasses sur nos plages les plus proches. Bonne visite !
              </Text>
            </CardBody>
          </Card>
        </div>

        <div className="grid  grid-flow-row justify-center gap-4 md:grid-flow-col ">
          <Card maxW="lg" m={3}>
            <Stack mt="6" spacing="3">
              <Heading textAlign={"center"} size="md">
                Gîte Palmier
              </Heading>
            </Stack>
            <CardBody>
              <Carousel slides={slidesPalmier} />
            </CardBody>
            <Flex align="center" justify="center">
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Détail
                </Button>
              </CardFooter>
            </Flex>
          </Card>
          <Card maxW="lg" m={3}>
            <Stack mt="6" spacing="3">
              <Heading textAlign={"center"} size="md">
                Gîte Ananas
              </Heading>
            </Stack>
            <CardBody>
              <Carousel slides={slidesAnanas} />
            </CardBody>
            <Flex align="center" justify="center">
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Détail
                </Button>
              </CardFooter>
            </Flex>
          </Card>
          <Card maxW="lg" m={3}>
            <Stack mt="6" spacing="3">
              <Heading textAlign={"center"} size="md">
                Gîte Kawan
              </Heading>
            </Stack>
            <CardBody>
              <Carousel slides={slidesKawan} />
            </CardBody>
            <Flex align="center" justify="center">
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Détail
                </Button>
              </CardFooter>
            </Flex>
          </Card>
        </div>
        <Localisation />
      </section>
    </div>
  );
};

export default Test;
