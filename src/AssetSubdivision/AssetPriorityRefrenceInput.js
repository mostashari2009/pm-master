import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput  } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddAssetPriorityButton from './QuickAddAssetPriorityButton';
import QuickPreviewAssetPriorityButton from './QuickPreviewAssetPriorityButton';
import QuickAssetPrioritySelectButton from './QuickAssetPrioritySelectButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    sel: { '& .MuiSelect-icon': {display: 'none' }},
});

const spySubscription = { values: true };

const AssetPriorityRefrenceInput = props => {
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
                <SelectInput className={classes.sel} optionText="AssetPriorityName" />
            </ReferenceInput>

            <QuickAssetPrioritySelectButton {...props} id={values.AssetPriorityID} setId={(id) => onChange(id)} />        
            <QuickAddAssetPriorityButton onChange={handleChange} />
            <QuickPreviewAssetPriorityButton id={values.AssetPriorityID} />
        </div>
    );
};

export default AssetPriorityRefrenceInput;
