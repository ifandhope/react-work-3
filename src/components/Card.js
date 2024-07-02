import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProjectsSection from "./ProjectsSection";

const Card = ({ title, description, imageSrc }) => {
  
  return (
    <VStack
      color="black"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="lg"
    >
      <Image src={imageSrc} borderRadius="lg" alt={title} />
      <VStack spacing={2} p={4} alignItems="flex-start">
        <HStack>
          <Heading as="b" size="md">
            {title}
          </Heading>
        </HStack>
        <text color="slategray" fontSize="sm">
          {description}
        </text>
        <HStack spacing={2} alignItems="center">
          <p fontSize="2xs">See more</p>
          <FontAwesomeIcon icon={faArrowRight} size="2xs" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
