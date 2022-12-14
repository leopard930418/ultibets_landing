import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NavLink from "../Header/Navlink";

const Footer = () => {
  const LinkArry = [
    {
      name: "Home",
      // href: '/',
      href: "https://ultibets.vercel.app/",
    },
    {
      name: "Prediction Markets",
      href: "https://ultibetsmainapp.vercel.app/bets",
    },

    {
      name: "Squid Bet Competitions",
      href: "https://ultibetsmainapp.vercel.app/squid-competition",
    },
    {
      name: "UtBets Token",
      href: "https://ultibetsmainapp.vercel.app/utbets-token",
    },
    {
      name: "Governance",
      href: "https://ultibetsmainapp.vercel.app/governance",
    },
    {
      name: "Merch Store",
      href: "https://ultibetsmerchstore.vercel.app/merch-store",
    },
    {
      name: "FAQ",
      href: "https://ultibetsmainapp.vercel.app/faq",
    },
  ];

  return (
    <>
      {/* <Box
        display={['block', 'none', 'none', 'none']}
        bgGradient={'linear(to-r, #353535 29.48%, #5A3B2E 75.94%)'}
        borderStyle={'solid'}
        width={'100%'}
        bottom={0}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={2}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text color={'white'}>© 2022 Ultibets. All rights reserved</Text>
          <Stack direction={'row'} gap={'20px'}>
            <a href='https://medium.com/@ultibets' target='_new'>
              <Image
                src={'/images/svgs/medium-logo.svg'}
                alt='Twitter'
                height={50}
                width={50}
              />
            </a>
            <a href='http://t.me/ultibets' target='_new'>
              <Image
                src={'/images/svgs/telegram-logo.svg'}
                alt='Twitter'
                height={50}
                width={50}
              />
            </a>
            <a href='http://discord.gg/EsWqNmTcdr' target='_new'>
              <Image
                src={'/images/svgs/discord-logo.svg'}
                alt='Twitter'
                height={50}
                width={50}
              />
            </a>
            <a href='https://twitter.com/ultibets' target='_new'>
              <Image
                src={'/images/svgs/twitter-logo.svg'}
                alt='Twitter'
                height={50}
                width={50}
              />
            </a>
          </Stack>
        </Container>
      </Box> */}

      <Box>
        <Box
          display={["block", "block", "block", "block"]}
          bgGradient={"linear(to-r, #353535 29.48%, #5A3B2E 75.94%)"}
          borderStyle={"solid"}
          width={"100%"}
          bottom={"0"}
          px={"80px"}
        >
          <Flex
            height={["unset", "unset", "unset", "80px"]}
            justifyContent={["center", "center", "center", "space-between"]}
            alignItems={"center"}
            direction={[
              "column-reverse",
              "column-reverse",
              "column-reverse",
              "row",
            ]}
          >
            <Flex
              display={["none", "none", "flex", "flex"]}
              gap={["20px", "20px", "20px", "40px"]}
            >
              {LinkArry.map((item, index) => (
                <NavLink key={index} name={item.name} footer href={item.href} />
              ))}
            </Flex>
            <Grid
              display={["grid", "grid", "none", "none"]}
              gridTemplateColumns={"repeat(2, 160px)"}
              mb={["10px", "20px", "20px", "0"]}
              pl={['auto','40px']}
              //center Content with margin
              mx={"auto"}
            >
              {LinkArry.map((item, index) => (
                <NavLink key={index} name={item.name} footer href={item.href} />
              ))}
            </Grid>
            <Stack direction={"row"} gap={"25px"}>
              <a href="https://medium.com/@ultibets" target="_new">
                <Image
                  src={"/images/svgs/medium-logo.svg"}
                  alt="Twitter"
                  height={50}
                  width={50}
                />
              </a>
              <a href="http://t.me/ultibets" target="_new">
                <Image
                  src={"/images/svgs/telegram-logo.svg"}
                  alt="Twitter"
                  height={50}
                  width={50}
                />
              </a>
              <a href="http://discord.gg/EsWqNmTcdr" target="_new">
                <Image
                  src={"/images/svgs/discord-logo.svg"}
                  alt="Twitter"
                  height={50}
                  width={50}
                />
              </a>
              <a href="https://twitter.com/ultibets" target="_new">
                <Image
                  src={"/images/svgs/twitter-logo.svg"}
                  alt="Twitter"
                  height={50}
                  width={50}
                />
              </a>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

// export default Footer;

// import { Box, Button, Container, Stack, Text } from '@chakra-ui/react';
// import Image from 'next/image';
// const Footer = () => {
//   return (
//    );
// };

export default Footer;
