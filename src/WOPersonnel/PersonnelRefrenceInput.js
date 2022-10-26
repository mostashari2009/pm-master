import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddPersonnelButton from './QuickAddPersonnelButton';
import QuickPreviewPersonnelButton from './QuickPreviewPersonnelButton';
import QuickSelectPersonnelButton from './QuickSelectPersonnelButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const PersonnelRefrenceInput = props => {
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
                <SelectInput optionText="PersonnelFamily" />
            </ReferenceInput>

            <QuickSelectPersonnelButton {...props} id={values.PersonnelID} setId={(id) => onChange(id)} />        
            <QuickAddPersonnelButton onChange={handleChange} />
            <QuickPreviewPersonnelButton id={values.PersonnelID} />
        </div>
    );
};

export default PersonnelRefrenceInput;
