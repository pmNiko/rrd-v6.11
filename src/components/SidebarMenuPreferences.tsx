import { useContext } from "react";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import { LayoutContext } from "../context";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { Switch } from "./Switch";

export const SidebarMenuPreferences = () => {
  const {
    switchCollapsed,
    collapsed,
    rtl,
    switchRtl,
    theme,
    switchTheme,
    hasImage,
    switchHasImage,
  } = useContext(LayoutContext);

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switchTheme(e.target.checked ? "dark" : "light");
  };
  return (
    <SubMenu label="Preferencias" icon={<RoomPreferencesIcon />}>
      <MenuItem>
        <div style={{ marginBottom: 16, marginTop: "2em" }}>
          <Switch
            id="theme"
            checked={theme === "dark"}
            onChange={handleThemeChange}
            label="Cambiar tema"
          />
        </div>
      </MenuItem>
      <MenuItem>
        <div style={{ marginBottom: 16, marginTop: "2em" }}>
          <Switch
            id="image"
            checked={hasImage}
            onChange={switchHasImage}
            label="Image"
          />
        </div>
      </MenuItem>
      <MenuItem>
        <div style={{ marginBottom: 16, marginTop: "2em" }}>
          <Switch
            id="rtl"
            checked={rtl}
            onChange={switchRtl}
            label="Posición"
          />
        </div>
      </MenuItem>
      <MenuItem>
        <div style={{ marginBottom: 16, marginTop: "2em" }}>
          <Switch
            id="collapse"
            checked={collapsed}
            onChange={switchCollapsed}
            label="Colapsar"
          />
        </div>
      </MenuItem>
    </SubMenu>
  );
};
