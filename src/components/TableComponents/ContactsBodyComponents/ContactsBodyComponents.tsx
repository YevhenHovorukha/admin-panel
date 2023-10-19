import { TableBody, TableCell } from "@mui/material";

import { CONTACTS_DATA } from "../../../constants/mocks";
import { ReactComponent as MoreIcon } from "../../../assets/logos/more.svg";
import { useAppSelector } from "../../../redux/store";

import {
  BodyRow,
  UserBox,
  UserPhoto,
  TableCellText,
  TableCellAdressText,
} from "./styled";

interface ITicketsBodyComponents {
  page: number;
  rowsPerPage: number;
}

const ContactsBodyComponents = ({
  page,
  rowsPerPage,
}: ITicketsBodyComponents) => {
  const { data } = useAppSelector((store) => store.getContacts);
  const tableData = data?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableBody>
      {tableData &&
        tableData.map((rowData) => (
          <BodyRow key={rowData.id}>
            <TableCell align="left">
              <UserBox>
                <UserPhoto src={rowData.image} alt="userPhoto" />
                <TableCellText>{rowData.name}</TableCellText>
              </UserBox>
            </TableCell>
            <TableCell align="left">
              <TableCellText>{rowData.email}</TableCellText>
            </TableCell>
            <TableCell align="left">
              <TableCellAdressText>{rowData.address}</TableCellAdressText>
            </TableCell>
            <TableCell align="left">
              <TableCellText>{rowData.createdAt}</TableCellText>
            </TableCell>
            <TableCell align="center">
              <MoreIcon />
            </TableCell>
          </BodyRow>
        ))}
    </TableBody>
  );
};

export default ContactsBodyComponents;
