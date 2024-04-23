import React from "react";
import { Box } from "@primer/react";
import bri from "../assets/newslogos/bri.png";
import fox from "../assets/newslogos/fox.png";
import hill from "../assets/newslogos/hill.png";
import wsj from "../assets/newslogos/wsj.jpg";
import wt from "../assets/newslogos/wt.png";
import amcon from "../assets/newslogos/amcon.jpg";
import nr from "../assets/newslogos/nr.png";
import '../General.css'

const Republican = () => {
  const buttonClick = () => {

    const url =
      "https://newsapi.org/v2/top-headlines?sources=usa-today&apiKey=ecd4da5bd61f43779b5db9efee1d4034";
    fetch(url).then((res) => {
      console.log(res.json());
    });
  };

  const imageArray = [
    { id: 2, image: fox },
    { id: 3, image: hill},
    { id: 4, image: wsj},
    { id: 1, image: bri },
    { id: 5, image: wt },
    { id: 6, image: amcon},
    { id: 7, image: nr },
  ];

  return (
    <Box sx={{ backgroundColor: "canvas.default" }}>
      <div className="container-fluid">
        <div className="row mt-2">
          {imageArray.map((imageItem) => {
            const { id, image } = imageItem;

            return (
              <>
                <div
                  key={id}
                  align="center"
                  className="col-lg-4 col-md-6 col-sm-12"
                >
                    <Box
                      style={{
                        marginBottom: 5,
                        marginTop: 5,
                        borderColor: 'border.subtle',
                        border: "1px solid",
                        borderRadius: "6px",
                        maxWidth: '220px',
                        "&:hover": {
                            cursor: "pointer !important",
                        }

                      }}
                    >
                      <img
                        style={{ borderRadius: "6px", }}
                        src={image}
                        className="card-img-top point"
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
  );
};

export default Republican
