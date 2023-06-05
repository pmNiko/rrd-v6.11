import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  Box,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { LayoutContext } from "../context";

export interface FooterProps {
  version: string;
}

export const Footer = ({ version }: FooterProps) => {
  const { theme } = useContext(LayoutContext);
  return (
    <Box
      sx={{
        height: "14rem",
        background: `${theme === "light" ? "#2ea3f2" : "#0b2948"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Grid container my={3}>
        <Grid
          item
          xs={12}
          textAlign="center"
          fontSize={15}
          color="white"
          mt={3}
        >
          <Typography>Municipalidad de San Martín de los Andes</Typography>
        </Grid>
        <Grid item xs={12} textAlign="center" fontSize={13} color="white">
          General Roca y Juan Manuel de Rosas
        </Grid>
        <Grid item xs={12} textAlign="center" fontSize={13} color="white">
          CP Q8370, Neuquén
        </Grid>
        <Grid item xs={12} textAlign="center" fontSize={13} color="white">
          Tel +54 2972 427315 internos 223 / 224 / 225
        </Grid>
        <Grid item xs={12} textAlign="center" fontSize={13} color="white">
          <FormControlLabel
            control={
              <a
                target="_top"
                rel="noopener noreferrer"
                href="mailto:consultas.rentas@smandes.gob.ar"
              >
                <IconButton
                  sx={{ color: `${theme === "light" ? "blue" : "#1976d2"}` }}
                >
                  <MailOutlineIcon />
                </IconButton>
              </a>
            }
            label={"consultas.rentas@smandes.gob.ar"}
            labelPlacement="end"
            sx={{ color: `${theme === "light" ? "blue" : "#1976d2"}` }}
          />
        </Grid>
        <Grid item xs={12} textAlign="center" fontSize={13} color="white">
          versión {version}
        </Grid>
      </Grid>
    </Box>
  );
};
