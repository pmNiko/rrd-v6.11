import { createContext } from "react";
import { Theme } from "../interfaces";

export interface LayoutState {
  collapsed: boolean;
  toggled: boolean;
  broken: boolean;
  rtl: boolean;
  hasImage: boolean;
  theme: Theme;
}

interface LayoutContextProps extends LayoutState {
  // Methods
  switchCollapsed: () => void;
  switchToggled: () => void;
  switchBroken: () => void;
  switchRtl: () => void;
  switchHasImage: () => void;
  switchTheme: (theme: Theme) => void;
}

export const LayoutContext = createContext({} as LayoutContextProps);
