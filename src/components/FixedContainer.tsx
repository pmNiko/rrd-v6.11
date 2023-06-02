import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";

export default function FixedContainer({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            marginTop: "1em",
            padding: "1em",
            // bgcolor: "#cfe8fc",
            height: "86vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              overflow: "auto",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {children}
            </div>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
