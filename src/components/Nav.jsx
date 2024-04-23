import React, { useState } from "react";
import { Text, Box, UnderlineNav, NavList } from "@primer/react";
import Democrat from "./Democrat";
import Republican from "./Republican";
import Center from "./Center";
import { HomeIcon } from "@primer/octicons-react";
import { SearchIcon } from "@primer/octicons-react";
import { StarIcon } from "@primer/octicons-react";
import AdSpace from "./AdSpace";
import NewsSecondLayer from "./NewsSecondLayer";
import cnn from "../assets/newslogos/cnn.png";
import bbc from "../assets/newslogos/bbc.png";
import abc from "../assets/newslogos/abc.jpg";
import usa from "../assets/newslogos/usa.jpg";
import msnbc from "../assets/newslogos/msnbc.jpg";
import vice from "../assets/newslogos/vice.png";
import huff from "../assets/newslogos/huff.png";
import wp from "../assets/newslogos/wp.png";

const Nav = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [newsSelected, setNewsSelected] = useState(null);
  const [showFirstLayer, setShowFirstLayer] = useState(true);

  const handleItemClick = (index) => {
    setCurrentItemIndex(index);
  };

  const navItems = ["Democrat", "Center", "Republican"];

  const renderComponent = () => {
    switch (currentItemIndex) {
      case 0:
        return (
          <Democrat
            dataArray={dataArray}
            setNewsSelected={setNewsSelected}
            setShowFirstLayer={setShowFirstLayer}
          />
        );
      case 1:
        return <Center />;
      case 2:
        return <Republican />;
      case 3:
        return console.log("hello");
      default:
        return null;
    }
  };

  console.log(showFirstLayer);

  const dataArray = [
    {
      demo: [
        ,
        { id: 1, image: cnn, title: "CNN" },
        { id: 2, image: bbc, title: "BBC" },
        { id: 3, image: abc, title: "ABC" },
        { id: 4, image: usa, title: "USA Today" },
        { id: 5, image: msnbc, title: "MSNBC" },
        { id: 6, image: vice, title: "Vice News" },
        { id: 7, image: huff, title: "Huffington Post" },
        { id: 8, image: wp, title: "Washington Post" },
      ],
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        {<NavList />}
        <NavList
          sx={{
            width: ["15vw", "15vw", "20vw"],
            backgroundColor: "canvas.default",
            height: "100vh",
            position: "sticky",
            top: 0,
            border: "1px solid",
            borderColor: "border.subtle",
          }}
        >
          <NavList.Item sx={{ padding: 3 }}>
            <NavList.LeadingVisual>{<HomeIcon />}</NavList.LeadingVisual>
            <Text sx={{ fontSize: 2, display: ["none", "none", "block"] }}>
              Home
            </Text>
          </NavList.Item>
          <NavList.Divider></NavList.Divider>
          <NavList.Item sx={{ padding: 3 }}>
            <NavList.LeadingVisual>{<SearchIcon />}</NavList.LeadingVisual>
            <Text sx={{ fontSize: 2, display: ["none", "none", "block"] }}>
              Search
            </Text>
          </NavList.Item>
          <NavList.Divider></NavList.Divider>
          <NavList.Item sx={{ padding: 3 }}>
            <NavList.LeadingVisual>{<StarIcon />}</NavList.LeadingVisual>
            <Text sx={{ fontSize: 2, display: ["none", "none", "block"] }}>
              Favorites
            </Text>
          </NavList.Item>
          <NavList.Divider></NavList.Divider>
        </NavList>

        <Box
          sx={{
            width: ["85vw", "85vw", "60vw"],
            backgroundColor: "canvas.default",
          }}
        >
          <UnderlineNav
            sx={{
              display: ["flex"],
              justifyContent: ["center"],
              backgroundColor: "canvas.default",
              position: "sticky",
              top: 0,
            }}
            aria-label="nav"
          >
            {navItems.map((item, index) => (
              <UnderlineNav.Item
                key={index}
                href="#"
                aria-current={index === currentItemIndex ? "page" : undefined}
                onClick={() => {
                  handleItemClick(index)
                  setShowFirstLayer(true)
                }}
                sx={{
                  fontSize: 2,
                  paddingRight: [2, 4, 5, 7, 9],
                  paddingLeft: [2, 4, 5, 7, 9],
                }}
              >
                {item}
              </UnderlineNav.Item>
            ))}
          </UnderlineNav>

          {/* SCROLLABLE VIEW */}

          <NewsSecondLayer
            renderComponent={renderComponent}
            showFirstLayer={showFirstLayer}
            setShowFirstLayer={setShowFirstLayer}
            newsSelected={newsSelected}
          />
        </Box>
        {/* ad space */}
        <Box
          sx={{
            display: ["none", "none", "block"],
            width: ["0vw", "0vw", "20vw"],
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
        >
          <AdSpace />
        </Box>
      </Box>
    </>
  );
};

export default Nav;
