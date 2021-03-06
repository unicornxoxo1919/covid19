import Head from "next/head";
import { Grid } from "theme-ui";
import StatCard from "../components/StatCard";
import fetch from "isomorphic-unfetch";
import Chart from "../components/Chart";
import LastUpdated from "../components/LastUpdated";
import GA from "../components/GA";

const Home = ({ covid, chart, stats }) => {
  const unixTimeStamp = covid.updated;

  const dateObject = new Date(unixTimeStamp);

  const humanDate = dateObject.toLocaleString("en-MU", {
    timeZone: "Indian/Mauritius",
    timeZoneName: "short",
  });

  const ChartData = Object.keys(chart.timeline.cases).map((date) => {
    return {
      date,
      Cases: chart.timeline.cases[date],
      Deaths: chart.timeline.deaths[date],
      Recovered: chart.timeline.recovered[date],
    };
  });

  return (
    <>
      <GA>
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

          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
        </Head>
        <Grid
          gap={3}
          columns={[[1, 4], "1fr 1fr 1fr 1fr "]}
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
            statToday={covid.recovered - stats.recovered}
          />
          <StatCard
            statHeading="Total Tests"
            statNumber={covid.tests}
            statToday={covid.tests - stats.tests}
          />
        </Grid>
        <Chart heading="Cases" data={ChartData} dataKey="Cases" />
        <Chart heading="Deaths" data={ChartData} dataKey="Deaths" margin={5} />
        <Chart
          heading="Recoveries"
          data={ChartData}
          dataKey="Recovered"
          margin={5}
        />
        <LastUpdated lastUpdated={humanDate} />
      </GA>
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("https://corona.lmao.ninja/v2/countries/Mauritius");
  const data = await res.json();
  const res1 = await fetch(
    "https://corona.lmao.ninja/v2/historical/Mauritius?lastdays=75"
  );
  const data2 = await res1.json();
  const res2 = await fetch(
    "https://corona.lmao.ninja/v2/countries/MUS?yesterday=true"
  );
  const data3 = await res2.json();

  return {
    covid: data,
    chart: data2,
    stats: data3,
  };
};

export default Home;
