
import React from 'react';
import { Typography, Grid, LinearProgress, Card, CardContent, CardMedia } from '@mui/material';

const Skills = ({ data }) => {
    return (
        <Grid container spacing={2}>
            {data.map((skill, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{skill.name}</Typography>
                            <LinearProgress variant="determinate" value={skill.percentage} />
                        </CardContent>
                        {skill.image && <CardMedia component="img" height="140" image={skill.image.url} alt={skill.name} />}
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Skills;