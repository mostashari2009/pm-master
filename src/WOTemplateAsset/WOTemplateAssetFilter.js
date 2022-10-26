import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: '200px !important' }
});

const WOTemplateAssetFilter = (props) => {
    const classes = useStyles();
    return (
    <Filter {...props}>
        <TextInput className={classes.width} label="کد تجهیز" textAlgin="right" source="AssetSubdivisionID__AssetCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="عنوان تجهیز" textAlgin="right" source="AssetSubdivisionID__AssetName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="خانواده تجهیز" source="AssetSubdivisionID__AssetClassNameChain__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="مکان" textAlgin="right" source="AssetSubdivisionID__AssetID__LocationID__LocationNameChain__icontains" alwaysOn resettable/>
    </Filter>
);
};


export default WOTemplateAssetFilter;
