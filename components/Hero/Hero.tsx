import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Herolink from './Herolink';
const Slide = require('react-reveal/Slide');

const Hero = () => {
  return (
    <Flex
      mt={'70px'}
      background={[
        'url(/images/svgs/bg/mobile-bg.png)',
        // 'url(/images/svgs/bg/mobile-bg.png)',
        'none',
        'none',
      ]}
      backgroundSize={'cover'}
    >
      <Flex
        justifyContent={'space-between'}
        width={['100%', '100%', '100%', '100vw']}
        px={['10px', '20px', '100px', '100px']}
      >
        <Flex
          ml={['0px', '0px', '0px', '30px']}
          direction={'column'}
          gap={['20px', '10px', '10px', '40px']}
        >
          {/* <Slide left duration={1000} delay={200}> */}
          <Heading
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={['30px', '30px', '40px', '60px']}
            lineHeight={['40px', '40px', '40px', '73px']}
            letterSpacing={'0em'}
            textAlign={'left'}
            color={'#FFFFFF'}
            width={['300px', '446px', '400px', '446px']}
          >
            The first multichain betting protocol
          </Heading>
          <Flex
            mx={['2px', '2px', '0px', '0px']}
            gap={['5px', '5px', '10px', '15px']}
          >
            <Herolink />
          </Flex>
          <Flex
            mt={['130px', '10px', '10px', '0px']}
            ml={['70px', '50px', '0px', '0px']}
            justifyContent={['center', 'center', 'start', 'start']}
            alignItems={['center', 'center', 'start', 'start']}
          >
            <Button
              height={'54px'}
              width={'224px'}
              borderRadius={'45px'}
              border={'1px solid #FC541C'}
              background={'unset'}
              _hover={{ background: '#FC541C' }}
            >
              <Text
                fontFamily={'Nunito'}
                fontSize={'22px'}
                fontWeight={'700'}
                lineHeight={'25px'}
                letterSpacing={'0em'}
                textAlign={'left'}
                color={'#FFFFFF'}
              >
                Start Betting{' '}
              </Text>
            </Button>{' '}
          </Flex>
          {/* </Slide> */}
        </Flex>
        <Flex mr={['0px', '0px', '0px', '30px']}>
          {/* <Slide right duration={1000} delay={200}> */}
          <Image
            src='/images/svgs/bg/logo-bg.svg'
            alt='logo'
            width={['170px', '110px', '160px', '248px']}
            height={['170px', '110px', '160px', '248px']}
          />
          {/* </Slide> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
