import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useContext, useEffect, useState } from "react";

import {
  Menu,
  MenuItem,
  MenuItemStyles,
  Sidebar,
  menuClasses,
} from "react-pro-sidebar";
import {
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarSection,
} from "../components";

import { themes } from "../Theme";
import { LayoutContext } from "../context";
import { hexToRgba } from "../utils";
import { SidebarMenuPreferences } from "./SidebarMenuPreferences";
import backgroung_image from "/municipio.jpg";

export const SidebarContainer: React.FC = () => {
  const {
    collapsed,
    toggled,
    hasImage,
    rtl,
    theme,
    broken,
    switchToggled,
    switchBroken,
  } = useContext(LayoutContext);
  const [handlerBroken, setHandlerBroken] = useState(false);

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

  useEffect(() => {
    switchBroken();
  }, [handlerBroken]);

  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={switchToggled}
      onBreakPoint={setHandlerBroken}
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
          style={{ marginBottom: "24px", marginTop: "0.5em" }}
          title="Oficina Virtual"
        />

        <div style={{ flex: 1, marginBottom: "32px" }}>
          <SidebarSection label="General" />

          <SidebarMenu menuItemStyles={menuItemStyles} />

          <SidebarSection label="Extras" paddingTop="2rem" />

          <Menu menuItemStyles={menuItemStyles}>
            <SidebarMenuPreferences />
            <MenuItem disabled icon={<FavoriteIcon />}>
              Examples
            </MenuItem>
          </Menu>
        </div>

        <SidebarFooter />
      </div>
    </Sidebar>
  );
};
