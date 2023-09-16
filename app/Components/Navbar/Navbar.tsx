import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import s from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <Flex justifyContent={'space-between'} paddingY={8} paddingX={5}>
      <Box>Logo</Box>
      <Box>
        <List display={'flex'}>
          <ListItem>
            <Link href={'/to'} className={s.link}>
              фів
            </Link>
          </ListItem>
          <ListItem>
            <Link href={'/to'} className={s.link}>
              фів
            </Link>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};
