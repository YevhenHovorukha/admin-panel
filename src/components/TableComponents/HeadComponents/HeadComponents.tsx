import { TableHead } from "@mui/material";

import { HeadRow, StyledHeadCell } from "./styled";

interface IHeadComponentsProps {
  columnsNames: [string, string, string, string];
}

const HeadComponents = ({ columnsNames }: IHeadComponentsProps) => {
  return (
    <TableHead>
      <HeadRow>
        <StyledHeadCell $cellWidth="first" align="left">
          {columnsNames[0]}
        </StyledHeadCell>
        <StyledHeadCell $cellWidth="second" align="left">
          {columnsNames[1]}
        </StyledHeadCell>
        <StyledHeadCell $cellWidth="third" align="left">
          {columnsNames[2]}
        </StyledHeadCell>
        <StyledHeadCell $cellWidth="fourth" align="left">
          {columnsNames[3]}
        </StyledHeadCell>
        <StyledHeadCell $cellWidth="fifth" align="left"></StyledHeadCell>
      </HeadRow>
    </TableHead>
  );
};

export default HeadComponents;
