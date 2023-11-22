import React, { useState } from "react";
import {
  Text,
  Header,
  Avatar,
  Box,
  ActionList,
  Tooltip,
  IconButton
} from "@primer/react";
import Image from "../assets/heroimg.jpeg";
import Switch from "react-switch";
import "./Nav.css";
import { ThreeBarsIcon } from "@primer/octicons-react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const [checkered, setCheckered] = useState(false);
  const [active, setActive] = useState(false);

  const handleCollapse = () => {
    props.setThemeStyles(props.themeStyles === "dark" ? "light" : "dark");
    setCheckered(!checkered);
  };

  return (
    <>
      <Box display='flex' sx={{ justifyContent: 'center', width: "100%", backgroundColor: "canvas.default"}}>
        <Header
          sx={{
            backgroundColor: "canvas.default",
            paddingTop: '5',
            paddingBottom: '5'
           // margin: ["auto", "auto", "auto", "auto 100px"],
          }}
          className="desktopHeader"
        >
          <Header.Item full>
            <Avatar
              src={Image}
              sx={{ width: "48px", height: "48px", borderRadius: "50%" }}
            />
            <Text
              sx={{
                fontSize: 3,
                ml: 3,
                fontWeight: "bold",
                color: "fg.default",
                ":hover": { textDecoration: "none", color: "fg.muted" },
              }}
            >
              Joshua Bracken
            </Text>
          </Header.Item>
          <Header.Item>
            <Header.Link
              sx={{
                fontSize: 3,
                color: "fg.default",
                ":hover": { textDecoration: "none", color: "fg.muted" },
              }}
              href='/'
            >
              Home
            </Header.Link>
          </Header.Item>
          <Header.Item>
          
            <Header.Link
              sx={{
                fontSize: 3,
                color: "fg.default",
                ":hover": { textDecoration: "none", color: "fg.muted" },
              }}
              href='/about'
            >
              About
            </Header.Link>
          </Header.Item>
          <Header.Item>
            <Header.Link
              sx={{
                fontSize: 3,
                color: "fg.default",
                ":hover": { textDecoration: "none", color: "fg.muted" },
              }}
            >
              Resume
            </Header.Link>
          </Header.Item>
          <Header.Item>
            <Header.Link
              sx={{
                fontSize: 3,
                color: "fg.default",
                ":hover": { textDecoration: "none", color: "fg.muted" },
              }}
              href='/interests'
            >
              Interests
            </Header.Link>
          </Header.Item>
          <Header.Item>
            <Header.Link sx={{ fontSize: 3 }}>
              <Switch
                onChange={handleCollapse}
                checkedIcon={
                  <BsFillMoonStarsFill
                    style={{ marginTop: "-4px", marginLeft: "7px" }}
                  />
                }
                uncheckedIcon={
                  <FaSun
                    style={{
                      width: "18px",
                      marginTop: "-5px",
                      marginLeft: "5px",
                      color: "#FF8604 ",
                    }}
                  />
                }
                checked={checkered}
                onColor={"#004C6D"}
                offColor={"#04B3FF"}
              />
            </Header.Link>
          </Header.Item>
        </Header>

        {/* mobile header */}
      </Box>
      <Header
        sx={{
          backgroundColor: "canvas.default",
        }}
        className="mobileHeader"
      >
        
          <Header.Item full>
            <Avatar
              src={Image}
              sx={{ width: "48px", height: "48px", borderRadius: "50%" }}
            />
            <Text
              sx={{
                fontSize: 3,
                ml: 3,
                fontWeight: "bold",
                color: "fg.default",
                ":hover": { textDecoration: "none", color: "fg.muted" },
              }}
            >
              Joshua Bracken
            </Text>
          </Header.Item>

          <Header.Item>
            <Tooltip
              noDelay={true}
              direction="s"
              aria-label="Menu"
              className="actionMenuListItem"
            >
              <IconButton
                icon={ThreeBarsIcon}
                aria-label="Default"
                className="threeBarIcon"
                onClick={() => setActive(!active)}
              />
            </Tooltip>
          </Header.Item>
        
        
      </Header>
      {active && (
          <ActionList 
          sx={{backgroundColor: 'canvas.default'}}
          className="actionList"
          >
            <ActionList.Item
                sx={{
                    fontSize: 3,
                    color: "fg.default",
                    ":hover": { textDecoration: "none", color: "fg.muted" },
                }}
                >
                  <Header.Link
              sx={{
                fontSize: 3,
                color: "fg.default",
                ":hover": { textDecoration: "none", color: "fg.muted" },
              }}
              href='/'
            >
              Home
            </Header.Link>
              
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item
                sx={{
                    fontSize: 3,
                    color: "fg.default",
                    ":hover": { textDecoration: "none", color: "fg.muted" },
                }}
              
                >
              <Header.Link
              sx={{
                fontSize: 3,
                color: "fg.default",
                ":hover": { textDecoration: "none", color: "fg.muted" },
              }}
              href='/about'
            >
              About
            </Header.Link>
            </ActionList.Item>
            <ActionList.Divider />
            
            <ActionList.Item
                sx={{
                    fontSize: 3,
                    color: "fg.default",
                    ":hover": { textDecoration: "none", color: "fg.muted" },
                }}
                >
             <Header.Link
              sx={{
                fontSize: 3,
                color: "fg.default",
                ":hover": { textDecoration: "none", color: "fg.muted" },
              }}
              
            >
              Resume
            </Header.Link>
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item
                sx={{
                    fontSize: 3,
                    color: "fg.default",
                    ":hover": { textDecoration: "none", color: "fg.muted" },
                }}
               
                >
            <Header.Link
              sx={{
                fontSize: 3,
                color: "fg.default",
                ":hover": { textDecoration: "none", color: "fg.muted" },
              }}
              href='/interests'
            >
              Interests
            </Header.Link>
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item className="actionMenuListItem">
            <Switch
                onChange={handleCollapse}
                checkedIcon={
                  <BsFillMoonStarsFill
                    style={{ marginTop: "6px", marginLeft: "8px" }}
                  />
                }
                uncheckedIcon={
                  <FaSun
                    style={{
                      width: "18px",
                      marginTop: "6px",
                      marginLeft: "4px",
                      color: "#FF8604 ",
                    }}
                  />
                }
                checked={checkered}
                onColor={"#004C6D"}
                offColor={"#04B3FF"}
            />
            </ActionList.Item>
          </ActionList>
        )}
    </>
  );
};

export default Nav;
