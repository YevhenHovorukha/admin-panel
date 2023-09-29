import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination, Box, Typography } from "@mui/material";
import styled from "styled-components";

import { ReactComponent as FilterIcon } from "../../assets/logos/filter.svg";
import { ReactComponent as SortIcon } from "../../assets/logos/sort.svg";
import { ReactComponent as MoreIcon } from "../../assets/logos/more.svg";
import UserImage from "../../assets/images/UserImage.png";

import { priorityMarkers } from "./helper";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const PreHeaderBox = styled(Box)`
  padding: 37px 32px;
  display: flex;
  justify-content: space-between;
`;

const SortAndFilterBox = styled(Box)`
  display: flex;
  gap: 31px;
`;

const SortAndFilterItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const SortAndFilterItemText = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

const AddContactText = styled(Typography)`
  color: #3751ff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.2px;
  cursor: pointer;
`;

const UserPhoto = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledTable = styled(Table)`
  min-width: 1122px;
`;

const FirstCell = styled(TableCell)`
  min-width: 512px;
`;

const SecondCell = styled(TableCell)`
  min-width: 248px;
`;
const ThirtCell = styled(TableCell)`
  min-width: 180px;
`;
const FourthCell = styled(TableCell)`
  min-width: 104px;
`;

const FifthCell = styled(TableCell)`
  min-width: 77px;
`;

const HeadRow = styled(TableRow)`
  & > th {
    padding: 7px 0 8px;
    align-items: center;
    color: #9fa2b4;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.2px;
    border-bottom: 2px solid #dfe0eb;
  }
  & th:first-child {
    padding-left: 32px;
  }
`;

const BodyRow = styled(TableRow)`
  & > td {
    border-bottom: 2px solid #dfe0eb;
    padding: 24px 0;
  }

  & td:first-child {
    padding: 24px 40px 24px 32px;
  }

  &:last-child {
    td,
    th {
      border: 0;
    }
  }
  &:hover {
    background: rgba(55, 81, 255, 0.04);
  }
`;

const CellTextMain = styled(Typography)`
  color: #252733;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.2px;
`;

const CellTextAdd = styled(Typography)`
  color: #c5c7cd;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.1px;
`;

const CellTextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PriorityBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 24px;
  min-width: 54px;
  max-width: 76px;
  border-radius: 100px;
  background: #f12b2c;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const CellText = ({
  main,
  additional,
}: {
  main: string;
  additional: string;
}) => {
  return (
    <CellTextBox>
      <CellTextMain>{main}</CellTextMain>
      <CellTextAdd>{additional}</CellTextAdd>
    </CellTextBox>
  );
};

const ContactsTable = () => {
  return (
    <TableContainer component={Paper}>
      <PreHeaderBox>
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
        <AddContactText>+ &nbsp;Add contact</AddContactText>
      </PreHeaderBox>
      <StyledTable aria-label="simple table">
        <TableHead>
          <HeadRow>
            <FirstCell align="left">Ticket details</FirstCell>
            <SecondCell align="left">Customer name</SecondCell>
            <ThirtCell align="left">Date</ThirtCell>
            <FourthCell align="left">Priority</FourthCell>
            <FifthCell align="left"></FifthCell>
          </HeadRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <BodyRow key={row.name}>
              <TableCell align="left">
                <Box
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <UserPhoto src={UserImage} alt="userPhoto" />
                  <CellText
                    main="Contact Email not Linked"
                    additional="Updated 1 day ago"
                  />
                </Box>
              </TableCell>
              <TableCell align="left">
                <CellText main="Tom Cruise" additional="on 24.05.2019" />
              </TableCell>
              <TableCell align="left">
                <CellText main="May 26, 2019" additional="6:30 PM" />
              </TableCell>
              <TableCell align="left">{priorityMarkers["low"]}</TableCell>
              <TableCell align="center">
                <MoreIcon />
              </TableCell>
            </BodyRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default ContactsTable;
