import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: 'url(https://source.unsplash.com/random/1920x1080)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <Typography variant="h2" gutterBottom>
                Welcome to My Portfolio
            </Typography>
            <Typography variant="h5" gutterBottom>
                Showcase your skills, projects, and experience.
            </Typography>
            <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
                Get Started
            </Button>
        </Box>
    );
};

export default Hero;