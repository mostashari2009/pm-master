import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  direction: 'rtl',
  overrides:{
    MuiInputLabel:{
      formControl:{
        right: '0 !important',
      },
      root:{
        fontFamily: ' !important',
      },
      outlined:{
        transform: 'translate(-5px, 20px) scale(1)',
      },
      shrink:{
        transformOrigin: 'top right',
        transform: 'translate(-5px, -6px) scale(0.75) !important',
        backgroundColor: '#FFFFFF !important',
        width:'80px',
      },
    },
    MuiFormLabel:{
      root:{
        fontFamily: ' !important',
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
  label1:{
        dir: "rtl",
  },
}));

export default function MyPassField() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
    <div className={classes.root}>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" required>
          <InputLabel className={classes.label1} direction="rtl" text-align="center" htmlFor="outlined-adornment-password">رمز</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="start"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
    </div>
    </div>
    </ThemeProvider>
  );
}
