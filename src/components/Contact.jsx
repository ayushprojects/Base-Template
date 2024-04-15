
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <TextField label="Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField label="Message" variant="outlined" fullWidth multiline rows={4} margin="normal" />
            <Button variant="contained" color="primary">
                Send
            </Button>
        </Container>
    );
};

export default Contact;
