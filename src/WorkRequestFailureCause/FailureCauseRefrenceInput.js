import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddFailureCauseButton from './QuickAddFailureCauseButton';
import QuickPreviewFailureCauseButton from './QuickPreviewFailureCauseButton';
import QuickSelectFailureCauseButton from './QuickSelectFailureCauseButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const FailureCauseRefrenceInput = props => {
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
                <SelectInput optionText="FailureCauseName" />
            </ReferenceInput>

            <QuickSelectFailureCauseButton {...props} id={values.FailureCauseID} setId={(id) => onChange(id)} />        
            <QuickAddFailureCauseButton onChange={handleChange} />
            <QuickPreviewFailureCauseButton id={values.FailureCauseID} />
        </div>
    );
};

export default FailureCauseRefrenceInput;
