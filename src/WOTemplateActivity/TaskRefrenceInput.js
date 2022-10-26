import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddTaskButton from './QuickAddTaskButton';
import QuickPreviewTaskButton from './QuickPreviewTaskButton';
import QuickSelectTaskButton from './QuickSelectTaskButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const TaskRefrenceInput = props => {
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
                <SelectInput optionText="TaskName" />
            </ReferenceInput>

            <QuickSelectTaskButton {...props} id={values.TaskID} setId={(id) => onChange(id)} />        
            <QuickPreviewTaskButton id={values.TaskID} />
        </div>
    );
};

export default TaskRefrenceInput;
