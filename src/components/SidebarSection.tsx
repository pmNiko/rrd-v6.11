import { useContext } from "react";
import { Typography } from "@mui/material";
import { LayoutContext } from "../context";

interface Props {
  label: string;
  [x: string]: any;
}

export const SidebarSection = ({ label, ...props }: Props) => {
  const { collapsed } = useContext(LayoutContext);

  return (
    <div style={{ padding: "0 24px", marginBottom: "8px", ...props }}>
      <Typography
        variant="caption"
        fontWeight={600}
        style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
      >
        {label}
      </Typography>
    </div>
  );
};
