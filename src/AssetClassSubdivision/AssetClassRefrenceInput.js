import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput  } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickPreviewAssetClassButton from './QuickPreviewAssetClassButton';
import QuickPreviewAssetClasButton from './QuickPreviewAssetClasButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
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
                <SelectInput optionText="AssetClassName" />
            </ReferenceInput>
            <QuickPreviewAssetClassButton {...props} id={values.AssetClassID} setId={(id) => onChange(id)} />        
            <QuickPreviewAssetClasButton id={values.AssetClassChildID} />
        </div>
    );
};

export default AssetClassRefrenceInput;
