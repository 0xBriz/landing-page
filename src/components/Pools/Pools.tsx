import { Flex, Grid, Heading } from "@chakra-ui/react";
import poolsLiquidity from "../../../public/pools-liquidity.svg";
import poolsStable from "../../../public/pools-stable.svg";
import poolsMulti from "../../../public/pools-multi.svg";
import poolsSmart from "../../../public/pools-smart.svg";
import poolsWeighted from "../../../public/pools-weighted.svg";
import { PoolCard } from "./PoolCard";
import { useRef } from "react";
import { useIntersection } from "../../hooks";

export function Pools() {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });
  const inView = intersection !== null && intersection.intersectionRatio >= 0.1;

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
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight={900}
        paddingBottom={"72px"}
        textAlign="center"
        textShadow={"0px 2px 0px rgba(0, 0, 0, 0.25)"}
      >
        Unique pool types for limitless flexibility
      </Heading>

      <Grid
        ref={intersectionRef}
        templateRows={{ base: "repeat(5, 1fr)", md: "repeat(3, 1fr)" }}
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        columnGap="44px"
        rowGap={14}
      >
        <PoolCard
          colSpan={1}
          index={0}
          icon={poolsWeighted}
          title="Oracle Weighted"
          text="Adjust the ratio of tokens according to which you would like to hold more of, while still earning liquidity provider fees."
          visible={inView}
        />
        <PoolCard
          colSpan={1}
          index={1}
          icon={poolsStable}
          title="Stable Math"
          text="Hardcoded math that ensures price stability regardless of liquidity."
          visible={inView}
        />
        <PoolCard
          colSpan={1}
          index={2}
          icon={poolsMulti}
          title="Multi-Token"
          text="Create liquidity pools with up to 8 tokens and earn liquidity provider fees while holding a variety of crypto assets."
          headingProps={{ flex: { base: "initial", md: 1 } }}
          visible={inView}
        />
        <PoolCard
          colSpan={1}
          index={3}
          icon={poolsLiquidity}
          title="Liquidity Bootstrapping"
          text="Build on our platform with lower initial capital requirements that scale into higher liquidity across time."
          visible={inView}
        />
        <PoolCard
          colSpan={{ base: 1, md: 2 }}
          index={4}
          icon={poolsSmart}
          title="Smart Permissionless"
          text="Create liquidity pools with their own internal logic that act as trustless asset managers."
          visible={inView}
        />
      </Grid>
    </Flex>
  );
}
