import React from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Container,
  HStack,
  Flex,
  Spacer,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillHome } from "react-icons/ai";

export default function Header() {
  const title = {
    fontFamily: "Brush Script MT, Comic Sans",
  };

  return (
    <Container w="100%" h="40px" borderBottom="2px black solid">
      <Container maxW="62em" mx="auto" p={1}>
        <Flex>
          <Box px="2" w="100%">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Heading
                fontSize={["lg", "xl", "2xl", "3xl"]}
                style={title}
                my="auto"
                color="black"
              >
                Play Euchre
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <Box w="100%">
            <HStack
              h="100%"
              justify="flex-end"
              spacing={["8px", "10px", "12px"]}
            >
              <Tooltip label="Home">
                <Link to="/">
                  <AiFillHome size="25px" color="black" />
                </Link>
              </Tooltip>
              <Tooltip label="Github">
                <a
                  href="https://github.com/tommy2022/Euchre-Web-App"
                  target="_blank"
                >
                  <AiFillGithub size="25px" color="black" />
                </a>
              </Tooltip>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
}
