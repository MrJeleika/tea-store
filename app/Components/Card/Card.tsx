import { Box, Heading, Text } from '@chakra-ui/react';

type Props = {};

export const Card = (props: Props) => {
  return (
    <Box
      background={'white'}
      display={'inline-block'}
      p={4}
      role="group"
      rounded={'lg'}
      _hover={{ boxShadow: '0px 2px 30px  rgba(143,143,143,0.5)', transition: 'all 0.3s ease', transitionDelay: '0.2s' }}
    >
      <Text as="h5" _groupHover={{ color: 'red', transition: 'all 0.3s ease', transitionDelay: '0.2s' }}>
        Шен пуер
      </Text>
    </Box>
  );
};
