import React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { Paper, withStyles, Grid, Button, FormControlLabel, Checkbox } from '@material-ui/core';

import MyPassField from "./MyPassField";
import MyUserField from "./MyUserField";
import MyCarousel from './CarouselNew';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
     root: {
        margin: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
  },
  Paper1: {
    width: '554px',
  },
  Paper2: {
    width: '323px',
  },
    img1:{
        height: '50px',
        margin: '5px 70px 0 0',
    },
    h3:{
        margin: '5px 5px 0 5px',
    },
    p:{
        margin: '5px 5px 0 5px',
    },
});
const MyLoginPage = ({ theme }) => {
        const classes = useStyles();

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const login = useLogin();
        const notify = useNotify();
        const submit = e => {
            e.preventDefault();
            login({ username, password }).catch(() =>
                notify('Invalid username or password')
            );
        };
        return (
            <ThemeProvider theme={createMuiTheme(defaultTheme)}>
            <div className={classes.root} dir="rtl">
                <Paper className={classes.Paper2}>
                    <div>
                            <Grid container direction={"column"} spacing={2} >
                                <Grid item >
                                    <img className={classes.img1} src="http://uupload.ir/files/5pq3_لوگوی_شرکت.png" alt="شرکت مشاوان تدبیرپرداز" />
                                </Grid>
                                <Grid item>
                                    <h3 className={classes.h3}>ورود به نرم افزار نگهداری و تعمیرات شرکت مشاوران تدبیرپرداز آویژه</h3>
                                </Grid>
                                <Grid item>
                                    <p className={classes.p}>برای ورود لطفا نام کاربری و رمز عبور خود را وارد کنید.</p>
                                </Grid>
                                        <Grid item>
                                            <form onSubmit={submit}>
                                                <input
                                                    name="username"
                                                    type="text"
                                                    value={username}
                                                    onChange={e => setUsername(e.target.value)}
                                                />
                                                <input
                                                    name="password"
                                                    type="password"
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                />
                                            </form>
                                        </Grid>
                            </Grid>
                                    <Grid container alignItems="center" justify="space-between">
                                        <Grid item>
                                            <FormControlLabel className={classes.label} control={
                                                <Checkbox
                                                    color="primary"
                                                />
                                            } label="یادآوری" />
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                                        <Notification />
                                        <Button variant="outlined" onClick={submit} color="primary" style={{ textTransform: "none" }}>ورود</Button>
                                    </Grid>
                    </div>
                </Paper>
                <Paper className={classes.Paper1}>
                    <box>
                    </box>
                </Paper>
            </div>
            </ThemeProvider>
        );
}

export default MyLoginPage;