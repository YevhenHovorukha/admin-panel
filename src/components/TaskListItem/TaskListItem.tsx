import { Checkbox, FormControlLabel } from "@mui/material";

import { ReactComponent as CircleCheckedIcon } from "../../assets/logos/circleChecked.svg";
import { ReactComponent as CircleUnchackedIcon } from "../../assets/logos/circleUnchacked.svg";

import { StyledBox } from "./styled";
import { statusMarkers } from "./helpers";

interface ITaskListItemProps {
  label: string;
  status: "urgent" | "new" | "default";
}

const TaskListItem = ({ label, status }: ITaskListItemProps) => {
  const CircleCheckBox = (
    <Checkbox
      icon={<CircleCheckedIcon />}
      checkedIcon={<CircleUnchackedIcon />}
    />
  );

  return (
    <StyledBox>
      <FormControlLabel label={label} control={CircleCheckBox} />
      {statusMarkers[status]}
    </StyledBox>
  );
};

export default TaskListItem;
