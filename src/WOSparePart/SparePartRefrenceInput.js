import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddSparePartButton from './QuickAddSparePartButton';
import QuickPreviewSparePartButton from './QuickPreviewSparePartButton';
import QuickSelectSparePartButton from './QuickSelectSparePartButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const SparePartRefrenceInput = props => {
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
                <SelectInput optionText="SparePartName" />
            </ReferenceInput>

            <QuickSelectSparePartButton {...props} id={values.SparePartID} setId={(id) => onChange(id)} />        
            <QuickAddSparePartButton onChange={handleChange} />
            <QuickPreviewSparePartButton id={values.SparePartID} />
        </div>
    );
};

export default SparePartRefrenceInput;
