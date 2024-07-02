import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#7a7a81" fontSize="12px">
      <footer>
        <Flex
          margin="0 auto"
          px={16}
          paddingY={6}
          color="white"
          justifyContent="flex-end"
          alignItems="center"
          maxWidth="1024px"
          height={12}
        >
          <p>Helen • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
