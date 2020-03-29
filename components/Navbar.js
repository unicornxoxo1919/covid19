import { Flex, NavLink, useColorMode } from "theme-ui";

const Navbar = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode();
  console.log(colorMode);
  return (
    <Flex
      as="nav"
      {...props}
      sx={{
        justifyContent: "space-around",
        flexDirection: "row",
        bg: "background"
      }}
    >
      <div sx={{ alignItems: "flex-start" }}>
        <NavLink
          sx={{ p: 2, fontSize: [1, 3, 4], ":hover": { color: "secondary" } }}
          href="/"
        >
          Covid-19
        </NavLink>
      </div>
      <div sx={{ alignItems: "flex-end" }}>
        <NavLink
          href="/symptoms"
          p={2}
          sx={{ fontSize: [1, 3, 4], ":hover": { color: "secondary" } }}
        >
          Symptoms
        </NavLink>
        <NavLink
          href="/stores"
          p={2}
          sx={{ fontSize: [1, 3, 4], ":hover": { color: "secondary" } }}
        >
          Stores
        </NavLink>
        <NavLink
          p={1}
          ml={4}
          sx={{
            color: "text",
            fontSize: [1, 3, 3],
            ":active": { border: "3px solid #e7e7e7" }
          }}
          onClick={e => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        >
          {colorMode === "default" ? "Night" : "Day"}
        </NavLink>
      </div>
    </Flex>
  );
};

export default Navbar;
