import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Timeline from '../Timeline/Timeline';
const Slide = require('react-reveal/Slide');

const RoadMap = () => {
  return (
    <Box
    //  display={['none', 'none', 'block', 'block']}
    >
      <Flex
        mt={['150px', '130px', '180px', '-80px']}
        justifyContent={'center'}
        alignItems={'center'}
        direction={'column'}
      >
        <Flex justifyContent={'center'} alignItems={'center'}>
          {/* <Slide top duration={1000} delay={200}> */}
          <Text
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            //               font-size: 30px;
            // line-height: 41px;
            fontSize={['30px', '30px', '30px', '50px']}
            lineHeight={['41px', '41px', '41px', '68px']}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            RoadMap
          </Text>
          {/* </Slide> */}
        </Flex>
        <Timeline />
      </Flex>
    </Box>
  );
};

export default RoadMap;
