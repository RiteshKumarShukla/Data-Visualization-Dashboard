import React, { useState } from 'react';
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  Select,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const AdminDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={onOpen}
        position="fixed"
        top="50%"
        left={0}
        transform="translateY(-50%)"
        zIndex={1}
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="xl"
            fontWeight="bold"
            color="teal.500"
          >
            Filters
          </DrawerHeader>
          <DrawerBody>
            <Box mb={4}>
              <Select
                value={selectedOption}
                onChange={handleOptionChange}
                placeholder="Select an option"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                {/* Add more options as needed */}
              </Select>
            </Box>
            {/* Add more filter options here */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Add your main content here */}
    </Container>
  );
};

export default AdminDashboard;
