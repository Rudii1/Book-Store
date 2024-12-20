import  AppBar  from "@mui/material/AppBar";
import  Box  from "@mui/material/Box";
import  Button  from "@mui/material/Button";
import  IconButton  from "@mui/material/IconButton";
import  Toolbar  from "@mui/material/Toolbar";
import  Typography  from "@mui/material/Typography";
import  MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Book App
                        </Typography>
                        <Button component={Link} to="/login" color="inherit">Login</Button>

                        <Button component={Link} to="/register" color="inherit">Register</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
};