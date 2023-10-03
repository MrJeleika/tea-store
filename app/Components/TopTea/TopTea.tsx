import { Box, Heading } from '@chakra-ui/react';
import { Card } from '../Card/Card';

export const TopTea = () => {
  return (
    <Box>
      <Heading as={'h2'}>Топ чаїв</Heading>
      <Card />
    </Box>
  );
};
