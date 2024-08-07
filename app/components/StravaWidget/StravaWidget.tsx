"use client";

import { Bar, BarChart, Cell, Pie, PieChart, XAxis } from "recharts";
import "./StravaWidget.css";

export default function StravaWidget() {
  const breakdownData = [
    { day: 1, label: "M", distanceRun: 0 },
    { day: 2, label: "T", distanceRun: 5 },
    { day: 3, label: "W", distanceRun: 0 },
    { day: 4, label: "T", distanceRun: 0 },
    { day: 5, label: "F", distanceRun: 3 },
    { day: 6, label: "S", distanceRun: 10 },
    { day: 7, label: "S", distanceRun: 0 },
  ];

  const summaryData = [
    {
      name: "Total Distance",
      value: breakdownData.reduce((total, item) => total + item.distanceRun, 0),
    },
    {
      name: "Goal Distance",
      value:
        20 - breakdownData.reduce((total, item) => total + item.distanceRun, 0),
    },
  ];

  const COLORS = ["#007aff", "#7f7f7f50"];

  return (
    <div className="card">
      <div className="widget-left">
        <BarChart
          data={breakdownData}
          id="distance-chart"
          width={150}
          height={80}
          margin={{ bottom: 0, left: 0, right: 0, top: 0 }}
          barCategoryGap={5}
        >
          <Bar
            dataKey="distanceRun"
            id="distance-bar"
            fill="#007aff"
            minPointSize={1}
          />
          <XAxis
            dataKey="label"
            height={16}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#fff", fontFamily: "", fontSize: "10px" }}
          />
        </BarChart>
        {/* <div className="info">
          <p className="small-print">Powered by</p>
          <Image src={StravaLogo} alt="Strava logo" width={40} />
        </div> */}
      </div>
      <div className="widget-right">
        <PieChart width={160} height={160}>
          <Pie
            data={summaryData}
            dataKey="value"
            fill="#007aff"
            innerRadius={56}
            outerRadius={60}
            startAngle={450}
            endAngle={90}
          >
            {summaryData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
            ))}
          </Pie>
          <div className="summary-info">
            <p>{summaryData[0].value}</p>
            <p>{`of ${summaryData[1].value}`}</p>
          </div>
        </PieChart>
      </div>
    </div>
  );
}
