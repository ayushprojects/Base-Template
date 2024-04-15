
import { Typography, Card, CardContent, Grid } from '@mui/material';

const Timeline = ({ data }) => {
    return (
        <Grid container spacing={2}>
            {data.map((item, index) => (
                <Grid item xs={12} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{item.company_name}</Typography>
                            <Typography variant="body1">{item.summary}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Timeline;