import { Card, Text, Heading, Badge, Flex } from "theme-ui";

const StatCard = ({ statHeading, statNumber, statToday }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        borderLeft: "2px solid",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
        p: 2,
        bg: "muted",
      }}
    >
      <Flex flexDirection="row" sx={{ justifyContent: "space-between" }}>
        <Heading>{statNumber}</Heading>
        <Badge sx={{ mt: "7px", mb: "7px", bg: "red" }}>
          +{statToday} today
        </Badge>
      </Flex>
      <Text>{statHeading}</Text>
    </Card>
  );
};

export default StatCard;
