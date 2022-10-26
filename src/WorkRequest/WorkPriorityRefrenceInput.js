import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput  } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickPreviewWorkPriorityButton from './QuickPreviewWorkPriorityButton';
import QuickSelectWorkPriorityButton from './QuickSelectWorkPriorityButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const WorkPriorityRefrenceInput = props => {
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
                <SelectInput optionText="WorkPriorityName" />
            </ReferenceInput>

            <QuickSelectWorkPriorityButton {...props} id={values.WorkPriorityID} setId={(id) => onChange(id)} /> 
            <QuickPreviewWorkPriorityButton id={values.WorkPriorityID} />
        </div>
    );
};

export default WorkPriorityRefrenceInput;
