import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//import icon
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import MyBox from "~/styles/MyBox";

function LightDarkMode() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='select-small-label'>Mode</InputLabel>
      <Select
        labelId='select-small-label'
        id='select-small'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <MyBox gap={1}>
            <LightModeIcon />
            <span>Light</span>
          </MyBox>
        </MenuItem>
        <MenuItem value='dark'>
          <MyBox gap={1}>
            <DarkModeIcon />
            <sapn> Dark</sapn>
          </MyBox>
        </MenuItem>
        <MenuItem value='system'>
          <MyBox gap={1}>
            <SettingsBrightnessIcon />
            <span>System</span>
          </MyBox>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default LightDarkMode;
