import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom'
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


function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        if(Password !== ConfirmPassword){
            return alert('비밀번호가 다릅니다.')
        }
    
        let body = {
            email: Email,
            name:Name,
            password: Password,
            
        }
    
        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success){
                props.history.push('/login')
            }else{
                alert('fail to signup')
            }
        })
    }
    const classes = useStyles();
    return (

        // <div style={{display:'flex', justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
        //     <form style={{display:'flex',flexDirection:'column'}} onSubmit={onSubmitHandler}>
        //         <label>Email</label>
        //         <input type="email" value={Email} onChange={onEmailHandler} />

        //         <label>Name</label>
        //         <input type="text" value={Name} onChange={onNameHandler} />

        //         <label>Password</label>
        //         <input type="password" value={Password} onChange={onPasswordHandler} />

        //         <label>Confirm Password</label>
        //         <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
        //         <br />
        //         <button type="submit">
        //             register
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
    Register
</Typography>
<form className={classes.form} noValidate onSubmit={onSubmitHandler}>
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
    value={Name}
    onChange={onNameHandler}
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="name"
    label="Name"
    name="name"
    autoComplete="name"
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
    <TextField
    value={ConfirmPassword}
    onChange={onConfirmPasswordHandler}
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="password"
    label="Confirm-Password"
    type="password"
    id="password"
    autoComplete="current-password"
    />
    <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    className={classes.submit}
    >
    Sign Up
    </Button>
</form>
</div>
<Box mt={8}>
</Box>
</Container>

    )
}

export default withRouter(RegisterPage)
