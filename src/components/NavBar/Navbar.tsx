import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { BigWhiteLink } from "../BigWhiteLink";
import { Logo } from "../Logo";

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      as="nav"
      width={"100%"}
      paddingY={8}
      paddingX={10}
      spacing={16}
      position="sticky"
      top={0}
      bg="blue"
      zIndex={10}
      justifyContent={{ base: "space-between", md: "initial" }}
    >
      <Logo />

      <HStack flex={1} spacing={16} display={{ base: "none", md: "initial" }}>
        <Link textStyle="navBarLink">Swap</Link>
        <Link textStyle="navBarLink">Invest</Link>
        <Link textStyle="navBarLink">Stake</Link>
      </HStack>

      <BigWhiteLink
        justifySelf={"flex-end"}
        display={{ base: "none", md: "initial" }}
      >
        Open dApp
      </BigWhiteLink>

      <IconButton
        onClick={onOpen}
        justifySelf={"flex-end"}
        aria-label="Navigation"
        icon={<HamburgerIcon />}
        display={{ md: "none" }}
        bg="whiteAlpha.200"
        _hover={{ bg: "whiteAlpha.300" }}
      />

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="blue">
          <DrawerCloseButton color="white" />
          <DrawerHeader>&nbsp;</DrawerHeader>

          <DrawerBody>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 8, sm: 8 }}
              paddingX={4}
              paddingY={2}
              alignItems="center"
              justifyContent={{ base: "initial", sm: "space-between" }}
            >
              <HStack flex={1} spacing={16} color="white">
                <Link textStyle="navBarLink">Swap</Link>
                <Link textStyle="navBarLink">Invest</Link>
                <Link textStyle="navBarLink">Stake</Link>
              </HStack>

              <BigWhiteLink justifySelf={"flex-end"} paddingX={3} paddingY={4}>
                Open dApp
              </BigWhiteLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
}
