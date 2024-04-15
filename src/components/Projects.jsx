import { Card, CardContent, CardActions, Typography, Button, Grid, Chip } from '@mui/material';

const Projects = ({ data }) => {
    return (
        <Grid container spacing={2}>
            {data.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{project.title}</Typography>
                            <Typography variant="body1">{project.description}</Typography>
                            <img src={project.image.url} alt={project.title} style={{ maxWidth: '100%', marginTop: '10px' }} />
                            <Typography variant="subtitle2" style={{ marginTop: '10px' }}>
                                Tech Stack:
                            </Typography>
                            {project.techStack.map((tech, index) => (
                                <Chip key={index} label={tech.trim()} style={{ margin: '4px' }} />
                            ))}
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href={project.liveurl} target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </Button>
                            <Button size="small" color="primary" href={project.githuburl} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Projects;
