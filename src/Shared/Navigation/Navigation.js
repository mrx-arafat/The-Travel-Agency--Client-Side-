import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "white" }}
              {...{
                "aria-haspopup": "true",
              }}
            >
              <MenuIcon />
            </IconButton>
          </NavLink>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Travel
          </Typography>

          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
              padding: "6px 8px",
            }}
            to="/ourService"
          >
            Explore Packages
          </NavLink>
          {user?.email ? (
            <Box>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/addService"
              >
                <Button color="inherit">Add Service </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/order"
              >
                <Button color="inherit">My Order</Button>
              </NavLink>

              <Button color="inherit">
                {" "}
                <PersonIcon /> {user.displayName}
              </Button>
              <Button onClick={logout} variant="outlined" color="inherit">
                LogOut
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button variant="outlined" color="inherit">
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
