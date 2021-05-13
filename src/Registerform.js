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
import { useState } from "react";
import { useHistory } from 'react-router-dom';


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
    
    
const Registerform = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [isPending, setisPending] = useState(false);

    const history =  useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = {name, email, password};
        setisPending(true);

            if(password === passwordCheck){
            fetch('http://localhost:5000/auth/register',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(users)
            }).then(res => res.json(),
            setisPending(false),
            history.push('/'))
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        
            }else{
                alert('Check Password');
            }
        
        
    } 



        const classes = useStyles();

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
                    value={passwordCheck}
                    onChange = {(e) => setPasswordCheck(e.target.value)}
                />
                </Grid>

                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                />
                </Grid>
            </Grid>


            { !isPending && <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign Up
            </Button> }
            { isPending && <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign Up...
            </Button>}
            <Grid container justify="flex-end">
                <Grid item>
                <Link href="#" variant="body2">
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


export default Registerform;