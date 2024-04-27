import React from "react";
import { Box } from "@primer/react";
import '../General.css'


const Democrat = (props) => {
  const buttonClick = () => {
    //ecd4da5bd61f43779b5db9efee1d4034


    const url =
      "https://newsapi.org/v2/top-headlines?sources=usa-today&apiKey=ecd4da5bd61f43779b5db9efee1d4034";
    fetch(url).then((res) => {
      console.log(res.json());
    });
  };

  // console.log(props)

  const repArray = props.repArray[0].demo 

  return (
    <Box sx={{ backgroundColor: "canvas.default" }}>
      <div className="container-fluid">
        <div className="row mt-2">
          {repArray.map((imageItem) => {
            const { id, image, title } = imageItem;
            return (
              <>
                <div
                  onClick={() => {
                    props.setShowFirstLayer(false)
                    props.setNewsSelected(title)
                    console.log(title)
                  }}
                  key={id}
                  align="center"
                  className="col-lg-4 col-md-6 col-sm-12 point"
                >
                    <Box
                      style={{
                        marginBottom: 5,
                        marginTop: 5,
                        borderColor: 'border.subtle',
                        border: "1px solid",
                        borderRadius: "6px",
                        maxWidth: '220px'
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
  );
};

export default Democrat;
