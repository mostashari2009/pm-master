import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
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
        transform: 'translate(-15px, 20px) scale(1)',
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
    marginTop: theme.spacing(1),
  },
  textField: {
    width: '100%',
  },
  label1:{
        dir: "rtl",
  },
}));

export default function MyUserField() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
    <div className={classes.root}>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" autoFocus required>
          <InputLabel className={classes.label1} direction="rtl" text-align="center" htmlFor="outlined-adornment-password">نام کاربری</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type='text'
            endAdornment={
              <InputAdornment position="end">
                <PermIdentityRoundedIcon
                  aria-label="toggle password visibility"
                  edge="start"
                >
                </PermIdentityRoundedIcon>
              </InputAdornment>
            }
          />
        </FormControl>
    </div>
    </div>
    </ThemeProvider>
  );
}
