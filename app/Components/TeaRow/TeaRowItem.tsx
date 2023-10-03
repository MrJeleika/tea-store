import { Box, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  imageUrl: StaticImageData;
};

export const TeaRowItem = ({ title, imageUrl }: Props) => {
  return (
    <Box textAlign={'center'}>
      <Box mb={4}>
        <Image width={150} height={150} src={imageUrl} alt={title} />
      </Box>
      <Text fontSize={'xl'}>{title}</Text>
    </Box>
  );
};
