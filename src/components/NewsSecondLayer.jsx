import React, { useState, useEffect } from "react";
import { Box, Heading, Link, Text, Truncate } from "@primer/react";
import { ArrowLeftIcon } from "@primer/octicons-react";

const NewsSecondLayer = (props) => {
  const [topTrendingArray, setTopTrendingArray] = useState([]);

  const dataApiArray = [
    { id: 1, title: "Breibart", api: "breitbart-news" },
    { id: 4, title: "The Washington Times", api: "the-washington-times" },
    {
      id: 7,
      title: "The American Conservative",
      api: "the-american-conservative",
    },
    { id: 2, title: "Wall Street Journal", api: "the-wall-street-journal" },
    { id: 3, title: "The Hill", api: "the-hill" },
    { id: 5, title: "Fox News", api: "fox-news" },
    { id: 6, title: "National Review", api: "national-review" },
    { id: 11, title: "CNN", api: "cnn" },
    { id: 12, title: "BBC", api: "bbc-news" },
    { id: 13, title: "ABC", api: "abc-news" },
    { id: 14, title: "USA Today", api: "usa-today" },
    { id: 15, title: "MSNBC", api: "msnbc" },
    { id: 16, title: "Vice News", api: "vice-news" },
    { id: 17, title: "Huffington Post", api: "the-huffington-post" },
    { id: 19, title: "Washington Post", api: "the-washington-post" },
  ];

  const item = {
    author: "BBC News",
    content:
      "King Charles will resume public engagements next week after making encouraging progress in his cancer treatment, Buckingham Palace has said.\r\nIt won't yet be a full return to official engagements for… [+3348 chars]",
    description:
      "King Charles is returning to public events after making encouraging progress in his cancer treatment.",
    publishedAt: "2024-04-26T17:37:17.6668409Z",
    source: { id: "bbc-news", name: "BBC News" },
    title:
      "King Charles to resume public duties after progress in cancer treatment",
    url: "https://www.bbc.co.uk/news/uk-68906421",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/4B2B/production/_133234291_ba1c98acd2d884d2dd1cff0ce0dc0dd9d3da1f14.jpg",
  };

  useEffect(() => {
    const matchingObject = dataApiArray.find(
      (item) => item.title === props.newsSelected
    );
    if (matchingObject) {
      const apiParam = matchingObject.api;
      // Call your API with/ the `apiParam` here
      const apiKey = "ecd4da5bd61f43779b5db9efee1d4034";
      fetch(
        `https://newsapi.org/v2/top-headlines?sources=${apiParam}&apiKey=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTopTrendingArray(data.articles);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [props.newsSelected]);

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
              "&:hover": {
                cursor: "pointer",
              },
              marginTop: 3,
              marginLeft: 3,
            }}
          >
            <Link
              sx={{}}
              onClick={() => {
                props.setShowFirstLayer(true);
              }}
            >
              <ArrowLeftIcon /> Back
            </Link>
          </Box>
          <Box
            sx={{
              marginTop: 5,
            }}
          >
            <Text
              sx={{
                color: "fg.default",
                marginLeft: 4,
                fontSize: 6,
              }}
            >
              {props.newsSelected}
            </Text>
            <hr />
          </Box>
          <Box>
            <Text
              sx={{
                color: "fg.default",
                marginLeft: 4,
                fontSize: 4,
              }}
            >
              Top Trending
            </Text>
          </Box>
          <div className="container-fluid">
            <div className="row">
              {topTrendingArray.map((topNewsItem) => {
                const { title, url, urlToImage } = topNewsItem;

                return (
                  <>
                    <div 
                    
                    key={url}
                    className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-3">
                      <Box sx={{}}>
                        <Text title="Some text with a branch-name-that-is-really-long">
                          {title}
                        </Text>
                        <img
                        onClick={() => {
                          window.open(url)
                        }}
                          src={ urlToImage}
                          className="img-fluid"
                          alt=""
                        />
                      </Box>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NewsSecondLayer;
