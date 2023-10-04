import userImage from "../assets/images/UserImage.png";
import userImage2 from "../assets/images/User2Image.png";
import userImage3 from "../assets/images/User3image.png";

interface ITicketData {
  image: string;
  details: { text: string; updated: number };
  name: { customerName: string; on: string };
  date: { day: string; time: string };
  priority: "high" | "low" | "normal";
}

export const TICKETS_DATA: ITicketData[] = [
  {
    image: userImage,
    details: { text: "Contact Email not Linked", updated: 1 },
    name: { customerName: "Tom Cruise", on: "24.05.2019" },
    date: { day: "May 26, 2019", time: "6:30 PM" },
    priority: "high",
  },

  {
    image: userImage2,
    details: { text: "Adding Images to Featured Posts", updated: 1 },
    name: { customerName: "Matt Damon", on: "24.05.2019" },
    date: { day: "May 26, 2019", time: "8:00 AM" },
    priority: "low",
  },
  {
    image: userImage3,
    details: { text: "When will I be charged this month?", updated: 1 },
    name: { customerName: "Robert Downey", on: "24.05.2019" },
    date: { day: "May 26, 2019", time: "7:30 PM" },
    priority: "normal",
  },
  {
    image: userImage,
    details: { text: "Contact Email not Linked", updated: 1 },
    name: { customerName: "Tom Cruise", on: "24.05.2019" },
    date: { day: "May 26, 2019", time: "6:30 PM" },
    priority: "high",
  },

  {
    image: userImage2,
    details: { text: "Adding Images to Featured Posts", updated: 1 },
    name: { customerName: "Matt Damon", on: "24.05.2019" },
    date: { day: "May 26, 2019", time: "8:00 AM" },
    priority: "low",
  },
  {
    image: userImage3,
    details: { text: "When will I be charged this month?", updated: 1 },
    name: { customerName: "Robert Downey", on: "24.05.2019" },
    date: { day: "May 26, 2019", time: "7:30 PM" },
    priority: "normal",
  },
  {
    image: userImage,
    details: { text: "Contact Email not Linked", updated: 1 },
    name: { customerName: "Tom Cruise", on: "24.05.2019" },
    date: { day: "May 26, 2019", time: "6:30 PM" },
    priority: "high",
  },

  {
    image: userImage2,
    details: { text: "Adding Images to Featured Posts", updated: 1 },
    name: { customerName: "Matt Damon", on: "24.05.2019" },
    date: { day: "May 26, 2019", time: "8:00 AM" },
    priority: "low",
  },
  {
    image: userImage3,
    details: { text: "When will I be charged this month?", updated: 1 },
    name: { customerName: "Robert Downey", on: "24.05.2019" },
    date: { day: "May 26, 2019", time: "7:30 PM" },
    priority: "normal",
  },
];

function formatCurrentDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  return `${month} ${day}, ${year}`;
}

interface IContactData {
  image: string;
  name: string;
  email: string;
  address: string;
  createdAt: string;
}

export const CONTACTS_DATA: IContactData[] = [
  {
    image: userImage,
    name: "Mandeep Walton",
    email: "mandeep.walton@gmail.com",
    address: `Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate",B98 9PA`,
    createdAt: formatCurrentDate(),
  },
  {
    image: userImage2,
    name: "Elena Sheldon",
    email: "elena.sheldon@gmail.com",
    address: `South Lodge, Reddish Lane, Lymm,WA13 9PY`,
    createdAt: formatCurrentDate(),
  },
  {
    image: userImage3,
    name: "Kim Gould",
    email: "kim.gould@gmail.com",
    address: `15 Romilly Street, Liverpool,L6 9JL`,
    createdAt: formatCurrentDate(),
  },
];