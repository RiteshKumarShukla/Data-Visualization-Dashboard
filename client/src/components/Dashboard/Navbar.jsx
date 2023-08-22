import React from 'react';
import {
  Box,
  Flex,
  Container,
  Input,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  useColorMode,
} from '@chakra-ui/react';
import { ChevronDownIcon, BellIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode(); 

  return (
    <Box py={2} bgGradient="linear(to-b, #4F3BA9, #9068BE)">
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Box w="80%">
            <Input
              type="text"
              placeholder="Search..."
              size="sm"
              borderRadius="full"
              bg="white"
              px={4}
              py={1}
              _placeholder={{ color: 'gray.500' }}
              _focus={{ outline: 'none' }}
            />
          </Box>
          <Box>
            <Flex align="center">
              {/* Theme icon */}
              <IconButton
                aria-label="Toggle Theme"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                bg="transparent"
                border="none"
                onClick={toggleColorMode}
              />
              <IconButton
                aria-label="Notifications"
                icon={<BellIcon boxSize={6} />}
                bg="transparent"
                border="none"
              >
                <Badge colorScheme="red" color="red">
                  3
                </Badge>
              </IconButton>
              <Menu>
                <MenuButton as={IconButton} icon={<ChevronDownIcon boxSize={6} />} variant="unstyled" />
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
              <Avatar
                size="sm"
                src="https://avatars.githubusercontent.com/u/110231091?s=400&u=dfefa66e38cbdd84674e1a9f55737a51827b8725&v=4"
                ml={3}
              />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
