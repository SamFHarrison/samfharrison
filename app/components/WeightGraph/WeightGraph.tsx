"use-client";

import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const allData = [
  { date: "2025-01-01", weight: 85 },
  { date: "2025-01-10", weight: 83 },
  { date: "2025-01-20", weight: 82 },
  { date: "2025-02-01", weight: 80 },
  { date: "2025-02-15", weight: 79 },
  { date: "2025-03-01", weight: 78 },
  { date: "2025-03-15", weight: 77 },
  { date: "2025-04-01", weight: 76.5 },
];

function filterData(data: { date: string; weight: number }[], range: string) {
  const now = new Date("2025-04-01"); // Replace with new Date() for live data
  let cutoff;
  if (range === "7d") cutoff = new Date(now.setDate(now.getDate() - 7));
  else if (range === "30d") cutoff = new Date(now.setDate(now.getDate() - 30));
  else if (range === "6m") cutoff = new Date(now.setMonth(now.getMonth() - 6));
  else return data;

  return data.filter((entry) => new Date(entry.date) >= cutoff);
}

export default function WeightGraph(): JSX.Element {
  const [range, setRange] = useState("30d");
  const data = filterData(allData, range);

  return (
    <div
      style={{
        width: "100%",
        height: "24rem",
        backgroundColor: "#111827",
        padding: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h2 style={{ color: "white", fontSize: "1.25rem" }}>
          Weight Loss Over Time
        </h2>
        <div>
          {["7d", "30d", "6m"].map((label) => (
            <button
              key={label}
              onClick={() => setRange(label)}
              style={{
                padding: "0.25rem 0.75rem",
                marginLeft: "0.5rem",
                borderRadius: "0.25rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                backgroundColor: range === label ? "#10B981" : "#1F2937",
                color: range === label ? "#000000" : "#ffffff",
                border: "none",
                cursor: "pointer",
              }}
            >
              {label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#1F2937" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            stroke="#9CA3AF"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: "#374151" }}
          />
          <YAxis
            domain={["auto", "auto"]}
            stroke="#9CA3AF"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: "#374151" }}
            unit=" kg"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              borderColor: "#4B5563",
            }}
            labelStyle={{ color: "#D1D5DB" }}
            itemStyle={{ color: "#F9FAFB" }}
            formatter={(value) => [`${value} kg`, "Weight"]}
          />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#10B981"
            strokeWidth={2.5}
            dot={{ r: 3, stroke: "#10B981", strokeWidth: 2, fill: "#111827" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
