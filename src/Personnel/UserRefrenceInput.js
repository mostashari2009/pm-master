import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddUserButton from './QuickAddUserButton';
import QuickPreviewUserButton from './QuickPreviewUserButton';
import QuickUserSelectButton from './QuickUserSelectButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const UserRefrenceInput = props => {
    const classes = useStyles();
    const [version, setVersion] = useState(0);
    const { values } = useFormState({ subscription: spySubscription });
    const handleChange = useCallback(() => setVersion(version + 1), [version]);
    const {
        input: { onChange },
      } = useInput(props);

    return (
        <div className={classes.root}>
            <ReferenceInput disabled key={version} {...props}>
                <SelectInput optionText="username" />
            </ReferenceInput>

            <QuickUserSelectButton {...props} id={values.user} setId={(id) => onChange(id)} />        
            <QuickAddUserButton onChange={handleChange} />
            <QuickPreviewUserButton id={values.user} />
        </div>
    );
};

export default UserRefrenceInput;
