import React, { useState, useEffect} from "react";
import { Box } from "@primer/react";
import "../General.css";
import NewsSecondLayer from "./NewsSecondLayer";

const Democrat = (props) => {
  
  const { hide, setHide,newsSelected } = props; 

  useEffect(() => {
  
  }, [ ]);

  const democratArray = props.dataArray[0].demo;

  console.log(props.newsSelected)

  

  return (
    <>
      {!hide ? (
        <Box sx={{ backgroundColor: "canvas.default" }}>
          <div className="container-fluid">
            <div className="row mt-2">
              {democratArray.map((imageItem) => {
                const { id, image, title } = imageItem;
                return (
                  <>
                    <div
                      onClick={() => {
                        //  props.setShowFirstLayer(false)
                        props.setNewsSelected(title);
                        setHide(true);
                      }}
                      key={id}
                      align="center"
                      className="col-lg-4 col-md-6 col-sm-12 point"
                    >
                      <Box
                        style={{
                          marginBottom: 5,
                          marginTop: 5,
                          borderColor: "border.subtle",
                          border: "1px solid",
                          borderRadius: "6px",
                          maxWidth: "220px",
                        }}
                      >
                        <img
                          style={{ borderRadius: "6px" }}
                          src={image}
                          className="card-img-top"
                          alt=""
                        />
                      </Box>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </Box>
      ) : (
        <>
          <NewsSecondLayer 
          newsSelected={newsSelected}
          
          hide={hide} />
        </>
      )}
    </>
  );
};

export default Democrat;
