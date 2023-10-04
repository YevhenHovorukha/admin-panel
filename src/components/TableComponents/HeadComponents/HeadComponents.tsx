import { TableHead } from "@mui/material";

import { HeadRow, ICellObj, StyledHeadCell } from "./styled";

interface IHeadComponentsProps {
  columnsNames: string[];
}

const HeadComponents = ({ columnsNames }: IHeadComponentsProps) => {
  const CellWidthArray: (keyof ICellObj)[] = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
  ];

  return (
    <TableHead>
      <HeadRow>
        {columnsNames.map((item, index) => (
          <StyledHeadCell
            key={item}
            $cellWidth={CellWidthArray[index] || "fifth"}
            align="left"
          >
            {item}
          </StyledHeadCell>
        ))}
      </HeadRow>
    </TableHead>
  );
};

export default HeadComponents;
