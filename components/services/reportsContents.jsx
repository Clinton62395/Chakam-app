import { AlertCircle, Droplet, FileText, Flame } from "lucide-react-native";

//   stats
export const stats = [
  { label: "Total reports", value: 20, active: true },
  { label: "On-going reports", value: 5 },
  { label: "Resolved reports", value: 15 },
];

//   calender
export const reports = [
  {
    title: "Road Escalation",
    time: "12:35 pm",
    date: "12/03/25",
    status: "Resolved",
    icon: FileText,
  },
  {
    title: "Damaged Wire",
    time: "10:24 am",
    date: "10/03/25",
    status: "Resolved",
    icon: AlertCircle,
  },
  {
    title: "Leaking Pipe",
    time: "14:24 pm",
    date: "04/03/25",
    status: "Resolved",
    icon: Droplet,
  },
  {
    title: "Flood",
    time: "09:24 am",
    date: "19/02/25",
    status: "Resolved",
    icon: Flame,
  },
];

//   list of months
export const months = [
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
