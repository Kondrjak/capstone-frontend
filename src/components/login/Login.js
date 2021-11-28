import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import UnicodeIcon from "../logo/UnicodeIcon";
import GithubIcon from "../logo/GithubIcon";
import {useAuth} from "../../contexts/authentication";

function LoginButton() {
    return <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
    >
        Login
    </Button>;
}

function LoginWithGithubButton() {
    return <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, bgcolor: '#EEE', color: '#111' }}
        startIcon={<GithubIcon/>}
    >
        Login with Github
    </Button>;
}

export default function Login(props) {
    const {postCredentials, postCredentialsGithub} = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        postCredentials({
            username: data.get('username'),
            password: data.get('password'),
        });
    }

    return (
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Button sx={{bgcolor: 'secondary.main'}} variant="contained" startIcon={
                        <UnicodeIcon/>}>
                        <Typography alignSelf={"center"} fontSize={"5.5em"} fontFamily={"Verdana"}>TYPE</Typography>
                    </Button>
                    <Avatar sx={{marginTop:10,marginBottom: 2, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <br/>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <LoginButton/>
                        <LoginWithGithubButton/>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
}