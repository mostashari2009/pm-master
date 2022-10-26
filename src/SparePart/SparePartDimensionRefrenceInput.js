import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddSparePartDimensionButton from './QuickAddSparePartDimensionButton';
import QuickPreviewSparePartDimensionButton from './QuickPreviewSparePartDimensionButton';
import QuickSparePartDimensionSelectButton from './QuickSparePartDimensionSelectButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const SparePartDimensionRefrenceInput = props => {
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
                <SelectInput optionText="SparePartDimensionName" />
            </ReferenceInput>

            <QuickSparePartDimensionSelectButton {...props} id={values.SparePartDimensionID} setId={(id) => onChange(id)} />        
            <QuickAddSparePartDimensionButton onChange={handleChange} />
            <QuickPreviewSparePartDimensionButton id={values.SparePartDimensionID} />
        </div>
    );
};

export default SparePartDimensionRefrenceInput;
