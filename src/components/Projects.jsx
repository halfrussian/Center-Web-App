import React from "react";
import { Text, Heading, Box } from "@primer/react";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = (props) => {

  console.log(props.data)
  return (
    <>
    <Box sx={{ maxWidth: "100%", backgroundColor: "canvas.default" }}>
      <Box
        sx={{
          backgroundColor: "canvas.default",
          paddingTop: 8,
          maxWidth: "1220px",
          margin: "auto",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            {props.data.map(cardItem => {
              const {id, image, categories, title, desc} = cardItem

              return (
                <>
                <div className="col-lg-6" key={id}>
                    <Box>
                      <Box>
                        <img
                          src={image}
                          alt=""
                          className="img-fluid"
                          style={{
                            borderRadius: "6px",
                            border: "solid 1px lightgray",
                          }}
                        />
                      </Box>
                      <Box display="flex" sx={{ fontFamily: "Gill Sans", mt: 3 }}>

                        {/* {categories.map(catItem => {
                          return (
                            <>
                              <Text sx={{ marginRight: 2 }}>{`${catItem} /`}</Text>
                            </>
                          )
                        })} */}
                      </Box>
                      <Box>
                      <Heading as="h2" sx={{fontSize: 4}}>
                          {title}
                      </Heading>
                      <Text as="p"
                      sx={{fontSize: 3}}
                      >{desc}</Text>
                      </Box>
                    </Box>
                  </div>
                </>
              )
            })}
            {/* Card is in one column */}
            
            <div className="col-lg-6 bg-info"></div>
          </div>
        </div>
      </Box>
    </Box>
 
    
     </>
  );
};

export default Projects;
