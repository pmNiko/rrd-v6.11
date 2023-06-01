import BarChartIcon from "@mui/icons-material/BarChart";
import BookIcon from "@mui/icons-material/Book";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DiamondIcon from "@mui/icons-material/Diamond";
import PublicIcon from "@mui/icons-material/Public";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu, MenuItem, MenuItemStyles, SubMenu } from "react-pro-sidebar";
import { Badge } from "./Badge";

interface Props {
  menuItemStyles: MenuItemStyles;
}

export const SidebarMenu = ({ menuItemStyles }: Props) => {
  return (
    <Menu menuItemStyles={menuItemStyles}>
      <MenuItem icon={<BookIcon />}>Documentation</MenuItem>
      <SubMenu
        label="Charts"
        icon={<BarChartIcon />}
        suffix={
          <Badge variant="danger" shape="circle">
            6
          </Badge>
        }
      >
        <MenuItem> Pie charts</MenuItem>
        <MenuItem> Line charts</MenuItem>
        <MenuItem> Bar charts</MenuItem>
      </SubMenu>
      <SubMenu label="Maps" icon={<PublicIcon />}>
        <MenuItem> Google maps</MenuItem>
        <MenuItem> Open street maps</MenuItem>
      </SubMenu>
      <SubMenu label="Theme" icon={<DarkModeIcon />}>
        <MenuItem> Dark</MenuItem>
        <MenuItem> Light</MenuItem>
      </SubMenu>
      <SubMenu label="Components" icon={<DiamondIcon />}>
        <MenuItem> Grid</MenuItem>
        <MenuItem> Layout</MenuItem>
        <SubMenu label="Forms">
          <MenuItem> Input</MenuItem>
          <MenuItem> Select</MenuItem>
          <SubMenu label="More">
            <MenuItem> CheckBox</MenuItem>
            <MenuItem> Radio</MenuItem>
          </SubMenu>
        </SubMenu>
      </SubMenu>
      <SubMenu label="E-commerce" icon={<ShoppingCartIcon />}>
        <MenuItem> Product</MenuItem>
        <MenuItem> Orders</MenuItem>
        <MenuItem> Credit card</MenuItem>
      </SubMenu>
    </Menu>
  );
};
