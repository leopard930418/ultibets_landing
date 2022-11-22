import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Topbar from '../components/Sidebar/Topbar';
import '@fontsource/inter';
import '@fontsource/nunito';
import Hero from '../components/Hero/Hero';
import KeyNumbers from '../components/KeyNumbers/KeyNumbers';
import HomeVector from '../components/About/HomeVector';
import RoadMap from '../components/Roadmap/RoadMap';
import Partners from '../components/Partners/Partners';
import JoinUs from '../components/JoinUs/Index';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';

const Home: NextPage = () => {
  return (
    <Box
    // background={'url(/images/svgs/bg/simple-bg.png)'}
    // // background={[
    // //   'unset',
    // //   'unset',
    // //   'url(/images/svgs/bg/simple-bg.png)',
    // //   'url(/images/svgs/bg/simple-bg.png)',
    // //   'url(/images/svgs/bg/simple-bg.png)',
    // // ]}
    // // backgroundSize={''}
    // // backgroundPosition={'center'}
    // // backgroundRepeat={'no-repeat'}
    // height={'752px'}
    // width={'auto'}
    // backgroundBlendMode={'lighten'}
    >
      <Image
        position={'absolute'}
        zIndex={'-1'}
        src={'/images/svgs/bg/simple-bg.png'}
        height={['0px', '752px', '600px', '752px']}
        width={['0px', '100vw', '100vw', '100vw']}
        backgroundBlendMode={'lighten'}
        alt={'background'}
      />
      <Flex
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Topbar />
        <Hero />
      </Flex>
      <KeyNumbers />
      <About />
      <HomeVector />

      <RoadMap />
      <Partners />
      <JoinUs />
      <Footer />
    </Box>
  );
};

export default Home;
