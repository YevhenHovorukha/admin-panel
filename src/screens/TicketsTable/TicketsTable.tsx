import { useState } from "react";
import { TableContainer, Paper } from "@mui/material";

import TicketsModal from "../../components/TicketsModal";
import PreHeaderBox from "../../components/TableComponents/PreHeaderBox";
import HeadComponents from "../../components/TableComponents/HeadComponents";
import TicketsBodyComponents from "../../components/TableComponents/TicketsBodyComponents";
import { TICKETS_DATA } from "../../constants/mocks";
import { paginationRowsPerPage } from "../../constants/tableConstants";

import { StyledTable, StyledPagination } from "./styled";

const columns = ["Ticket details", "Customer name", "Date", "Priority", ""];

const TicketsTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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
        <PreHeaderBox handleOpen={handleOpen} text="ticket" />
        <StyledTable aria-label="simple table">
          <HeadComponents columnsNames={columns} />

          <TicketsBodyComponents page={page} rowsPerPage={rowsPerPage} />
        </StyledTable>
        <StyledPagination
          rowsPerPageOptions={paginationRowsPerPage}
          component="div"
          count={TICKETS_DATA.length}
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
