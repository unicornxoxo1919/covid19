import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Grid, Box, Spinner, Heading } from "theme-ui";
import StatCard from "../components/StatCard";
import fetch from "isomorphic-unfetch";

const Home = ({ covid, chart }) => {
  let array = chart;
  array.splice(0, 18);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return !loading ? (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Covid-19 Statistics</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icon-72x72.png"
          rel="icon"
          type="image/png"
          sizes="72x72"
        />
        <link
          href="/icon-144x144.png"
          rel="icon"
          type="image/png"
          sizes="144x144"
        />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Grid
        gap={3}
        columns={[[1, 4], "1fr 1fr 1fr 1fr"]}
        sx={{ p: [4, 4, 6], pt: [4, 4, 5] }}
      >
        <StatCard
          statHeading="Cases"
          statNumber={covid.cases}
          statToday={covid.todayCases}
        />
        <StatCard
          statHeading="Deaths"
          statNumber={covid.deaths}
          statToday={covid.todayDeaths}
        />
        <StatCard
          statHeading="Recovered"
          statNumber={covid.recovered}
          statToday="0"
        />
        <StatCard
          statHeading="Critical"
          statNumber={covid.critical}
          statToday="0"
        />
      </Grid>
      <Box
        sx={{
          maxWidth: ["350px", "700px", "1250px"],
          mx: "auto",
          bg: "muted",
          p: 1,
          borderLeft: "4px solid",
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)"
        }}
      >
        <Heading sx={{ p: 2, textAlign: "center" }}>Progression Curve</Heading>
        <ResponsiveContainer width="90%" minHeight={300}>
          <LineChart data={array}>
            <Line
              strokeWidth={3}
              type="monotoneX"
              dataKey="confirmed"
              stroke="tomato"
            />

            <XAxis dataKey="date" stroke="tomato" strokeWidth={3} />
            <YAxis strokeWidth={3} stroke="tomato" type="number" />
            <Tooltip
              itemStyle={{ color: "black" }}
              wrapperStyle={{ color: "black" }}
              contentStyle={{ color: "black" }}
              labelStyle={{ color: "black" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </>
  ) : (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Spinner color="secondary" size={75} />
    </Box>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("https://corona.lmao.ninja/countries/Mauritius");
  const data = await res.json();
  const res1 = await fetch("https://pomber.github.io/covid19/timeseries.json");
  const data2 = await res1.json();
  return {
    covid: data,
    chart: data2["Mauritius"]
  };
};

export default Home;
