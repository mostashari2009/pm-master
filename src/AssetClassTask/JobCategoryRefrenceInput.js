import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddJobCategoryButton from './QuickAddJobCategoryButton';
import QuickPreviewJobCategoryButton from './QuickPreviewJobCategoryButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const JobCategoryRefrenceInput = props => {
    const classes = useStyles();
    const [version, setVersion] = useState(0);
    const { values } = useFormState({ subscription: spySubscription });
    const handleChange = useCallback(() => setVersion(version + 1), [version]);
    const FullNameField = ({ record }) => <span>{record.JobCategoryCode}_{record.JobCategoryName}</span>;

    return (
        <div className={classes.root}>
            <ReferenceInput key={version} {...props}>
                <SelectInput optionText={<FullNameField />} />
            </ReferenceInput>

            <QuickAddJobCategoryButton onChange={handleChange} />
            <QuickPreviewJobCategoryButton id={values.JobCategoryID} />
        </div>
    );
};

export default JobCategoryRefrenceInput;
