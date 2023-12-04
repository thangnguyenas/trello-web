import MyBox from "~/styles/MyBox";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
//import icon
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
function BoardBar() {
  return (
    <MyBox
      px={2}
      sx={{
        height: (theme) => theme.trello.boardBarHeight,
        justifyContent: "space-between",
        borderTop: "1px solid #ccc",
      }}
    >
      <MyBox gap={2}>
        <Chip icon={<DashboardIcon />} label='With Icon' />
        <Chip icon={<VpnLockIcon />} label='With Icon' />
        <Chip icon={<AddToDriveIcon />} label='With Icon' />
        <Chip icon={<BoltIcon />} label='With Icon' />
        <Chip icon={<FilterListIcon />} label='With Icon' />
      </MyBox>

      <MyBox gap={2}>
        <Button variant='outlined' startIcon={<PersonAddIcon />}>
          Invite
        </Button>
        <AvatarGroup max={4}>
          <Tooltip title='vanthang'>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='vanthang'>
            <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
          </Tooltip>
          <Tooltip title='vanthang'>
            <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
          </Tooltip>
          <Tooltip title='vanthang'>
            <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
          </Tooltip>
          <Tooltip title='vanthang'>
            <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
          </Tooltip>
        </AvatarGroup>
      </MyBox>
    </MyBox>
  );
}

export default BoardBar;
