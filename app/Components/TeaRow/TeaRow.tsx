import { Box, Flex, Heading } from '@chakra-ui/react';
import { TeaRowItem } from './TeaRowItem';
import Row1Img from 'public/assets/images/row-1.jpg';

export const TeaRow = () => {
  return (
    <Box w={'100vw'} p={5} bgColor={'primary.gray'}>
      <Heading as="h1" size="lg" textAlign={'center'} mb={5}>
        Обери свій чай!
      </Heading>
      <Flex justifyContent={'space-between'} px={8}>
        <TeaRowItem imageUrl={Row1Img} title="Білий" />
        <TeaRowItem imageUrl={Row1Img} title="Зелений" />
        <TeaRowItem imageUrl={Row1Img} title="Жовтий" />
        <TeaRowItem imageUrl={Row1Img} title="Улун" />
        <TeaRowItem imageUrl={Row1Img} title="Червоний" />
        <TeaRowItem imageUrl={Row1Img} title="Шу пуер" />
        <TeaRowItem imageUrl={Row1Img} title="Шен пуер" />
      </Flex>
    </Box>
  );
};
