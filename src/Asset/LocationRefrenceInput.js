import React, { useState, useCallback } from 'react';
import { useFormState } from 'react-final-form';
import { ReferenceInput, SelectInput, useInput  } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import QuickAddLocationButton from './QuickAddLocationButton';
import QuickPreviewLocationButton from './QuickPreviewLocationButton';
import QuickLocationSelectButton from './QuickLocationSelectButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    }
});

const spySubscription = { values: true };

const LocationRefrenceInput = props => {
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
                <SelectInput optionText="LocationNameChain" />
            </ReferenceInput>

            <QuickLocationSelectButton {...props} id={values.LocationID} setId={(id) => onChange(id)} />        
            <QuickAddLocationButton onChange={handleChange} />
            <QuickPreviewLocationButton id={values.LocationID} />
        </div>
    );
};

export default LocationRefrenceInput;
