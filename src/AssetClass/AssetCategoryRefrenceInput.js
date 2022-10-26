import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput  } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickPreviewAssetCategoryButton from './QuickPreviewAssetCategoryButton';
import QuickPreviewAssetCatButton from './QuickPreviewAssetCatButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
});

const spySubscription = { values: true };

const AssetCategoryRefrenceInput = props => {
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
                <SelectInput optionText="AssetCategoryName" />
            </ReferenceInput>
            <QuickPreviewAssetCategoryButton {...props} id={values.AssetCategoryID} setId={(id) => onChange(id)} />        
            <QuickPreviewAssetCatButton id={values.AssetCategoryID} />
        </div>
    );
};

export default AssetCategoryRefrenceInput;
