import React from "react";
import { Grid, GridItem, Container, Center, Icon } from "@chakra-ui/react";

export default function PlayerInfo({ name, tricksWon, pfp, team }) {
  const Iconprops = { h: "50px", w: "40px" };
  return (
    <Grid
      h="150px"
      w="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      py="10px"
      px="5px"
      border="2px solid"
      borderColor={team}
    >
      <GridItem rowSpan={2} colSpan={2} bg="tomato">
        <Center h="100%" w="100%">
          <Icon as={pfp} h="50px" w="40px" p={2} border="2px solid" />
        </Center>
      </GridItem>
      <GridItem colSpan={3} bg="papayawhip">
        <Container buttom="0">Name {name}</Container>
      </GridItem>
      <GridItem colSpan={3} bg="papayawhip">
        Tricks Won: {tricksWon}
      </GridItem>
    </Grid>
  );
}
