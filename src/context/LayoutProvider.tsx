import { useReducer } from "react";
import { LayoutContext, LayoutState } from "./LayoutContext";
import { layoutReducer } from "./layoutReducer";

const INITIAL_STATE: LayoutState = {
  collapsed: false,
  toggled: false,
  broken: false,
  rtl: false,
  hasImage: false,
  theme: "light",
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const LayoutProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(layoutReducer, INITIAL_STATE);

  const switchCollapsed = () => dispatch({ type: "collapsed" });
  const switchToggled = () => dispatch({ type: "toggled" });
  const switchBroken = () => dispatch({ type: "broken" });
  const switchRtl = () => dispatch({ type: "rtl" });
  const switchHasImage = () => dispatch({ type: "hasImage" });
  const switchTheme = (theme: "light" | "dark") =>
    dispatch({ type: "theme", payload: theme });

  return (
    <LayoutContext.Provider
      value={{
        ...state,
        switchCollapsed,
        switchToggled,
        switchBroken,
        switchRtl,
        switchHasImage,
        switchTheme,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
