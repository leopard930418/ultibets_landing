import { Box, Flex, Image, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

type SideLinkProps = {
  name: string;
  href?: string;
  icon: string;
  sidebarLink?: string;
  setSideBarLink: (value: string | undefined) => void;
};
const SideLink = ({
  name,
  href,
  icon,
  sidebarLink,
  setSideBarLink,
}: SideLinkProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  // console.log(router.pathname);
  
  return (
    <Flex
      ml={"7px"}
      borderRadius={"5px"}
      background={sidebarLink === href ? "#FF9100" : "unset"}
      _hover={{
        background: "#FF9100",
      }}
      onClick={()=>{setSideBarLink(href)}}
      onMouseOver={()=>{setSideBarLink(href)}}
    >
      <Tooltip
        label={name}
        hasArrow
        bg={"#FF9100"}
        placement={"top"}
        borderRadius={"5px"}
      >
        <Image
          px={icon === "/images/svgs/sidebar/nfl.svg" ? "4px" : "1px"}
          py={"1px"}
          src={icon}
          alt={name}
          width={["30px", "30px", "42px", "42px"]}
          height={["30px", "30px", "42px", "42px"]}
        />
      </Tooltip>
    </Flex>
  );
};

export default SideLink;

// oh btw the text for the tokenomics isnt good, we gonna replace just by:
// "1,000,000,000 $UTBETS Will Be Distributed Into Four Different Chains (BSC, ETH, FTM, AVAX)" + the boxes and name of chain with 25%

// Make a disclaimer popup + geoblock to prevent people from sanctionned countries to be able to place bet on this website (will not prevent them to bet directly via smart contracts tho as it's decentralized, but will avoid us a LOT of potential future troubles from regulators if we implement this small feature)

// also a very small detail but please add the world cup icon to the landing page

// also we gonna a tiny change for the very last time to the timeline:
// protocol launch: Q4 2022 instead of Q3 2022
// protocol improvements: Q1 2023 instead of Q4 2022-Q1 2023

// also be careful to no miss capital letters, with the Home tab (landing page) as it's written home for its tab title instead of Home | UltiBets, I know i'm picky here but every details matter mate
