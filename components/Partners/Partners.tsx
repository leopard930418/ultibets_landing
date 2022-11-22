import { Box, Center, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
const Slide = require("react-reveal/Slide");

const Partners = () => {
  return (
    <Box
      // display={['none', 'none', 'block', 'block']}
      mt={["100px", "130px", "180px", "200px"]}
      mb={"150px"}
      position={"relative"}
    >
      <Flex
        mt={["-100px", "100px", "100px", "100px"]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <Slide top duration={1000} delay={200}> */}
        <Text
          fontFamily={"Nunito"}
          fontStyle={"normal"}
          fontWeight={"700"}
          //             font-size: 25px;
          // line-height: 34px;
          fontSize={['25px', '30px', '30px', '50px']}

          lineHeight={["41px", "41px", "34px", "68px"]}
          textTransform={"capitalize"}
          color={"#FFFFFF"}
        >
          UltiBets Partners
        </Text>
        {/* </Slide> */}
      </Flex>

      <Flex
        mt={["0px", "100px", "100px", "100px"]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          justifyContent={"center"}
          gap={["50px", "50px", "30px", "20px", "100px", "150px", "250px"]}
          direction={["column", "column", "column", "row"]}
        >
          <Image
            src={"/images/svgs/Thorstarter_logo.svg"}
            position={"relative"}
            width={['200px', '200px', '250px', '220px', '250px', '350px']}
            height={'auto'}
          />
          <Image src={"/images/svgs/Chainlink_logo.svg"} 
          width={['200px', '200px', '250px', '220px', '250px', '350px']}
          height={'auto'}
          />
          <Image src={"/images/svgs/GA_logo.svg"} 
          width={['200px', '200px', '250px', '220px', '250px', '350px']}
          height={'auto'}
          />
          <Image src={"/images/svgs/Sushi_logo.svg"} 
          width={['200px', '200px', '250px', '220px', '250px', '350px']}
          height={'auto'}
          />
          {/* <Image
          mt={['100px', '130px', '380px', '-20px']}
          src={'/images/svgs/bg/key-vector.svg'}
          width={'100vw'}
          height={'442.18px'}
          alt={'key numbers'}
        />
        <Image
          mt={['100px', '130px', '380px', '-20px']}
          src={'/images/svgs/bg/key-vector.svg'}
          width={'100vw'}
          height={'442.18px'}
          alt={'key numbers'}
        />
        <Image
          mt={['100px', '130px', '380px', '-20px']}
          src={'/images/svgs/bg/key-vector.svg'}
          width={'100vw'}
          height={'442.18px'}
          alt={'key numbers'}
        /> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Partners;
