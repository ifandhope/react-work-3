import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import cello2 from "../images/cello2.jpg";

const greeting = "Hello, I am Helen!";
const bio1 = "A frontend developer to be &";
const bio2 = "Code lover";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="white"
    color="black"
  >
    <VStack spacing={10}>
      <VStack spacing={4} alignItems="center">
        <Avatar src={cello2} alt="Avatar" name="Helen" width={10} />
        <Heading as="h4" size="xs" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={2}>
        <Heading as="h1" size="2xl" noOfLines={1}>
          {bio1}
        </Heading>

        <Heading as="h1" size="2xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
