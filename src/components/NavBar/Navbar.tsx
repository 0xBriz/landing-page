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
  StackProps,
  LinkProps,
} from "@chakra-ui/react";
import { DAPP_HREF, INVEST_HREF, STAKE_HREF, TRADE_HREF } from "../../links";
import { useCountdown } from "../../utils";
import { BigWhiteLink } from "../BigWhiteLink";
import { Logo } from "../Logo";

function Menu(props: StackProps) {
  return (
    <HStack flex={1} spacing={16} {...props}>
      <Link textStyle="navBarLink" href={TRADE_HREF}>
        Trade
      </Link>
      <Link textStyle="navBarLink" href={INVEST_HREF}>
        Invest
      </Link>
      <Link textStyle="navBarLink" href={STAKE_HREF}>
        Stake
      </Link>
    </HStack>
  );
}

function OpenAppBtn(props: LinkProps) {
  return (
    <BigWhiteLink justifySelf={"flex-end"} href={DAPP_HREF} {...props}>
      Open dApp
    </BigWhiteLink>
  );
}

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasLaunched } = useCountdown();

  return (
    <HStack
      as="nav"
      width={"100%"}
      paddingY={8}
      paddingX={{ base: 6, lg: 10 }}
      spacing={16}
      position="sticky"
      top={0}
      bg="transparent"
      zIndex={10}
      justifyContent={{ base: "space-between", md: "initial" }}
    >
      <Logo />

      {/* TODO: Hiding this while not live */}
      {hasLaunched && (
        <>
          <Menu display={{ base: "none", md: "initial" }} />
          <OpenAppBtn display={{ base: "none", md: "initial" }} />

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
                  <Menu color="white" />

                  <OpenAppBtn paddingX={3} paddingY={4} />
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </HStack>
  );
}
