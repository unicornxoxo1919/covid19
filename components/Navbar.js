import React from "react";
import { Flex, NavLink, useColorMode } from "theme-ui";
import { useMediaQuery } from "react-responsive";

const Navbar = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode();

  const isMobile = useMediaQuery({ query: "(min-device-width:700px)" });

  return (
    <Flex
      as="nav"
      {...props}
      sx={{
        justifyContent: "space-around",
        flexDirection: "row",
        bg: "background",
      }}
    >
      <div sx={{ alignItems: "flex-start" }}>
        {isMobile ? (
          <NavLink
            sx={{ p: 2, fontSize: [1, 3, 4], ":hover": { color: "secondary" } }}
            href="/"
          >
            Covid-19
          </NavLink>
        ) : (
          <NavLink
            sx={{ p: 2, fontSize: [1, 3, 4], ":hover": { color: "secondary" } }}
            href="/"
          >
            Refresh
          </NavLink>
        )}
      </div>
      <div sx={{ alignItems: "flex-end" }}>
        <NavLink
          p={2}
          ml={4}
          sx={{
            color: "text",
            fontSize: [1, 3, 4],
            cursor: "pointer",
            ":active": { border: "3px solid #e7e7e7" },
          }}
          onClick={(e) => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        >
          {colorMode === "default" ? "Deep" : "Swiss"}
        </NavLink>
      </div>
    </Flex>
  );
};

export default Navbar;
