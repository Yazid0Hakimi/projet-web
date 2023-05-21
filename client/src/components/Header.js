import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import BookIcon from "@mui/icons-material/Book";
import {useSelector} from "react-redux"

const Header = () => {
  let val = useSelector((state) => state.isLogged.isLogged);
  console.log(val)
  // let val = "logedIn" === "logedout";
     return (
       <AppBar position="static">
         <Container maxWidth="xl" sx={{ width: "95vw", height: "10vh" }}>
           <Stack
             direction={"row"}
             justifyContent="space-between"
             alignItems={"center"}
             sx={{ height: "100%", flexGrow: 0 }}
           >
             <Stack
               direction="row"
               justifyContent="center"
               alignItems={"center"}
             >
               {" "}
               <BookIcon />
               <Typography
                 variant="h6"
                 noWrap
                 component="a"
                 href="/"
                 sx={{
                   mr: 2,
                   display: { xs: "none", md: "flex" },
                   fontFamily: "monospace",
                   fontWeight: 700,
                   letterSpacing: ".3rem",
                   color: "inherit",
                   textDecoration: "none",
                   color: "white"
                 }}
               >
                 BLOG
               </Typography>
             </Stack>
             {val ? (
               <Tooltip title="Open settings">
                 <IconButton sx={{ p: 0 }}>
                   <Avatar alt="User Avatar" src="/" />
                 </IconButton>
               </Tooltip>
             ) : (
               <Button
                 href="/login-register"
                 sx={{ fontWeight: 700, fontFamily: "monospace" }}
                 color="inherit"
               >
                 Login
               </Button>
             )}
           </Stack>
         </Container>
       </AppBar>
     );
  
}

export default Header
