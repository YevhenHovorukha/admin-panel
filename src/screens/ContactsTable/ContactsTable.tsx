import { useState } from "react";
import { TableContainer, Paper } from "@mui/material";

import ContactsModal from "../../components/ContactsModal";
import PreHeaderBox from "../../components/TableComponents/PreHeaderBox";
import HeadComponents from "../../components/TableComponents/HeadComponents";
import ContactsBodyComponents from "../../components/TableComponents/ContactsBodyComponents";
import { TICKETS_DATA } from "../../constants/mocks";
import { paginationRowsPerPage } from "../../constants/tableConstants";
import { StyledPagination } from "../TicketsTable/styled";

import { StyledTable } from "./styled";

const columns = ["Name", "Email", "Address", "Created at ", ""];

const ContactsTable = () => {
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
        <PreHeaderBox handleOpen={handleOpen} text="contacts" />
        <StyledTable aria-label="simple table">
          <HeadComponents columnsNames={columns} isContacts={true} />

          <ContactsBodyComponents page={page} rowsPerPage={rowsPerPage} />
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
      <ContactsModal open={open} handleClose={handleClose} />
    </>
  );
};

export default ContactsTable;
