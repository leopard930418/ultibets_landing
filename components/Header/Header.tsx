import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import "@fontsource/nunito";
import NavLink from "./Navlink";

const Header = () => {
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Box
      // position="fixed"
      zIndex={10}
      h={["full", "unset", "80px", "80px"]}
      bg="#1F1F1F"
    >
      {" "}
      <Box
        display={["flex", "flex", "block", "block"]}
        bg="#1F1F1F"
        h={["full", "unset", "80px", "80px"]}
        width={"100%"}
        // position={'fixed'}
        justifyContent={[
          "space-between",
          "space-between",
          "center",
          "space-between",
        ]}
        alignItems={"center"}
      >
        <header>
          <Flex justifyContent={"space-between"}>
            <Flex
              justifyContent={"center"}
              alignItems="center"
              display={["none", "none", "none", "flex"]}
            >
              <NextLink href="/" passHref>
                <Link>
                  {" "}
                  <Image
                    src="/images/svgs/with-color-logo.svg"
                    alt="logo"
                    width={["200px", "unset", "200px", "100%"]}
                  />
                </Link>
              </NextLink>
            </Flex>
            <Flex
              width={["100vw", "100vw", "auto", "100%"]}
              justifyContent={"space-between"}
              display={["flex", "flex", "flex", "none"]}
              mt={["20px", "20px", "15px", "unset"]}
            >
              <Image
                src="/images/svgs/bg/logo-vector.svg"
                alt="logo"
                width={["160px", "160px", "150px", "100%"]}
              />

              <Flex
                mr={"10px"}
                alignItems="center"
                display={["flex", "flex", "none", "none"]}
              >
                {isOpen ? (
                  <CloseIcon
                    color={"white"}
                    fontSize="28px"
                    onClick={handleToggle}
                  />
                ) : (
                  <HamburgerIcon
                    color={"white"}
                    fontSize="30px"
                    onClick={handleToggle}
                  />
                )}
              </Flex>
            </Flex>

            <Flex
              display={["none", "none", "flex", "flex"]}
              width={["unset", "unset", "100%", "100%"]}
              mt={["unset", "unset", 7, 7]}
              height={["unset", "unset", 15, 15]}
              gap={["unset", "unset", "10px", 10]}
              ml={["unset", "unset", "10px", "90px"]}
              alignItems={["unset", "unset", "center", "center"]}
            >
              {LinkArry.map((item, index) => (
                <NavLink key={index} name={item.name} href={item.href} />
              ))}
            </Flex>
            {/* <Flex>
              <Flex
                mt={['unset', 'unset', '17px', '14px']}
                mr={'10px'}
                display={['none', 'none', 'flex', 'flex']}
                gap={'10px'}
              >
                <Account />
              </Flex>{' '}
            </Flex> */}

            <Flex>
              <Flex
                mt={"18px"}
                display={["none", "none", "flex", "flex"]}
                mr={["unset", "unset", "unset", "40px"]}
              >
                <a href="https://ultibetsmainapp.vercel.app/bets">
                  <Button
                    height={"41px"}
                    width={"162px"}
                    borderRadius={"34px"}
                    border={"1px solid #FC541C"}
                    background={"unset"}
                    _hover={{ background: "#FC541C" }}
                  >
                    <Text
                      fontFamily={"Nunito"}
                      fontSize={"18px"}
                      fontWeight={"700"}
                      lineHeight={"25px"}
                      letterSpacing={"0em"}
                      textAlign={"left"}
                      color={"#FFFFFF"}
                    >
                      Launch App
                    </Text>
                  </Button>
                </a>
              </Flex>{" "}
            </Flex>
          </Flex>
        </header>
      </Box>
      <Flex
        display={[isOpen ? "flex" : "none", "none", "none", "none"]}
        gap={"10px"}
        width={"100%"}
      >
        {" "}
        <Flex direction={"column"}>
          {LinkArry.map((item, index) => (
            <NavLink
              key={index}
              href={item.href}
              name={item.name}
              onClose={onClose}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
