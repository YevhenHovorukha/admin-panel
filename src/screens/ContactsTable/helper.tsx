import { PriorityBoxRed, PriorityBoxYellow, PriorityBoxGreen } from "./styled";

interface IPriorityObj {
  low: JSX.Element;
  high: JSX.Element;
  normal: JSX.Element;
}

export const priorityMarkers = {
  low: <PriorityBoxYellow>Low</PriorityBoxYellow>,
  high: <PriorityBoxRed>high</PriorityBoxRed>,
  normal: <PriorityBoxGreen>normal</PriorityBoxGreen>,
};
