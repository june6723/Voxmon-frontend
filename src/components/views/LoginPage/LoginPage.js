import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../../_actions/user_action'
import { useHistory, withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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


function LoginPage(props) {
    const history = useHistory()
    const dispatch = useDispatch();

const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")


const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
}

const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

const onsubmitHandler = (event) => {
    event.preventDefault();
    console.log('Email',Email)
    console.log('Password',Password)

    let body = {
        email: Email,
        password: Password
    }


    dispatch(loginUser(body, history))
}

const classes = useStyles();
    return (
        // <div style={{display:'flex', justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
        //     <form style={{display:'flex',flexDirection:'column'}} onSubmit={onsubmitHandler}>
        //         <label>Email</label>
        //         <input type="email" value={Email} onChange={onEmailHandler} />
        //         <label>Password</label>
        //         <input type="password" value={Password} onChange={onPasswordHandler} />
        //         <br />
        //         <button type="submit">
        //             Login
        //         </button>
        //     </form>
        // </div>

    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
        Sign in
    </Typography>
    <form className={classes.form} noValidate onSubmit={onsubmitHandler}>
        <TextField
        value={Email}
        onChange={onEmailHandler}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        />
        <TextField
        value={Password}
        onChange={onPasswordHandler}
        variant="outlined"
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
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        >
        Sign In
        </Button>
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
    </form>
    </div>
    <Box mt={8}>
    </Box>
    </Container>


    )
}

export default withRouter(LoginPage)
