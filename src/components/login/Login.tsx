import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GithubIcon from "../logo/GithubIcon";
import {useAuth} from "../../contexts/authentication";
import LoginHeading from "./LoginHeading";
import {useHistory, useLocation} from "react-router-dom";
import axios from "axios";
import {urlBackendLogin} from "../../params/urls";


function LoginButton() {
    return <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{mt: 3, mb: 2}}
    >
        Login
    </Button>;
}

function LoginWithGithubButton(onClick:any) {
    return <Button
        onClick={onClick}
        fullWidth
        variant="contained"
        sx={{mt: 3, mb: 2, bgcolor: '#EEE', color: '#111'}}
        startIcon={<GithubIcon/>}
    >
        Login with Github
    </Button>;
}


export default function Login(props:{}) {
    // @ts-ignore
    const {setToken, setLoggedIn} = useAuth()
    const history = useHistory();
    const search = useLocation().search;
    const jwtToken = new URLSearchParams(search).get('jwtToken');

    if (jwtToken) {
        setToken(jwtToken)
        setLoggedIn(true)
        history.push('/write-text')
    } else {
        setLoggedIn(false)
    }

    function handleSubmit(event:any) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        postCredentials({
            username: data.get('username'),
            password: data.get('password'),
        });
    }

    function postCredentials(credentials:any) {
        return axios
            .post(urlBackendLogin, credentials)
            .then(response => response.data)
            .then(result => {
                setToken(result)
                setLoggedIn(true)
            })
            .then(() => history.push('/write-text'))
            .catch(error => {   //axios catches status code 302 as error!?
                console.error(error)
                setLoggedIn(false)
            })
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
                <LoginHeading/>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField autoFocus margin="normal" required fullWidth
                               id="username"
                               label="Username"
                               name="username"
                               autoComplete="username"
                    />
                    <TextField margin="normal" required fullWidth
                               id="password"
                               name="password"
                               label="Password"
                               type="password"
                               autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <LoginButton/>
                    <LoginWithGithubButton
                        onClick={(event:any) => {
                        window.location.href = "https://github.com/login/oauth/authorize" +
                            "?client_id=" +
                            "2e78a31afe900fd1aef7" +
                            "&state=" +
                            Math.random().toString()
                    }}
                    />
                    https://github.com/login/oauth/authorize?client_id=2e78a31afe900fd1aef7
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