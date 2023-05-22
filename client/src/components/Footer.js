import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <Box
      bgcolor={"#0066cc"}
      sx={{
        color: "white",
        display: "flex",
        alignItems: "center",

        width: "100%",
        height: "10vh",
        padding: "0 0 0 15px",
        marginTop: "50px",
      }}
    >
      <Stack direction="row" justifyContent="center" alignItems={"center"}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems={"flex-start"}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MADE BY EL YAZID HAKIMI
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Stack direction="row" alignItems="center" justifyContent="center">
              <GitHubIcon /> -Github :yazid0hakimi
            </Stack>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
