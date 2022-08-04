import { Box, Flex } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DexContainer } from "../components/DexContainer";
import { Ecosystem } from "../components/Ecosystem";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";
import { Pools } from "../components/Pools";

function BackgroundVideo() {
  return (
    <Box position="absolute" top={0} left={0} width="100vw" height="100vh">
      <Box
        as="video"
        autoPlay
        loop
        muted
        height="100%"
        objectFit={{ base: "cover", sm: "cover" }}
      >
        <source src="/aeq-video-background.mp4" />
      </Box>
    </Box>
  );
}

const Index = () => (
  <Container minHeight="100vh" overflow={"hidden"}>
    <NavBar />
    <BackgroundVideo />

    <Flex
      position="relative"
      boxSizing="content-box"
      flexDirection="column"
      paddingX={{ base: 6, md: 8 }}
      paddingBottom={12}
      maxWidth="1110px"
      _after={{
        content: "''",
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "948px",
        backgroundColor: "#B14F39",
        mixBlendMode: "normal",
        filter: "blur(900px)",
        transform: "translateY(100%)",
      }}
    >
      <Hero />
      <DexContainer />
      <Pools />
      <Ecosystem />
      <Footer />
    </Flex>
  </Container>
);

export default Index;
