import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const [open, setOpen] = useState(false);
  const Theme = useTheme();
  const MenuItems = ["About", "Services", "Projects", "Contacts"];
  const IsMobile = useMediaQuery(Theme.breakpoints.down('sm'))
  return (
    <>
      <AppBar
        elevation={0}
        className="Navbar"
        position="static"
        sx={{ backgroundColor: "white", color: "black", borderBottom:'1px solid #fafafa' }}
      >
        <Toolbar>
          {IsMobile ? (
            <div>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </div>
          ) : (
            <>
              <Typography sx={{ flexGrow: 1 }}>
                <img className="w-16 md:w-24" src="Images/degic 1.png" alt="" />
              </Typography>

              {MenuItems.map((item) => (
                <Button color="inherit" key={item}>
                  {" "}
                  {item}{" "}
                </Button>
              ))}

              <Button
                variant="outlined"
                sx={{
                  color: "#2AB691",
                  backgroundColor:'white',
                  borderRadius:'10px',
                  '&:hover':{
                    backgroundColor:'#2AB666',
                    color:'white'
                  }
                }}>
                  Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={()=> setOpen(false)}>
        <List>
          {MenuItems.map((item)=> (
            <ListItem Button key={item} onClick={()=> setOpen(false)}>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}

          <ListItem Button>
            <ListItemText primary='Sign Up' />
          </ListItem>

        </List>

      </Drawer>
    </>
  );
}

export default Navbar;
