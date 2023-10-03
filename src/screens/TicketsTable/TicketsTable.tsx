import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination, Box, Typography } from "@mui/material";
import styled from "styled-components";

import TicketsModal from "../../components/TicketsModal";
import { ReactComponent as FilterIcon } from "../../assets/logos/filter.svg";
import { ReactComponent as SortIcon } from "../../assets/logos/sort.svg";
import { ReactComponent as MoreIcon } from "../../assets/logos/more.svg";
import UserImage from "../../assets/images/UserImage.png";
import { TICKETS_DATA } from "../../constants";

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

interface ICellObj {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

const cellObj: ICellObj = {
  first: "512px",
  second: "248px",
  third: "180px",
  fourth: "104px",
  fifth: "77px",
};

const StyledCell = styled(TableCell)<{ $cellWidth: keyof ICellObj }>`
  min-width: ${(props) => cellObj[props.$cellWidth]};
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
    box-sizing: border-box;
  }

  & td:first-child {
    padding: 20px 40px 22px 32px;
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

const UserBox = styled(Box)`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const StyledPagination = styled(TablePagination)`
  height: 72px;
  overflow: hidden;
  color: #9fa2b4;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
  &:last-child {
    padding: 10px 20px 24px;
  }
` as typeof TablePagination;

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

const TicketsTable = () => {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
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
          <AddContactText onClick={handleOpen}>
            + &nbsp;Add contact
          </AddContactText>
        </PreHeaderBox>
        <StyledTable aria-label="simple table">
          <TableHead>
            <HeadRow>
              <StyledCell $cellWidth="first" align="left">
                Ticket details
              </StyledCell>
              <StyledCell $cellWidth="second" align="left">
                Customer name
              </StyledCell>
              <StyledCell $cellWidth="third" align="left">
                Date
              </StyledCell>
              <StyledCell $cellWidth="fourth" align="left">
                Priority
              </StyledCell>
              <StyledCell $cellWidth="fifth" align="left"></StyledCell>
            </HeadRow>
          </TableHead>
          <TableBody>
            {TICKETS_DATA.map((row) => (
              <BodyRow key={`${Math.random()} ${Math.random()}`}>
                <TableCell align="left">
                  <UserBox>
                    <UserPhoto src={row.image} alt="userPhoto" />
                    <CellText
                      main={row.details.text}
                      additional={`Updated ${row.details.updated} day ago`}
                    />
                  </UserBox>
                </TableCell>
                <TableCell align="left">
                  <CellText
                    main={row.name.customerName}
                    additional={`on ${row.name.on}`}
                  />
                </TableCell>
                <TableCell align="left">
                  <CellText main={row.date.day} additional={row.date.time} />
                </TableCell>
                <TableCell align="left">
                  {priorityMarkers[row.priority]}
                </TableCell>
                <TableCell align="center">
                  <MoreIcon />
                </TableCell>
              </BodyRow>
            ))}
          </TableBody>
        </StyledTable>
        <StyledPagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={1240}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <TicketsModal open={open} handleClose={handleClose} />
    </>
  );
};

export default TicketsTable;
