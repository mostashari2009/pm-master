import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput  } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickPreviewFailureModeButton from './QuickPreviewFailureModeButton';
import QuickSelectFailureModeButton from './QuickSelectFailureModeButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const FailureModeRefrenceInput = props => {
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
                <SelectInput optionText="FailureModeName" />
            </ReferenceInput>

            <QuickSelectFailureModeButton {...props} id={values.FailureModeID} setId={(id) => onChange(id)} /> 
            <QuickPreviewFailureModeButton id={values.FailureModeID} />
        </div>
    );
};

export default FailureModeRefrenceInput;
