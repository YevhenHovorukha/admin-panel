import { IContactData, ITicketData } from "../types/data";

export const getContactsData = async (): Promise<IContactData[]> => {
  try {
    const res = await fetch("http://localhost:3001/contacts");
    return await res.json();
  } catch (e) {
    throw e;
  }
};

export const getTicketsData = async (): Promise<ITicketData[]> => {
  try {
    const res = await fetch("http://localhost:3001/tickets");
    return await res.json();
  } catch (e) {
    throw e;
  }
};
