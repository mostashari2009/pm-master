import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddAssetClassButton from './QuickAddAssetClassButton';
import QuickPreviewAssetClassButton from './QuickPreviewAssetClassButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const AssetClassSubdivisionRefrenceInput = props => {
    const classes = useStyles();
    const [version, setVersion] = useState(0);
    const { values } = useFormState({ subscription: spySubscription });
    const handleChange = useCallback(() => setVersion(version + 1), [version]);

    return (
        <div className={classes.root}>
            <ReferenceInput key={version} {...props}>
                <SelectInput optionText="AssetClassCode" />
            </ReferenceInput>

            <QuickAddAssetClassButton onChange={handleChange} />
            <QuickPreviewAssetClassButton id={values.AssetClassChildID} />
        </div>
    );
};

export default AssetClassSubdivisionRefrenceInput;
