import { Typography, Grid, Card, CardContent } from '@mui/material';

const About = ({ about }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h4">{about.name}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {about.title}
                        </Typography>
                        <Typography variant="body1">{about.description}</Typography>
                        <Typography variant="body2">Address: {about.address}</Typography>
                        <Typography variant="body2">Phone Number: {about.phoneNumber}</Typography>
                        <Typography variant="body2">Email: {about.contactEmail}</Typography>
                        <Typography variant="body2">Quote: "{about.quote}"</Typography>
                        <Typography variant="body2">Experience: {about.exp_year} years</Typography>
                        <Typography variant="body2">Total: {about.some_total}</Typography>
                        <Typography variant="body2">Sub Title: {about.subTitle}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default About;
