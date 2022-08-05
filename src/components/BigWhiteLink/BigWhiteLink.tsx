import { PropsWithChildren } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { LinkProps, Link, Text, keyframes } from "@chakra-ui/react";

const moveRightInitial = keyframes`
  to {
    transform: translate3d(105%,0,0);
  }
`;

const moveRightEnd = keyframes`
  from {
   transform: translate3d(-100%,0,0);
  }
  to {
    transform: translate3d(0,0,0);
  }
`;

export function BigWhiteLink({
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  return (
    <Link
      role="group"
      outline={0}
      paddingX={6}
      paddingY={5}
      position="relative"
      bg="white.100"
      color="white"
      borderRadius="12px"
      fontWeight={500}
      overflow="hidden"
      _focus={{
        boxShadow: "none",
      }}
      _before={{
        content: "''",
        background: "black",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        transformOrigin: "center left",
        transform: "translate3d(-100%,0,0)",
      }}
      _after={{
        content: "''",
        background: "black",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        transformOrigin: "center left",
        transform: "translate3d(100%,0,0)",
        transition: "transform 0.3s cubic-bezier(0.7, 0, 0.2, 1)",
      }}
      _hover={{
        _before: {
          transform: "translate3d(0,0,0)",
          transition: "transform 0.3s cubic-bezier(0.7, 0, 0.2, 1)",
        },
        _after: {
          transform: "translate3d(0,0,0)",
          transition: "transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1),",
        },
      }}
      {...props}
    >
      <Text
        as="span"
        display="block"
        position="relative"
        zIndex={1}
        overflow="hidden"
        mixBlendMode="difference"
      >
        <Text
          as="span"
          display="block"
          position="relative"
          zIndex={1}
          _groupHover={{
            animation: `${moveRightInitial} 0.1s forwards, ${moveRightEnd} 0.3s forwards 0.2s`,
          }}
        >
          {children}
          <ArrowForwardIcon marginLeft={4} />
        </Text>
      </Text>
    </Link>
  );
}
