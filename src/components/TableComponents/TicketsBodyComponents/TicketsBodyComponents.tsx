import { TableBody, TableCell } from "@mui/material";

import CellTextItem from "../CellTextItem";
import { TICKETS_DATA } from "../../../constants";
import { ReactComponent as MoreIcon } from "../../../assets/logos/more.svg";

import { BodyRow, UserBox, UserPhoto } from "./styled";
import { priorityMarkers } from "./helper";

const TicketsBodyComponents = () => {
  return (
    <TableBody>
      {TICKETS_DATA.map((row) => (
        <BodyRow key={`${Math.random()} ${Math.random()}`}>
          <TableCell align="left">
            <UserBox>
              <UserPhoto src={row.image} alt="userPhoto" />
              <CellTextItem
                main={row.details.text}
                additional={`Updated ${row.details.updated} day ago`}
              />
            </UserBox>
          </TableCell>
          <TableCell align="left">
            <CellTextItem
              main={row.name.customerName}
              additional={`on ${row.name.on}`}
            />
          </TableCell>
          <TableCell align="left">
            <CellTextItem main={row.date.day} additional={row.date.time} />
          </TableCell>
          <TableCell align="left">{priorityMarkers[row.priority]}</TableCell>
          <TableCell align="center">
            <MoreIcon />
          </TableCell>
        </BodyRow>
      ))}
    </TableBody>
  );
};

export default TicketsBodyComponents;
