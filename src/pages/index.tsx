import { Flex } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DexContainer } from "../components/DexContainer";
import { Ecosystem } from "../components/Ecosystem";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";
import { Pools } from "../components/Pools";

const Index = () => (
  <Container minHeight="100vh">
    <NavBar />

    <Flex
      boxSizing="content-box"
      flexDirection="column"
      paddingX={8}
      paddingBottom={12}
      maxWidth="1110px"
    >
      <Hero />
      <DexContainer />
      <Pools />
      <Ecosystem />
    </Flex>
  </Container>
);

export default Index;
