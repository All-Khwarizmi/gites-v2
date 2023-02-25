import {
  Flex,
  Heading,
  HStack,
  IconButton,

  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  SiFacebook,

  SiInstagram,
  SiGooglemaps,
} from "react-icons/si";

export const SimpleFooter: React.FC = () => {
  const bg = useColorModeValue("white", "white");

  return (
    <footer className="">
      <Flex
        className="py-2"
        direction={["column", "column", "column"]}
        w="full"
        px={6}
        align="center"
        bg={bg}
      >
        <Heading className="py-2" size="md">
          Gîtes Mon Trésor
        </Heading>
        <div className="px-5"></div>
        <Text fontSize="sm pb-3">
          Copyright &copy; {new Date().getFullYear()} Tous droits réservés.
          Siret 849 500 921 RCS Pointe à Pitre
        </Text>

        <div className="px-5"></div>
        <HStack spacing={1}>
          {" "}
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.facebook.com/gitesmontresor/?locale=fr_FR"
          >
            <IconButton
              className="icon"
              aria-label="Facebook"
              icon={<SiFacebook />}
            ></IconButton>
          </a>{" "}
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.instagram.com/gitesmontresor/"
          >
            <IconButton
              className="icon"
              aria-label="Twitter"
              icon={<SiInstagram />}
            ></IconButton>
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.google.com/maps/place/Les+G%C3%AEtes+Mon+Tr%C3%A9sor/@16.4645595,-61.4847141,17z/data=!3m1!4b1!4m6!3m5!1s0x8c133104d554b2bd:0x36ef5cfef0b588d1!8m2!3d16.4645544!4d-61.4825254!16s%2Fg%2F11s7tslv7h"
          >
            <IconButton
              className="icon"
              aria-label="Maps"
              icon={<SiGooglemaps />}
            ></IconButton>
          </a>
        </HStack>
      </Flex>
    </footer>
  );
};
export default SimpleFooter;
