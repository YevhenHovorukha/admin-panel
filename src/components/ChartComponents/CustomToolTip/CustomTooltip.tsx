import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { TooltipProps } from "recharts";

import { ReactComponent as TooltipIcon } from "../../../assets/logos/tooltip.svg";

import { TooltipBox, TooltipText } from "./styled";

interface IIconTooltipProps {
  value: ValueType | undefined;
}

const IconTooltip = ({ value }: IIconTooltipProps) => {
  return (
    <>
      <TooltipIcon />
      <TooltipBox>
        <TooltipText>{value}</TooltipText>
      </TooltipBox>
    </>
  );
};

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return <IconTooltip value={payload?.[1]?.value} />;
  }
  return null;
};

export default CustomTooltip;
