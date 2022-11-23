import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
const Slide = require('react-reveal/Slide');

type Props = {
  title: string;
  subtitle: string;
  item1: string;
  item2: string;
  item3?: string;
  item4?: string;
};
const Content = ({ title, subtitle, item1, item2, item3, item4 }: Props) => {
  return (
    <Flex
      zIndex={10}
      direction={'column'}
      mt={'10px'}
      mb={['6px', '5px']}
      width={'300px'}
      height={['400px', '350px', 'auto', 'auto']}
    >
      <Flex>
        {/* <Slide bottom duration={1000} delay={200}> */}
        <Text
          fontStyle={'normal'}
          fontWeight={800}
          fontSize={'32px'}
          lineHeight={'39px'}
          // /* identical to box height */
          textTransform={'capitalize'}
          color={'#FFB11C'}
        >
          {/* q4 2021 */}
          {title && title}
        </Text>
        {/* </Slide> */}
      </Flex>
      <Flex>
        {/* <Slide bottom duration={1000} delay={200}> */}
        <Text
          mt={'25px'}
          fontStyle={'normal'}
          fontWeight={800}
          fontSize={'21px'}
          lineHeight={'25px'}
          textTransform={'capitalize'}
          color={'#FFFFFF'}
        >
          {/* ultibets proof of concept */}
          {subtitle && subtitle}
        </Text>
        {/* </Slide> */}
      </Flex>
      <Flex px={'17px'} mt={'15px'}>
        {/* <Slide bottom duration={1000} delay={200}> */}
        <ul>
          {item1 && (
            <li>
              <Text
                fontStyle={'normal'}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'22px'}
                textTransform={'capitalize'}
                color={'#FFFFFF'}
              >
                {/* Protocol design */}
                {item1 && item1}
              </Text>
            </li>
          )}
          {item2 && (
            <li>
              <Text
                fontStyle={'normal'}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'22px'}
                textTransform={'capitalize'}
                color={'#FFFFFF'}
              >
                {item2 && item2}
              </Text>
            </li>
          )}
          {item3 && (
            <li>
              <Text
                fontStyle={'normal'}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'22px'}
                textTransform={'capitalize'}
                color={'#FFFFFF'}
              >
                {' '}
                {item3 && item3}
              </Text>
            </li>
          )}
          {item4 && (
            <li>
              <Text
                fontStyle={'normal'}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'22px'}
                textTransform={'capitalize'}
                color={'#FFFFFF'}
              >
                {' '}
                {item4 && item4}
              </Text>
            </li>
          )}
        </ul>
        {/* </Slide> */}
      </Flex>
    </Flex>
  );
};

export default Content;
