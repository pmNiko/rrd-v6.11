// const [collapsed, setCollapsed] = React.useState(false);
// const [toggled, setToggled] = React.useState(false);
// const [broken, setBroken] = React.useState(false);
// const [rtl, setRtl] = React.useState(false);
// const [hasImage, setHasImage] = React.useState(false);
// const [theme, setTheme] = React.useState<Theme>("light");

import { createContext } from "react";

export interface LayoutState {
  collapsed: boolean;
  toggled: boolean;
  broken: boolean;
  rtl: boolean;
  hasImage: boolean;
  theme: "light" | "dark";
}

interface LayoutContextProps extends LayoutState {
  // Methods
  switchCollapsed: () => void;
  switchToggled: () => void;
  switchBroken: () => void;
  switchRtl: () => void;
  switchHasImage: () => void;
  switchTheme: (theme: "light" | "dark") => void;
}

export const LayoutContext = createContext({} as LayoutContextProps);
