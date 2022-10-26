import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddDelayButton from './QuickAddDelayButton';
import QuickPreviewDelayButton from './QuickPreviewDelayButton';
import QuickSelectDelayButton from './QuickSelectDelayButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const DelayRefrenceInput = props => {
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
                <SelectInput optionText="DelayName" />
            </ReferenceInput>

            <QuickSelectDelayButton {...props} id={values.DelayID} setId={(id) => onChange(id)} />        
            <QuickAddDelayButton onChange={handleChange} />
            <QuickPreviewDelayButton id={values.DelayID} />
        </div>
    );
};

export default DelayRefrenceInput;
