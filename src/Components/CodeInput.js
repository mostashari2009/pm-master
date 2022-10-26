import * as React from "react";
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useInput, required } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 256 },

});

const CodeInput = props => {
    const classes = useStyles();

    const {
        input: { name, value, ...rest },
        meta: { touched, error },
        isRequired
    } = useInput(props);

    return (
        <TextField
            required
            name={name}
            label={props.label}
            onChange={props.onChange}
            value={props.value ? props.value : null}
            disabled={props.disabled}
            labelFunc={(date) => (date ? props.onChange(props.value) : null)}
            variant="filled"
            textAlgin="right"
            margin="dense"
            className={classes.width}
            {...rest}
        />
    );
};

export default CodeInput;
