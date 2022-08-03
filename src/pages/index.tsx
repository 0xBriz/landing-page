import { Flex } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DexContainer } from "../components/DexContainer";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";
import { Pools } from "../components/Pools";

const Index = () => (
  <Container minHeight="100vh">
    <NavBar />

    <Flex flexDirection="column" paddingX={8}>
      <Hero />
      <DexContainer />
      <Pools />
    </Flex>
  </Container>
);

export default Index;
