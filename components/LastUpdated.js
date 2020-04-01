import { Box, Text, Link } from "theme-ui";

const LastUpdated = ({ lastUpdated }) => {
  return (
    <Box
      sx={{
        mx: "auto",
        textAlign: "center",
        maxWidth: ["350px", "700px", "1250px"],
        p: 5
      }}
    >
      <Text sx={{ fontWeight: "bold", fontSize: [2, 3, 4] }}>
        API was last updated at {lastUpdated}
      </Text>
      <Link
        href="https://github.com/novelcovid/api"
        sx={{ textDecoration: "none", color: "secondary", fontSize: [2, 3, 4] }}
      >
        API
      </Link>
    </Box>
  );
};

export default LastUpdated;
