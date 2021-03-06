import { Box, Heading } from "theme-ui";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Chart = ({ heading, data, dataKey, margin }) => {
  return (
    <Box
      sx={{
        maxWidth: ["350px", "700px", "1250px"],
        mx: "auto",
        bg: "muted",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
        ":hover": {
          boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        },
      }}
      marginTop={margin}
    >
      <Heading sx={{ p: 2, textAlign: "center", mb: 3, fontSize: [3, 4, 4] }}>
        {heading}
      </Heading>
      <ResponsiveContainer width="90%" minHeight={300}>
        <LineChart data={data}>
          <Line
            strokeWidth={3}
            type="linear"
            dataKey={dataKey}
            dot={false}
            animationEasing="linear"
            animationDuration={1000}
          />

          <XAxis dataKey="date" strokeWidth={2} />
          <YAxis strokeWidth={2} type="number" />
          <Tooltip
            itemStyle={{ color: "black" }}
            wrapperStyle={{ color: "black" }}
            contentStyle={{ color: "black" }}
            labelStyle={{ color: "black" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Chart;
