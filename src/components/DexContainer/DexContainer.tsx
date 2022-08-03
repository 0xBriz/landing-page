import { Flex, Heading, Text, HStack, Grid, Box } from "@chakra-ui/react";
import Image from "next/image";
import dexPreview from "../../../public/dex-preview.png";
import chartIcon from "../../../public/chart-icon.svg";
import moneyTransferIcon from "../../../public/money-transfer-icon.svg";
import transactionsIcon from "../../../public/transactions-icon.svg";
import bicepIcon from "../../../public/bicep-icon.svg";

function DexReason({ text, icon }: { text: string; icon: any }) {
  return (
    <HStack
      spacing={4}
      padding={6}
      bg="gray.900"
      borderRadius="24px"
      borderWidth="1px"
      borderColor="gray.800"
      boxShadow="0px 2px 24px rgba(96, 43, 30, 0.25)"
    >
      <Image src={icon} alt="Chart icon" />

      <Text fontSize="18px" fontWeight={700}>
        {text}
      </Text>
    </HStack>
  );
}

export function DexContainer() {
  return (
    <Flex
      as="section"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginBottom="144px"
    >
      <Heading
        as="h2"
        fontSize="5xl"
        fontWeight={900}
        paddingBottom={"72px"}
        textAlign="center"
        textShadow={"0px 2px 0px rgba(0, 0, 0, 0.25)"}
      >
        What makes Aequinox great?
      </Heading>

      <Flex width="100%" flexDirection="column" alignItems="center">
        <Box maxWidth="843px">
          <Image src={dexPreview} alt="Dex preview" />
        </Box>

        <Grid
          marginTop="-20%"
          templateRows={{ base: "repeat(4, 1fr)", md: "repeat(2, 1fr)" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          columnGap={8}
          rowGap={6}
        >
          <DexReason
            text="Amplify liquidity mining yield by up to 250%"
            icon={chartIcon}
          />
          <DexReason
            text="Earn a portion of the Aequinox swap fees"
            icon={moneyTransferIcon}
          />
          <DexReason
            text="Vote to direct rewards to your favourite pools"
            icon={transactionsIcon}
          />
          <DexReason
            text="Flex your voting biceps in protocol governance"
            icon={bicepIcon}
          />
        </Grid>
      </Flex>
    </Flex>
  );
}
