import { ReactComponent as FilterIcon } from "../../../assets/logos/filter.svg";
import { ReactComponent as SortIcon } from "../../../assets/logos/sort.svg";

import {
  PreHeaderBoxWrapper,
  SortAndFilterBox,
  SortAndFilterItem,
  SortAndFilterItemText,
  AddContactText,
} from "./styled";

interface IPreHeaderBoxProps {
  handleOpen: () => void;
}

const PreHeaderBox = ({ handleOpen }: IPreHeaderBoxProps) => {
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
      <AddContactText onClick={handleOpen}>+ &nbsp;Add contact</AddContactText>
    </PreHeaderBoxWrapper>
  );
};

export default PreHeaderBox;
