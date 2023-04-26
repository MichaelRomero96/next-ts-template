import Button from '../../atoms/Button';
import Paper from '../../atoms/Paper';
import LoginForm from '../../organisms/LoginForm';
import useStyles from './styles';

const Auth = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paperWrapper}>
        <div className={classes.loginWrapper}>
          <LoginForm />
        </div>
        <div className={classes.signupMessage}>
          <div className={classes.signUpWrapper}>
            <h2>Welcome to Admin Panel</h2>
            <p>{`Don't have an account?`}</p>
            <Button text="Sign Up" outline />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Auth;
