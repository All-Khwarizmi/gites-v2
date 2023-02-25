import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  SiFacebook,
  SiTwitter,
  SiGithub,
  SiLinkedin,
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
          Copyright &copy; {new Date().getFullYear()} Brand, Inc.
        </Text>

        <div className="px-5"></div>
        <HStack spacing={1}>
          {" "}
          <a
            target={"_blank"}
            href="https://www.facebook.com/gitesmontresor/?locale=fr_FR"
          >
            <IconButton
            className="icon"
              aria-label="Facebook"
              icon={<SiFacebook />}
            ></IconButton>
          </a>{" "}
          <a target={"_blank"} href="https://www.instagram.com/gitesmontresor/">
            <IconButton
            className="icon"
              aria-label="Twitter"
              icon={<SiInstagram />}
            ></IconButton>
          </a>
          <a target={"_blank"} href="sec">
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
