import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { appLabels } from "../constants";
import { useState } from "react";
import Cookies from "js-cookie";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const navigate = useNavigate();

  const userLogin = Cookies.get("userLogin");

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove("userLogin");
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {appLabels.title}
        </Typography>
        <IconButton size="large" color="inherit" onClick={handleMenu}>
          <Avatar
            alt={appLabels.avatar}
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80"
          />
        </IconButton>
        <Menu
          id="header-menu"
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>{userLogin}</MenuItem>
          <MenuItem onClick={handleLogout}>{appLabels.logoutButton}</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
