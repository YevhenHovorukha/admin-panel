import { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination, Box, Typography } from "@mui/material";
import styled from "styled-components";

import TicketsModal from "../../components/TicketsModal";
import PreHeaderBox from "../../components/TableComponents/PreHeaderBox";
import HeadComponents from "../../components/TableComponents/HeadComponents";
import TicketsBodyComponents from "../../components/TableComponents/TicketsBodyComponents";

import { StyledTable } from "./styled";

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
        <PreHeaderBox handleOpen={handleOpen} />
        <StyledTable aria-label="simple table">
          <TableHead>
            <HeadComponents
              columnsNames={[
                "Ticket details",
                "Customer name",
                "Date",
                "Priority",
              ]}
            />
          </TableHead>
          <TicketsBodyComponents />
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
