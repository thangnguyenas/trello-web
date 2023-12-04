import MyBox from "~/styles/MyBox";
import Workspaces from "./Workspaces";
import Recent from "./Recent";
import Starred from "./Starred";
import Templates from "./Templates";
function Menu() {
  return (
    <MyBox gap={1}>
      <Workspaces />
      <Recent />
      <Starred />
      <Templates />
    </MyBox>
  );
}

export default Menu;
