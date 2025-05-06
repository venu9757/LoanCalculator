import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DarkModeToggle from "./DarkModeToggle";
import { NavLink } from "react-router-dom";


const drawerWidth = 240;
const navItems = [
  { label: "HOME", path: "/" },
  { label: "EXCHANGE RATES (LIVE)", path: "/exchange-rates" },
  { label: "ABOUT", path: "/about" },
  { label: "ERROR PAGE", path: "/error" },
];

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#ffeb3b" : "#fff", // yellow for active, white for others
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
  borderBottom: isActive ? "2px solid #ffeb3b" : "none",
  "&:hover": {
    color: "#90caf9", // blue on hover
  },
});


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Loan Calculator
      </Typography>
      <Divider />
      <List>
  {navItems.map(({ label, path }) => (
    <ListItem key={label} disablePadding sx={{ mb: 1 }}>
      <ListItemButton
        component={NavLink}
        to={path}
        style={navLinkStyles}
        sx={{ textAlign: 'center' }}
      >
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
           
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Loan Calculator
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map(({ label, path }) => (
              <Button
                key={label}
                component={NavLink}
                to={path}
                style={navLinkStyles}
                sx={{ color: "#fff" }}
              >
                {label}
              </Button>
            ))}
          </Box>

          <DarkModeToggle />
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
