import { Avatar, Typography, Card, CardContent, Grid } from '@mui/material';

const Testimonial = ({ data }) => {
    return (
        <>
            <h1>Testmonials</h1>
            <Grid container spacing={2}>
                {data.map((testimonial, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Avatar src={testimonial.image} alt={testimonial.name} />
                                <Typography variant="h6">{testimonial.name}</Typography>
                                <Typography variant="body1">{testimonial.review}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Testimonial;
