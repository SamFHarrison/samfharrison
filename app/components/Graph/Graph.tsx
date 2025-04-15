"use client";

// TODO: Refactor this whole file
// I just wanted something to visualise my weight loss data ASAP

import {
  addDays,
  eachWeekOfInterval,
  format,
  getDay,
  parseISO,
} from "date-fns";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useBodyWeightLog } from "../../hooks/useBodyWeightLog";

const Graph = () => {
  const { data: bodyWeightData } = useBodyWeightLog();
  console.log("data", bodyWeightData);

  const data =
    bodyWeightData?.map((entry) => ({
      ...entry,
      dateValue: new Date(entry.timestamp).getTime(),
    })) || [];

  const startTimestamp = Math.min(...data.map((d) => d.dateValue));
  const endTimestamp = Math.max(...data.map((d) => d.dateValue));

  const offset = (8 - getDay(new Date(startTimestamp))) % 7; // 0 if Monday, else days to next Monday
  const firstMonday = addDays(new Date(startTimestamp), offset);

  const xAxisTicks = eachWeekOfInterval(
    {
      start: firstMonday,
      end: new Date(endTimestamp),
    },
    { weekStartsOn: 1 }
  ).map((date) => date.getTime());

  const weightValues = data.map((d) => d.weight);
  const rawMinWeight = Math.min(...weightValues);
  const rawMaxWeight = Math.max(...weightValues);
  const minWeight = Math.floor(rawMinWeight);
  const maxWeight = Math.ceil(rawMaxWeight);

  const yAxisTicks = Array.from(
    { length: maxWeight - minWeight + 1 },
    (_, i) => minWeight + i
  );

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: any;
    label?: string;
  }) => {
    if (active && payload?.length) {
      const { weight, timestamp } = payload[0].payload;
      return (
        <div
          style={{ background: "white", padding: "8px", borderRadius: "4px" }}
        >
          <strong>{weight} kg</strong>
          <br />
          <span>{format(parseISO(timestamp), "PPpp")}</span>
        </div>
      );
    }
    return null;
  };

  if (!data.length) return null;

  return (
    <div style={{ maxWidth: "500px", width: "100%" }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="rgba(117, 117, 117, 0.5)" vertical={false} />
          <XAxis
            dataKey="dateValue"
            scale="time"
            type="number"
            domain={[startTimestamp, endTimestamp]}
            ticks={xAxisTicks}
            tickFormatter={(value) => format(new Date(value), "d/M")}
            stroke="#ccc"
            tick={{ fontSize: "0.75rem" }}
            tickMargin={12}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            orientation="right"
            dataKey="weight"
            domain={[minWeight, maxWeight]}
            ticks={yAxisTicks}
            tickFormatter={(value) => `${value}kg`}
            allowDecimals={false}
            stroke="#ccc"
            tick={{ fontSize: "0.75rem" }}
            tickMargin={12}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="linear"
            dataKey="weight"
            stroke="#1784f9"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
