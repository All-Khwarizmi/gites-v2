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
} from "react-icons/si";

export const SimpleFooter: React.FC = () => {
  const bg = useColorModeValue("white", "white");

  return (
    <footer className="">
      <Flex
        className="py-2"
        direction={["column", "column", "row"]}
        w="full"
        px={6}
        align="center"
        bg={bg}
      >
        <Heading className="py-2" size="md">
          Gîtes Mon Trésor
        </Heading>
        <Spacer />
        <Text fontSize="sm pb-3">
          Copyright &copy; {new Date().getFullYear()} Brand, Inc.
        </Text>
        <Spacer />
        <Spacer />
        <HStack spacing={1}>
          {" "}
          <a target={"_blank"} href="https://www.facebook.com/gitesmontresor/?locale=fr_FR">
            <IconButton
              aria-label="Facebook"
              icon={<SiFacebook />}
            ></IconButton>
          </a>{" "}
          <a  href="https://www.instagram.com/gitesmontresor/">
            <IconButton
              aria-label="Twitter"
              icon={<SiInstagram />}
            ></IconButton>
          </a>
        </HStack>
      </Flex>
    </footer>
  );
};
export default SimpleFooter;
