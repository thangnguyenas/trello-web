import LightDarkMode from "./LightDarkMode";
import MyBox from "~/styles/MyBox";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Avatar from "@mui/material/Avatar";
import { TextField } from "@mui/material";
function Action() {
  return (
    <MyBox gap={1}>
      <TextField
        id='outlined-search'
        label='Search'
        type='search'
        size='small'
      />
      <LightDarkMode />
      <NotificationsNoneIcon />
      <HelpOutlineIcon />
      <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
    </MyBox>
  );
}

export default Action;
