export interface ITicketData {
  id: string;
  image: string;
  details: { text: string; updated: number };
  name: { customerName: string; on: string };
  date: { day: string; time: string };
  priority: "high" | "low" | "normal";
}

export interface IContactData {
  id: string;
  image: string;
  name: string;
  email: string;
  address: string;
  createdAt: string;
}
