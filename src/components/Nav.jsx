import React, { useState } from "react";
import { Text, Box, UnderlineNav, NavList, TabNav } from "@primer/react";
import Democrat from "./Democrat";
import Republican from "./Republican";
import Center from "./Center";
import { HomeIcon } from "@primer/octicons-react";
import { SearchIcon } from "@primer/octicons-react";
import { StarIcon } from "@primer/octicons-react";
import AdSpace from "./AdSpace";
import NewsSecondLayer from "./NewsSecondLayer";
//democrat
import cnn from "../assets/newslogos/cnn.png";
import bbc from "../assets/newslogos/bbc.png";
import abc from "../assets/newslogos/abc.jpg";
import usa from "../assets/newslogos/usa.jpg";
import msnbc from "../assets/newslogos/msnbc.jpg";
import vice from "../assets/newslogos/vice.png";
import huff from "../assets/newslogos/huff.png";
import wp from "../assets/newslogos/wp.png";
//republican
import fox from "../assets/newslogos/fox.png";
import hill from "../assets/newslogos/hill.png";
import amcon from "../assets/newslogos/amcon.jpg";
import nr from "../assets/newslogos/nr.png";
import wsj from "../assets/newslogos/wsj.jpg";
import wt from "../assets/newslogos/wt.png";
import bri from "../assets/newslogos/bri.png";

const Nav = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [newsSelected, setNewsSelected] = useState(null);
  const [showFirstLayer, setShowFirstLayer] = useState(true);

  const [hide, setHide] = useState(false);

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
            newsSelected={newsSelected}
            setNewsSelected={setNewsSelected}
            setShowFirstLayer={setShowFirstLayer}
            hide={hide}
            setHide={setHide}
          />
        );
      case 1:
        return <Center />;
      case 2:
        return <Republican 
            repArray={repArray}
            setNewsSelected={setNewsSelected}
            setShowFirstLayer={setShowFirstLayer}
        
        />;
      case 3:
        return console.log("hello");
      default:
        return null;
    }
  };

  const dataArray = [
    {
      demo: [
        { id: 1, image: cnn, title: "CNN", api: 'cnn'},
        { id: 2, image: bbc, title: "BBC", api:'bbc-news'},
        { id: 3, image: abc, title: "ABC",api: 'abc-news'},
        { id: 4, image: usa, title: "USA Today" , api:'usa-today'},
        { id: 5, image: msnbc, title: "MSNBC" , api:'msnbc'},
        { id: 6, image: vice, title: "Vice News" , api:'vice-news'},
        { id: 7, image: huff, title: "Huffington Post" , api:'the-huffington-post'},
        { id: 7, image: wp, title: "Washington Post" , api:'the-washington-post'},
      ],
    },
  ];

  const repArray = [
    {
      demo: [
        { id: 1, image: bri, title: "Breibart", api: 'breitbart-news'},
        { id: 4, image: wt, title: "The Washington Times" , api:'the-washington-times'},
        { id: 7, image: amcon, title: "The American Conservative" , api:'the-american-conservative'},
        { id: 2, image: wsj, title: "Wall Street Journal", api:'the-wall-street-journal'},
        { id: 3, image: hill, title: "The Hill",api: 'the-hill'},
        { id: 5, image: fox, title: "Fox News" , api:'fox-news'},
        { id: 6, image: nr, title: "National Review" , api:'national-review'},
        
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
            <NavList.LeadingVisual sx={{color: 'fg.default'}}>{<HomeIcon sx={{color: 'fg.default'}}/>}</NavList.LeadingVisual>
            <Text sx={{ fontSize: 2, display: ["none", "none", "block"] }}>
              Home
            </Text>
          </NavList.Item>
          <NavList.Divider></NavList.Divider>
          <NavList.Item sx={{ padding: 3 }}>
            <NavList.LeadingVisual sx={{color: 'fg.default'}}>{<SearchIcon />}</NavList.LeadingVisual>
            <Text sx={{ fontSize: 2, display: ["none", "none", "block"] }}>
              Search
            </Text>
          </NavList.Item>
          <NavList.Divider></NavList.Divider>
          <NavList.Item sx={{ padding: 3 }}>
            <NavList.LeadingVisual sx={{color: 'fg.default'}}>{<StarIcon />}</NavList.LeadingVisual>
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
          <TabNav
          
            sx={{
              display: ["flex"],
              justifyContent: ["center"],
              backgroundColor: "canvas.default",
              position: "sticky",
              top: 0,
              marginTop: 4
            }}
            aria-label="false"
          >
            {navItems.map((item, index) => (
              <TabNav.Link
                key={index}
                href="#"
                selected={index === currentItemIndex ? "page" : undefined}
                aria-current={index === currentItemIndex ? "page" : undefined}
                onClick={() => {
                  handleItemClick(index)
                  setShowFirstLayer(true)
                }}
                sx={{
                  fontSize: [1,1,2],
                  paddingRight: [2, 5, 6, 7, 9],
                  paddingLeft: [2, 5, 6, 7, 9],
                }}
              >
                {item}
              </TabNav.Link>
            ))}
          </TabNav>

          {/* SCROLLABLE VIEW */}
          {renderComponent()}
          
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
