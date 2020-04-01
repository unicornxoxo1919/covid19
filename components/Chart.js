import { Box, Heading } from "theme-ui";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = ({ heading, data, dataKey, ...props }) => {
  return (
    <Box
      sx={{
        maxWidth: ["350px", "700px", "1250px"],
        mx: "auto",
        bg: "muted",
        borderLeft: "4px solid",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
        mt: 5
      }}
    >
      <Heading sx={{ p: 2, textAlign: "center", mb: 3, fontSize: [3, 4, 4] }}>
        {heading}
      </Heading>
      <ResponsiveContainer width="90%" minHeight={300}>
        <LineChart data={data}>
          <Line
            strokeWidth={3}
            type="monotoneX"
            dataKey={dataKey}
            stroke="#FF4136"
            dot={false}
            animationEasing="linear"
            animationDuration={2500}
          />

          <XAxis dataKey="date" stroke="#FF4136" strokeWidth={2} />
          <YAxis strokeWidth={2} stroke="#FF4136" type="number" />
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
