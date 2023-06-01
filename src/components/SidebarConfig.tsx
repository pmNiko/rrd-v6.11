import { PackageBadges, Switch, Typography } from ".";

interface Props {
  collapsed: boolean;
  toggleCollapsed: () => void;
  rtl: boolean;
  toggleRtl: (e: React.ChangeEvent<HTMLInputElement>) => void;
  theme: "light" | "dark";
  handleThemeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasImage: boolean;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SidebarConfig = ({
  collapsed,
  toggleCollapsed,
  rtl,
  toggleRtl,
  theme,
  handleThemeChange,
  hasImage,
  handleImageChange,
}: Props) => {
  return (
    <div style={{ padding: "0 8px", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: 16 }}>
        <Switch
          id="collapse"
          checked={collapsed}
          onChange={toggleCollapsed}
          label="Collapse"
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <Switch id="rtl" checked={rtl} onChange={toggleRtl} label="RTL" />
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
          onChange={handleImageChange}
          label="Image"
        />
      </div>
    </div>
  );
};
