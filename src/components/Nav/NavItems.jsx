// IMPORT
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";

export const nav_items = [
  { id: 0, label: "Home", href: "/", icon: <HomeRoundedIcon /> },
  {
    id: 2,
    label: "Contact",
    href: "/Contact",
    icon: <EmailRoundedIcon />,
  },
  {
    id: 1,
    label: "Login",
    href: "/Login",
    icon: <AccountCircleRoundedIcon />,
  },
  // {
  //   id: 3,
  //   label: "Admin",
  //   href: "/Admin",
  //   icon: <BackupRoundedIcon />,
  // },
];
