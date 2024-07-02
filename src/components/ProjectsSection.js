import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "HTML & CSS",
    description:
      "Using structured semantic data to control how web sites appear to the user. Interactive web pages using HTML, CSS. ",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "JavaScript",
    description:
      "Programming in JavaScript; variables, datatypes, operators, strings, booleans, numbers, arrays, objects, functions,... ",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "React",
    description:
      "Handle the view layer of the application; render list and form components efficiently; lift a shared state up. ",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "UX/UI",
    description:
      "Differentiate UX and UI, use Figma, and create a contemporary user interface; low fidelity and high fedility design.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#7a7a81"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
