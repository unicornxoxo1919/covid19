import { Box, Text, Link } from "theme-ui";

const LastUpdated = ({ lastUpdated }) => {
  return (
    <Box
      as="footer"
      sx={{
        mx: "auto",
        textAlign: "center",
        maxWidth: ["350px", "700px", "1250px"],
        p: 5,
      }}
    >
      <Text sx={{ fontWeight: "bold", fontSize: [1, 2, 2] }}>
        Last updated at {lastUpdated}
      </Text>
      <Text sx={{ fontWeight: "bold", fontSize: [1, 2, 2] }}>
        This is not a government of mauritius website
      </Text>
      <Link
        href="https://github.com/unicornxoxo1919/covid19"
        sx={{
          textDecoration: "none",
          fontWeight: "700",

          color: "gray",
          fontSize: [3, 3, 4],
        }}
      >
        GitHub
      </Link>
    </Box>
  );
};

export default LastUpdated;
