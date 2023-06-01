import { Typography } from "@mui/material";

interface Props {
  collapsed: boolean;
  label: string;
  [x: string]: any;
}

export const SidebarSection = ({ collapsed, label, ...props }: Props) => {
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
