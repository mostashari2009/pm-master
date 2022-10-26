import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput  } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddAssetClassButton from './QuickAddAssetClassButton';
import QuickPreviewAssetClassButton from './QuickPreviewAssetClassButton';
import QuickAssetClassSelectButton from './QuickAssetClassSelectButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    sel: { '& .MuiSelect-icon': {display: 'none' }},
});

const spySubscription = { values: true };

const AssetClassRefrenceInput = props => {
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
                <SelectInput className={classes.sel} optionText="AssetClassName" />
            </ReferenceInput>

            <QuickAssetClassSelectButton {...props} id={values.AssetClassID} setId={(id) => onChange(id)} />        
            <QuickAddAssetClassButton onChange={handleChange} />
            <QuickPreviewAssetClassButton id={values.AssetClassID} />
        </div>
    );
};

export default AssetClassRefrenceInput;
