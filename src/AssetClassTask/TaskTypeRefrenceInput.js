import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddTaskTypeButton from './QuickAddTaskTypeButton';
import QuickPreviewTaskTypeButton from './QuickPreviewTaskTypeButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const TaskTypeRefrenceInput = props => {
    const classes = useStyles();
    const [version, setVersion] = useState(0);
    const { values } = useFormState({ subscription: spySubscription });
    const handleChange = useCallback(() => setVersion(version + 1), [version]);
    const FullNameField = ({ record }) => <span>{record.TaskTypeCode}_{record.TaskTypeName}</span>;

    return (
        <div className={classes.root}>
            <ReferenceInput key={version} {...props}>
                <SelectInput optionText={<FullNameField />} />
            </ReferenceInput>

            <QuickAddTaskTypeButton onChange={handleChange} />
            <QuickPreviewTaskTypeButton id={values.TaskTypeID} />
        </div>
    );
};

export default TaskTypeRefrenceInput;
