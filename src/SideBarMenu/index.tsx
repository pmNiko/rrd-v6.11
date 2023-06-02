import BookIcon from "@mui/icons-material/Book";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import {
  Menu,
  MenuItem,
  MenuItemStyles,
  Sidebar,
  menuClasses,
} from "react-pro-sidebar";
import { hexToRgba } from "../utils";
import { SidebarMenu, SidebarSection } from "../components";
import { Badge } from "../components/Badge";
import { SidebarFooter } from "../components/SidebarFooter";
import { SidebarHeader } from "../components/SidebarHeader";
import backgroung_image from "/municipio.jpg";

export type Theme = "light" | "dark";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#2ea3f2",
      color: "#ffffff",
    },
    menu: {
      menuContent: "#19669b",
      icon: "#f1f1f1",
      hover: {
        backgroundColor: "#1699f1",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

const SideBarMenu: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>("light");

  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRtl(e.target.checked);
  };

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  // handle on image change event
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasImage(e.target.checked);
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#f1f1f1",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1
            )
          : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
      onBreakPoint={setBroken}
      image={backgroung_image}
      rtl={rtl}
      breakPoint="md"
      backgroundColor={hexToRgba(
        themes[theme].sidebar.backgroundColor,
        hasImage ? 0.9 : 1
      )}
      rootStyles={{
        color: themes[theme].sidebar.color,
      }}
      style={{ borderRightWidth: "0px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <SidebarHeader
          rtl={rtl}
          style={{ marginBottom: "24px", marginTop: "0.5em" }}
          title="Oficina Virtual"
        />

        <div style={{ flex: 1, marginBottom: "32px" }}>
          <SidebarSection collapsed={collapsed} label="General" />

          <SidebarMenu menuItemStyles={menuItemStyles} />

          <SidebarSection
            collapsed={collapsed}
            label="Extras"
            paddingTop="2rem"
          />

          <Menu menuItemStyles={menuItemStyles}>
            <MenuItem
              icon={<EditCalendarIcon />}
              suffix={<Badge variant="success">New</Badge>}
            >
              Calendar
            </MenuItem>
            <MenuItem icon={<BookIcon />}>Documentation</MenuItem>
            <MenuItem disabled icon={<FavoriteIcon />}>
              Examples
            </MenuItem>
          </Menu>
        </div>

        <SidebarFooter collapsed={collapsed} />
      </div>
    </Sidebar>
  );
};

export default SideBarMenu;
