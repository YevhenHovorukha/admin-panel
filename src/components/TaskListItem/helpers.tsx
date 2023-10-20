import { StatusBox, StatusText } from "./styled";

interface IStatusMarkerProps {
  backColor: "yellow" | "green" | "gray";
  text: string;
}

const StatusMarker = ({ backColor, text }: IStatusMarkerProps) => {
  return (
    <StatusBox backgroundcolor={backColor}>
      <StatusText>{text}</StatusText>
    </StatusBox>
  );
};

export const statusMarkers = {
  urgent: <StatusMarker backColor="yellow" text="urgent" />,
  default: <StatusMarker backColor="gray" text="default" />,
  new: <StatusMarker backColor="green" text="new" />,
};
