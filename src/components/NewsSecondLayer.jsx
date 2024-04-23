import React from "react";
import { Box, Heading, Link, Text } from "@primer/react";
import { ArrowLeftIcon } from "@primer/octicons-react";
const NewsSecondLayer = (props) => {
  return (
    <>
      {props.showFirstLayer ? (
        <Box sx={{ backgroundColor: "canvas.defaut" }}>
          {props.renderComponent()}
        </Box>
      ) : (
        <>
          <Box
            sx={{
              '&:hover':{
                cursor:'pointer'
              },
              marginTop: 3,
              marginLeft: 3,
            }}
          >
            <Link
              sx={{
               

              }}
              onClick={() => {
                props.setShowFirstLayer(true);
              }}
            >
              <ArrowLeftIcon /> Back
            </Link>
          </Box>
          <Box sx={{

          }}></Box>
        </>
      )}
    </>
  );
};

export default NewsSecondLayer;
