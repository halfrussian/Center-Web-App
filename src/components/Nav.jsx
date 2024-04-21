import React, { useEffect, useState } from "react";
import { Text, Box, UnderlineNav, NavList } from "@primer/react";
import Democrat from "./Democrat";
import Republican from "./Republican";
import Center from "./Center";
import { HomeIcon } from "@primer/octicons-react";
import { SearchIcon } from "@primer/octicons-react";
import { StarIcon } from "@primer/octicons-react";
import AdSpace from "./AdSpace";

const Nav = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const handleItemClick = (index) => {
    setCurrentItemIndex(index); // Update state to reflect the clicked item index
  };

  const navItems = ["Democrat", "Center", "Republican"];

  const renderComponent = () => {
    switch (currentItemIndex) {
      case 0:
        return <Democrat />;
      case 1:
        return <Center />;
      case 2:
        return <Republican />;
      default:
        return null;
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        {<NavList></NavList>}
        <NavList
          sx={{
            width: ["15vw", "15vw", "20vw"],
            backgroundColor: "canvas.default",
            height: "100vh",
            position: "sticky",
            top: 0,
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

        <Box>
          <UnderlineNav
            sx={{
              display: ["block", "flex"],
              justifyContent: "center",
              backgroundColor: "canvas.default",
              width: ["85vw", "85vw", "60vw"],
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
                onClick={() => handleItemClick(index)}
                sx={{
                  fontSize: [2],
                  paddingRight: [3, 3, 6],
                  paddingLeft: [3, 3, 6],
                  marginTop: [1, 2, 4],
                  marginBottom: [0, 2],
                }}
              >
                {item}
              </UnderlineNav.Item>
            ))}
          </UnderlineNav>

          {/* SCROLLABLE VIEW */}
          <Box>{renderComponent()}</Box>
        </Box>
        <Box
        sx={{
          display:['none', 'none', 'block' ],
          width:['0vw','0vw', '20vw'],
          position: "sticky",top: 0, height: "100vh",}}
        >
        <AdSpace />
        </Box>
        
      </Box>
    </>
  );
};

export default Nav;
