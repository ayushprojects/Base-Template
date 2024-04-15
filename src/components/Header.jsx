import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Your Logo
                </Typography>
                <Button color="inherit" href="#about">
                    About
                </Button>
                <Button color="inherit" href="#skills">
                    Skills
                </Button>
                <Button color="inherit" href="#services">
                    Services
                </Button>

                <Button color="inherit" href="#projects">
                    Projects
                </Button>
                <Button color="inherit" href="#timeline">
                    Timeline
                </Button>
                <Button color="inherit" href="#testimonial">
                    Testimonial
                </Button>
                <Button color="inherit" href="#contact">
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;