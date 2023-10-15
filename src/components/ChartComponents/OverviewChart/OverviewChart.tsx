import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";

import { THEME } from "../../../theme";
import CustomToolTip from "../CustomToolTip";
import CustomizedDot from "../CustomizedDot";

import {
  DATA_CHART,
  DataPointPayload,
  findPosition,
  horizontalLines,
} from "./helpers";
import {
  ChartWrapper,
  XAxisTicksStyle,
  YAxisTicksStyle,
  displayNone,
} from "./styled";

const OverviewChart = () => {
  const [tooltipPositionName, setTooltipPositionName] = useState(0);
  const [points, setposPoints] = useState<DataPointPayload[]>();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const TooltipObjPosition = points
    ? findPosition(points, tooltipPositionName)
    : { x: mousePosition.x, y: mousePosition.y };

  const handlerMouseOver = (data: any) => {
    setposPoints(data.points);
  };

  const handlerMouseMove = (e: any) => {
    if (e.activePayload) {
      setTooltipPositionName(e.activePayload?.[1].payload.name);
    }
    setMousePosition({ x: Number(e.chartX), y: Number(e.chartY) });
  };

  return (
    <ChartWrapper>
      <AreaChart
        width={726}
        height={380}
        data={DATA_CHART}
        margin={{
          top: 10,
        }}
        onMouseMove={handlerMouseMove}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(55, 81, 255, 0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          tick={XAxisTicksStyle}
          tickLine={displayNone}
          axisLine={false}
        />
        <YAxis
          orientation="right"
          tick={YAxisTicksStyle}
          tickLine={displayNone}
          axisLine={false}
          ticks={horizontalLines}
        />
        <Tooltip content={<CustomToolTip />} position={TooltipObjPosition} />

        {horizontalLines.map((lineValue, index) => (
          <ReferenceLine key={index} y={lineValue} stroke="#EBEDF0" />
        ))}
        <Area
          type="monotone"
          dataKey="uv"
          stroke={THEME.COLORS.LIGHT_GRAY}
          strokeWidth={2}
          fill="transparent"
          activeDot={displayNone}
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke={THEME.COLORS.MAIN_BLUE}
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorPv)"
          activeDot={<CustomizedDot />}
          onMouseMove={handlerMouseOver}
        />
      </AreaChart>
    </ChartWrapper>
  );
};

export default OverviewChart;
