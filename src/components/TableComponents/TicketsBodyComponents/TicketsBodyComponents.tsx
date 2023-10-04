import { TableBody, TableCell } from "@mui/material";

import CellTextItem from "../CellTextItem";
import { TICKETS_DATA } from "../../../constants/mocks";
import { ReactComponent as MoreIcon } from "../../../assets/logos/more.svg";

import { BodyRow, UserBox, UserPhoto } from "./styled";
import { priorityMarkers } from "./helper";

interface ITicketsBodyComponents {
  page: number;
  rowsPerPage: number;
}

const TicketsBodyComponents = ({
  page,
  rowsPerPage,
}: ITicketsBodyComponents) => {
  const tableData = TICKETS_DATA.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableBody>
      {tableData.map((rowData) => (
        <BodyRow key={`${Math.random()} ${Math.random()}`}>
          <TableCell align="left">
            <UserBox>
              <UserPhoto src={rowData.image} alt="userPhoto" />
              <CellTextItem
                title={rowData.details.text}
                info={`Updated ${rowData.details.updated} day ago`}
              />
            </UserBox>
          </TableCell>
          <TableCell align="left">
            <CellTextItem
              title={rowData.name.customerName}
              info={`on ${rowData.name.on}`}
            />
          </TableCell>
          <TableCell align="left">
            <CellTextItem title={rowData.date.day} info={rowData.date.time} />
          </TableCell>
          <TableCell align="left">
            {priorityMarkers[rowData.priority]}
          </TableCell>
          <TableCell align="center">
            <MoreIcon />
          </TableCell>
        </BodyRow>
      ))}
    </TableBody>
  );
};

export default TicketsBodyComponents;
