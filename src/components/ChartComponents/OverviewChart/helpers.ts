export const DATA_CHART = [
  {
    name: 0,
    uv: 20,
    pv: 45,
  },
  {
    name: 1,
    uv: 57,
    pv: 35,
  },
  {
    name: 2,
    uv: 8,
    pv: 60,
  },
  {
    name: 3,
    uv: 16,
    pv: 17,
  },
  {
    name: 4,
    uv: 50,
    pv: 25,
  },
  {
    name: 5,
    uv: 48,
    pv: 21,
  },
  {
    name: 6,
    uv: 30,
    pv: 47,
  },
  {
    name: 7,
    uv: 5,
    pv: 32,
  },
  {
    name: 8,
    uv: 5,
    pv: 12,
  },
  {
    name: 9,
    uv: 5,
    pv: 49,
  },
  {
    name: 10,
    uv: 5,
    pv: 16,
  },
];

export const horizontalLines = [0, 10, 20, 30, 40, 50, 60];

export interface DataPoint {
  x: number;
  y: number;
}
export interface DataPointPayload extends DataPoint {
  x: number;
  y: number;
  payload: { name: number };
}

export const findPosition = (
  points: DataPointPayload[],
  tooltipData: number
) => {
  if (points && tooltipData) {
    const currentPoint = points.find(
      (item) => item.payload.name === tooltipData
    );
    if (currentPoint) {
      return { x: currentPoint.x - 37.5, y: currentPoint.y - 60 };
    }
  }
};
