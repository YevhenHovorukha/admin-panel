import { ReactComponent as FilterIcon } from "../../../assets/logos/filter.svg";
import { ReactComponent as SortIcon } from "../../../assets/logos/sort.svg";

import {
  PreHeaderBoxWrapper,
  SortAndFilterBox,
  SortAndFilterItem,
  SortAndFilterItemText,
  AddText,
} from "./styled";

interface IPreHeaderBoxProps {
  text: string;
  handleOpen: () => void;
}

const PreHeaderBox = ({ handleOpen, text }: IPreHeaderBoxProps) => {
  return (
    <PreHeaderBoxWrapper>
      <SortAndFilterBox>
        <SortAndFilterItem>
          <SortIcon />
          <SortAndFilterItemText>Sort</SortAndFilterItemText>
        </SortAndFilterItem>
        <SortAndFilterItem>
          <FilterIcon />
          <SortAndFilterItemText>Filter</SortAndFilterItemText>
        </SortAndFilterItem>
      </SortAndFilterBox>
      <AddText onClick={handleOpen}>+ &nbsp;Add {text}</AddText>
    </PreHeaderBoxWrapper>
  );
};

export default PreHeaderBox;
