import MyBox from "~/styles/MyBox";
import AppsIcon from "@mui/icons-material/Apps";
import TrelloLogo from "./TrelloLogo";
import Menu from "./Menu";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Action from "./Action";

function AppBar() {
  return (
    <MyBox
      px={2}
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        justifyContent: "space-between",
      }}
    >
      <MyBox gap={2}>
        <AppsIcon />
        <TrelloLogo />
        <Menu />
        <Button variant='outlined' endIcon={<AddIcon />}>
          Create
        </Button>
      </MyBox>

      <MyBox>
        <Action />
      </MyBox>
    </MyBox>
  );
}

export default AppBar;
