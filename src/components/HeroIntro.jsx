import React from "react";
import { Text, Heading, Box } from "@primer/react";

const HeroIntro = () => {
  return (
    <>
      <Box
        display="flex"
        sx={{
          width: "100%",
          backgroundColor: "canvas.default",
        }}
        className="heroIntro"
      >
        <Box
          sx={{
            maxWidth: "1300px",
            width: ["90%", "90%", "90%", "95%", "87%"],
            margin: "auto",
            marginTop: 8,
          }}
        >
          <Heading
            as="h1"
            sx={{
              fontSize: 6,
              marginBottom: 3,
              fontWeight: '700'
            }}
          >
            I’m a strategic Product Designer (ex Github)
          </Heading>

          <Text
            sx={{
              fontSize: 3,
              color: "fg.default",
            }}
          >
            Armed with the real world experience I was recently a UX Designer for Github. I specialize in implementing System Thinking, within an Agile
            environment, for Saas, E-commerce, CRM Databases, Support Portals and more.
            And if clients are low on developers I help them code as well. On a lighter note, in my spare time I experiment in developing for the MetaQuest and Apple Vision Pro.
          </Text>
          <Box sx={{
            paddingTop: 3,
          }}>
          <hr  />
          </Box>
          
        </Box>
      </Box>
      
      
    </>
  );
};

export default HeroIntro;
