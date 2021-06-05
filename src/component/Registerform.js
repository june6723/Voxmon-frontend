import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useState} from 'react'
import {connect} from 'react-redux'
import { registerUser } from '../action/authAction';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        },
        avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        },
        form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        },
        submit: {
        margin: theme.spacing(3, 0, 2),
        },
    }));
    

const RegisterForm = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordcheck, setPasswordCheck ] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()
        let body = {username:name,email:email, password:password}
        if(password !== passwordcheck){
            throw alert('Password was Incorrect');
        }
        try{
            const result = await dispatch(registerUser(body))
            alert('congratulation! successfully signed up!') 
            history.push('/login')
            console.log(result) 
            return result;
        }catch(error){
            alert('name or email is already registered')
            return error
        }
    }
    



    return(
            <div className="Registerform">         
                <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    name="Name"
                    autoComplete="name"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                </Grid>

                <Grid item xs={12}>
                <TextField  
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password Check"
                    type="password"
                    id="password"
                    value={passwordcheck}
                    onChange = {(e) => setPasswordCheck(e.target.value)}
                />
                </Grid>
            </Grid>


            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign Up
            </Button> 
            
            <Grid container justify="flex-end">
                <Grid item>
                <Link href="/login" variant="body2">
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        </Container>
        </div>
    )

}



export default RegisterForm