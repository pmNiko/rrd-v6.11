import { useContext } from "react";
import { Switch } from "./Switch";
import { LayoutContext } from "../context";

export const SidebarConfig = () => {
  const {
    collapsed,
    rtl,
    theme,
    hasImage,
    switchHasImage,
    switchTheme,
    switchRtl,
    switchCollapsed,
  } = useContext(LayoutContext);

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switchTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <div style={{ padding: "0 8px", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: 16 }}>
        <Switch
          id="collapse"
          checked={collapsed}
          onChange={switchCollapsed}
          label="Collapse"
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <Switch id="rtl" checked={rtl} onChange={switchRtl} label="RTL" />
      </div>

      <div style={{ marginBottom: 16 }}>
        <Switch
          id="theme"
          checked={theme === "dark"}
          onChange={handleThemeChange}
          label="Dark theme"
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <Switch
          id="image"
          checked={hasImage}
          onChange={switchHasImage}
          label="Image"
        />
      </div>
    </div>
  );
};
